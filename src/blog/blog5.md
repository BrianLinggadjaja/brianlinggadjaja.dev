# Blog 5

In this blog we will create a **GitHub Action** to *build* & *deploy* onto **GitHub Pages**.

---

## Overview
For this set-up we will be creating an action with two workflows, the **build** process for the code compilation step into a `dist` directory & the **deploy** process for deploying the newly created code for this blog into a *prod* branch.


## Initial GitHub Action Set-up
To create a GitHub Action we must create a `.github` directory and a `workflows` directory inside `.github/workflows`. After setting up the inital directory for GitHub Actions to recognize your workflows, you can create a name specified `.yaml` workflow for your project. in my case I named this workflow file `build_deploy.yml` to build automate my compilation of this blog and deploy onto a production branch for GitHub pages to consume.

## Compiling & Uploading our Code as an Artifact
We will be providing basic information and *trigger* events for this workflow to run on specified event from *git*. 

```yaml
# This is a basic workflow to help you get started with Actions
name: Build Repo & Deploy to Specified Branch

# Controls when the action will run. 
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ main, test-action ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:
```

In this case I set-up a trigger event for a *push* to occur on both the *main* & *test-action* branch. 

After doing the set-up we will create the first workflow for compiling our code on our *main* branch using the **Checkout** community action. Then we will process the compiled code and upload for later use, using the **Artifacts** community action.

```yaml
...
  build:
    name: Build into compiled dist directory

    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2
        with:
          ref: main

      # Runs a single command using the runners shell
      - name: Install dependencies
        run: npm install

      # Compiles repository under src/.vuepress/dist
      - name: Compile code
        run: npm run build

      # Save compiled code as artifact
      - name: Upload built directory
        uses: actions/upload-artifact@v2
        with:
          name: dist
          path: src/.vuepress/dist
          retention-days: 1
```

## Downloading and Deploying our Artifact Code
Once our code is uploaded as an artifact, it will be available during our workflow run to be used and downloaded onto our *prod* branch. In this process we will be visiting the *prod* branch using the `actions/checkout@v2` community action. We will then download our *compiled* code uploaded as an artifact from the previous *build* workflow. Finally we will be deploying our `dist` directory that is properly bundled up to be pushed onto my repo.

```yaml
...
  deploy:
    name: Deploy compiled code into target branch
    needs: build

    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
    - uses: actions/checkout@v2
      with:
      ref: prod

    # Download new compiled code artifact
    - name: Download compiled dist artifact
      uses: actions/download-artifact@v2
      with:
      name: dist
      # Download into current project directory
      path: ~/dist

    - name: Move compiled code artifact into working directory
      run: mv ~/dist ./

    - name: Package new compiled code & deploy to target branch
      run: |
        mv .git ./dist
        mv CNAME ./dist
        cd dist
        git config --global user.email "github-action@users.noreply.github.com"
        git config --global user.name "GitHub Action"
        git add .
        git commit -m "Automatic build deployment"
        git push
```

Here is the full code example of the full **GitHub Action** which compiles my **VuePress Blog** code and Deploys it onto a *prod* branch to be used on **GitHub Pages**

::: details View Full Code Example

```yaml
# This is a basic workflow to help you get started with Actions
name: Build Repo & Deploy to Specified Branch

# Controls when the action will run. 
on:
  # Triggers the workflow on push or pull request events but only for the main branch
  push:
    branches: [ main, test-action ]

  # Allows you to run this workflow manually from the Actions tab
  workflow_dispatch:

# A workflow run is made up of one or more jobs that can run sequentially or in parallel
jobs:
  # This workflow contains a single job called "build"
  build:
    name: Build into compiled dist directory

    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    # Steps represent a sequence of tasks that will be executed as part of the job
    steps:
      # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2
        with:
          ref: main

      # Runs a single command using the runners shell
      - name: Install dependencies
        run: npm install

      # Compiles repository under src/.vuepress/dist
      - name: Compile code
        run: npm run build

      # Save compiled code as artifact
      - name: Upload built directory
        uses: actions/upload-artifact@v2
        with:
          name: dist
          path: src/.vuepress/dist
          retention-days: 1

  deploy:
    name: Deploy compiled code into target branch
    needs: build

    # The type of runner that the job will run on
    runs-on: ubuntu-latest

    steps:
        # Checks-out your repository under $GITHUB_WORKSPACE, so your job can access it
      - uses: actions/checkout@v2
        with:
          ref: prod

      # Download new compiled code artifact
      - name: Download compiled dist artifact
        uses: actions/download-artifact@v2
        with:
          name: dist
          # Download into current project directory
          path: ~/dist

      - name: Move compiled code artifact into working directory
        run: mv ~/dist ./

      - name: Package new compiled code & deploy to target branch
        run: |
          mv .git ./dist
          mv CNAME ./dist
          cd dist
          git config --global user.email "github-action@users.noreply.github.com"
          git config --global user.name "GitHub Action"
          git add .
          git commit -m "Automatic build deployment"
          git push
```

:::

With the following GitHub Action running we can check to see on the **Actions Tab** to review our workflow run output.

With the following code I test it out with the command `node filename.js` and get this output...
![GitHub Action Output](/blog5/github_build-deploy_action.png)

---
title: Blog 2
---

**Date**: _09/18/2020_

This week I learned more about the core features of `Nuxt.js` while I build a dynamically routed blog section on my personal website. I also took some time to setup a docker instance with a standard `Linux-Appache-MySQL-PhP` (_LAMP_) Stack and manage the configuration and setup to deploy a containerized webserver. Finally, I've learned a new skill for `Continous-Integration/Continous-Deployment` (_CI/CD_) using`Travis-CI` to build my pipeline from development to deployment.

## Using Nuxt.js & Vuex to Dynamically Generate and Route Blog posts

I spent a lot of time understanding what the key differences in `Nuxt.js` are compared to standard `Vue.js` and how a statically generate a site using Nuxt.js uses a _state-management_ library such as `VueX`. I dynamically loaded _blog sections_ & _blogs_ dependent on how the folder structure was set up.

<img src="/assets/blog-file-structure.png" style="max-width: 30rem;" alt="brand logos" />

## Using Docker to Spin up a LAMPstack Web-Server

Using `docker`, I was able to create a **containerized enviornment** to support/deploy a **LAMP** stack web-application. With just a few commands like `docker run -it ubuntu:latest` to build an enviornment based off a pre-existing remote dockerfile hosted on `docker-hub`. I then interfaced with the container via CLI with the following command `docker exec -it HASH/Alias bash` and was able to have the full experience similar to a **VM**.

<img src="/assets/docker-container.png" style="max-width: 30rem;" alt="brand logos" />

## Building a CI/CD Pipeline with Travis-CI

I create a whole development/deployment workflow for this website to implement **CI/CD** principles using `Travis-CI`. I created two repositories on **GitHub**, one with my uncompiled code and another with _only_ compiled code available to my `GitHub Pages` repo which hosts my personal website. I learned about how to set-up my _travis.yml_ configuration file to properly **Test & Build** my application pipeline. I was able to implement Travis-CI for free since I have a public repo and I know I most likely won't go over the 100 build limit in case I switch over to a private repo, for now I should recieve no cost for a service to run my pipeline. I had encountered a technical barrier of having to host the root compiled code on my personal websites on GitHub Pages since I needed a way to compile my compile my code while ensuring the proper directory structure is maintained on my second public repo for my compiled codebase.

<img src="/assets/travis-ci.png" style="max-width: 30rem;" alt="brand logos" />

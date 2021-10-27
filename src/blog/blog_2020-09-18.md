---
title: Blog 2
index: 2
---

**Date**: _09/18/2020_

This week I learned more about the core features of `Nuxt.js` while I build a dynamically routed blog section on my personal website. I also took some time to setup a docker instance with a standard `Linux-Appache-MySQL-PhP` (_LAMP_) Stack and manage the configuration and setup to deploy a containerized web-server. Finally, I've learned a new skill for `Continuous-Integration/Continuous-Deployment` (_CI/CD_) using`Travis-CI` to build my pipeline from development to deployment.

## Using Nuxt.js & Vuex to Dynamically Generate and Route Blog posts

I spent a lot of time understanding what the key differences in `Nuxt.js` and process flow compared to vanilla `Vue.js` and how to statically generate a site using Nuxt.js uses a **state-management** library such as `VueX`. I dynamically loaded each **blog sections** & **blogs** dependent on how the folder structure was set up in the directory listing. With the help of Nuxt.js's `content module`, it supports **Mark Down** content creation through a _head-less CMS_ or **Content Management System** and supports browser integration that updates the blog's _Mark Down_ in **real time**.

<img src="/assets/2020/nuxt-content-module.gif" style="max-width: 30rem;" alt="blog file structure" />

Learn more on **Nuxt.js** & _State Management_: https://nuxtjs.org/guide/vuex-store/

## Using Docker to Spin up a LAMPstack Web-Server

Using `docker`, I was able to create a **containerized environment** to support/deploy a **LAMP** stack web-application. With just a few commands like `docker run -it ubuntu:latest` to build an environment based off a pre-existing remote docker image hosted on `docker-hub`. I then interfaced with the container via CLI with the following command `docker exec -it HASH/Alias bash` and was able to have the full experience similar to a Virtual Machine **VM**.

<img src="/assets/2020/docker-container.png" style="max-width: 30rem;" alt="docker engine" />

Find more on **Docker** in the following link: https://www.docker.com/

## Building a CI/CD Pipeline with Travis-CI

I create a whole development/deployment workflow for this website to implement **CI/CD** principles using `Travis-CI`. I created two repositories on **GitHub**, one with my un-compiled code and another with _only_ compiled code available to my `GitHub Pages` repo which hosts my personal website. I learned about how to set-up my _travis.yml_ configuration file to properly **Test & Build** my application pipeline. I was able to implement Travis-CI for free since I have a public repo and I know I most likely won't go over the 100 build limit in case I switch over to a private repo, for now I should recieve no cost for a service to run my pipeline. I had encountered a technical barrier of having to host the root compiled code on my personal websites on GitHub Pages since I needed a way to compile my compile my code while ensuring the proper directory structure is maintained on my second public repo for my compiled code base.

<img src="/assets/2020/travis-ci.gif" style="max-width: 30rem;" alt="travis pipeline build status" />

Find more about CI pipelines from **Travis-CI** at the following link: https://travis-ci.org/

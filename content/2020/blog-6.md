---
title: Blog 6
---

**Date**: _10/16/2020_

This week I started setting up my new project that runs on `Electron.js` & `Vue.js` which will eventually become a **markdown notetaking** application. During the project set-up I practiced some **code splitting** using `Vue Router` to dynamically import a file on route change.

## Setting up a new Vue.js w/ Electron.js project
I created a **vue-electron-template** repository with a template of the standard **Vue.js** & **Electron.js** framework as previously stated in a blog.

<br>

Check it out for yourself at: https://github.com/BrianLinggadjaja/vue-electron-template

<br>

I used this template as a base line to quickly spin up a new project idea for a **markdown notetaking** web-application/offline desktop application. Inside my `main.js` file I imported all my packages into my *Vue.js* application such as **Buefy** a UI framework and **Vue Router**. With the build process I implemented previously, I have a repository command that can be activated with `npm` or `yarn` to run a development server either as an **SPA** or **Electron.js** development process. With the *Electron.js* build process some extra steps were needed. My windows 10 system running *Windows Sub-system for Linux* **(WSL)** had to bind an interface to interact with the Electron.js development enviorment using an **XServer** to bind the application to a *GUI* interface. 

<br>

I installed the Windows XServer varient called **VcXsrv** at the following link: https://sourceforge.net/projects/vcxsrv/ to interact with my *Electron.js* running on *WSL*.

<img src="/assets/2020/md-notetaker.png" style="max-width: 30rem;" alt="markdown notetaker" />

Viola! With my `electron serve` command it popped open a connection with *VcXsrv* and ran my **Hot Reloaded** development enviornment.

## Setting up my project Directory Structure
I wanted to keep my project directory in a logical format. Two key features I made a layout for was between **global** vs **component** level code. Since I will be using **Vue Router** to mimic different page layouts, I made a **page** specific directory which houses all my main pages that will be used on the application. For any other independed "*modules*" I have another **component** directory for things like navigation/features. Since my **.vue** files are scoped for component level details for *html/css/js*, it is considered a *self-contained* module. Any other "**global**" level css I used was imported using an module called **sass-loader** which loads my *.sass* or *.scss* files into the proper places when needed globally.

<img src="/assets/2020/md-notetaker_file-system.png" style="max-width: 30rem;" alt="directory structure" />

## Code-split Routing with Vue Router
Since **Vue.js** is a Single-Page-Application (**SPA**). The underlying principle is **EVERYTHING** is loaded on page load by default. What I wanted instead was to load all content by a **page to page** basis without a *refresh* on the browser. The great thing about **Vue Router** is that I can dynamically load the page and essentially **code split** my application by only fetching the page contents when a route change occurs.

<img src="/assets/2020/md-notetaker_routing.png" style="max-width: 30rem;" alt="code split routing" />


As seen above, I've accomplished code splitting by *dynamically importing* my pages **ONLY** when a new route is triggered for that page. With this method, I improve the inital load times of the application while also allowing the different pages to be cached for later results due to this code-split routing architecture.

<br>

Find out more about Vue Router at: https://router.vuejs.org/

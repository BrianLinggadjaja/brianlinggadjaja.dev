---
title: Blog 1
---

**Date**: _09/05/2020_

This week I learned so much about **Server Side Rendering (SSR)/Static Site Generation (SSG)** using `Nuxt.js`, a top level `Vue.js` framework. I tried out a new design tool that allows creation for infographics & wireframes/mockups inside a web-app called `Figma`. Lastly, I configured my custom domain name from my domain provider **Namecheap** then routed traffic to **Cloudflare** which then redirects to my `Github Pages` repo for my personal website.

## Setting up a Custom Domain Name

I did some research on domain name providers and ended up going with `NameCheap` for their lower cost and free services offered compared to another big name provider like `Go Daddy`. Once I found my domain name provider I routed my traffic to `CloudFlare` which acts like a CDN to serve my conent even when one service fails to provide my page. I know this may be overkill for a page like this but... it offers a **free** plan for protection. A very small drawback of having cloudflare in the middle is having many redirects which decreases some SEO friendlyness at a small amount but nonetheless I believe it was still worth it for the value of services it adds; including **free SSL**!

## Brand Logo Creation using Figma

<div class="columns">
  <aside class="column is-one-quarter is-centered" style="max-width: 8rem;">
    <img src="/assets/logos.png" alt="brand logos" />
  </aside>

  <p class="column">
    Using <strong>Figma</strong> I was able to make infographics using the tools provided to craft my own personal logo. I started with the idea that my logo would contrast in colors on both Black & White backgrounds and be accessible enough to see from a farther distance from the screen. My idea was to play around with my initials <strong>L</strong> & <strong>B</strong> and integrate it within the logo itself. I played around with the idea of using simplistic shapes to generate my logo but ended up with the logo that's currently on the page after asking a few of my friends. Figma so far is an awesome service similar to <strong>Adobe XD</strong> which I am more familar with, I'll definetly take more time in learning the new tools <strong>Figma</strong> provides.
  </p>
</div>

You can find the **Figma** web-app at this following link.
https://www.figma.com/

## Building a JAMStack site with Nuxt.js

By far the most technically complex thing I did was setting up `Nuxt.js`, a top level `Vue.js` framework for adding **Server Side Rendering (SSR)** & **Static Site Generation (SSG)** support. I was accustomed to Vue.js previously and spent a few days getting used to the structure and build process of Nuxt.js. I ran the build process for a `JAMStack` which stands for _Javascript, Api, and Markup_ for my personal website. I decided on a JAMStack because it allows me to dynamically implement blog type features on the front-end as represented on this blog. Nuxt.js by default doesn't have support for markdown `.MD` file type integration but with the Nuxt.js's `Content Module` it allows direct support for markdown and acts like as a head-less **Content Delivery Network (CDN)** to implement quick and easy document creation. Not only does it allow markdown support but you can even implement _HTML_ and _Javascript_ and the content parser will render the proper elements accordingly

<br>

Check out the **Nuxt.js** framework at this following link.
https://nuxtjs.org/

## Using Buefy, a UI framework to quickly build out common UI elements

Time is valuable and there a lot of components on the web that are very common across each other. I am very familiar with `Bootstrap` which is the most common UI library and decided to try out `Buefy` for a different flavor. So far I am very impressed by the simplistic stylistic approach made by the Buefy team. Their modern approach to UI components are a breath of fresh air compared to the over-used bootstrap components all over the web.

<br>

Find **Buefy** on the following link.
https://buefy.org/

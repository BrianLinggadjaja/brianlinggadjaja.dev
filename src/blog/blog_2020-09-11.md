---
title: Blog 1
index: 1
---

**Date**: _09/11/2020_

This week I developed my skills with `docker compose` and learned `Python` for the first time to make a pull request on my friends **discord bot** that notifies our friend group when an upcoming birthday is through an `iCal` python library, `Discord SDK` for building a bot, and played around with `Electron.js` which allows code compiling for **Progressive Web Apps** (_PWA_) to be run on **many operating systems**.

## Learning more about Docker Compose

I was able to make my `docker container` easily deploy-able and have a faster setup time through simple commands like `docker-compose up -d` & `docker-compose down` through a DockerFile than manually building a container via `docker cli`. I played more around modifying and understanding how the overall docker build process works with _DockerFile_'s.

<br>

Utilize & Research **Docker Compose** over at: https://docs.docker.com/compose/

## Learning Python & Building a Discord Bot

For the first time ever I learned python and it only took a couple of days to get enough knowledge to build new features using `Python 3`. That's a true testament to how easy and accessible the python language is. I worked on additional code **portability** & **notification/output** on a `discord bot` that displays **birthdays** via command or **CRON** scheduling using the imported **iCal** file as a _data source_.

<br>

Feel free to support my friends open-source discord bot project ❤: https://github.com/shahedsalehian/ical_bot

<img src="/assets/2020/discord-birthday-bot.gif" alt="brand logos" style="width: 100%; max-width: 30rem;"/>

Learn more about **Discord Bot Development** at this following link: https://discord.com/developers/docs/intro

Check out the **Discord Python Library** over here: https://discordpy.readthedocs.io/en/latest/

## Playing around with Electron.js

I took some time to also play around with `Electron.js` which is an awesome `Node.js framework` which serves and provides your **Web-Application** as a **Native** application to all _major_ **Operating Systems**! I implemented electron through the `Vue CLI` tooling which adds _boiler-plate_ code in which I quickly just made a simple button component as my first _"hello world"_ to Electron.js. It took some time to get my environment working with `Windows Sub System for Linux 2` (**WSL2**) to properly compile and make my application attributable. After struggling for a few days I solved most my issues by moving my code base to WSL's **Linux Mount** directory where it provides a better **Linux integration** & used `VcXsrv` to act as the `xServe` interface compatibility between *WSL2* & *Windows*.

<img src="/assets/2020/electron.gif" alt="brand logos" style="width: 100%; max-width: 30rem;"/>

Dive deeper into **Electron.js** at: https://www.electronjs.org/docs

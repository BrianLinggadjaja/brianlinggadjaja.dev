---
title: Blog 7
---

**Date**: _10/23/2020_

This week I set up a `crontab` on my linux *dev enviornment* to auto update & upgrade all my linux services. I also made the big switch from windows to `PopOS` (a linux ubuntu distro) and installed a toolkit called `touchegg` to implement multi-gesture support on my *trackpad*. Finally I used `Rclone` to sync up my *shared* folder on google drive to my linux laptop.

## Setting up a Cron job for Linux
It was super easy to setup a `Cron` job with a simple command available called `crontab -e`. This command specifies a `cron` editor with the `-e` edit flag. Once I was able to open up the crontab configuration file I made a new cron with the following format `[Minute] [Hour in 24 Hour Format] [Day of Month] [Month] [Day of Week] (USER) (CMD)`. This allowed me to schedule `apt update && apt upgrade -y` to be run every day of the week.

<img src="/assets/2020/linux_crontab.png" style="max-width: 30rem;" alt="cron job scheduling using linux crontab" />

I used this amazing article to help set-up my Cron job scheduler: [Techmint Crontab Article](https://www.tecmint.com/create-and-manage-cron-jobs-on-linux/)

## Using the touchegg framework to program a linux touchpad
During my transition from **Windows 10** to **Linux** (*PopOS an Ubuntu distro*) I was met with a massive amount of initial configuration I had to do to set-up my machine the way I wanted it. I was very suprised with the amount of configuration I was able to do with the services/packages available on a **debian** distro. One of the packages I used to help configure my system was **touchegg**, a toolkit which provides *multi-touch* touchpad support which is interfaced with a custom *markdown* configuration fie.

<br>

Here's a link to touchegg if intersted in setting up your own: [Touchegg GitHub Repo](https://github.com/JoseExposito/touchegg)

<img src="/assets/2020/linux_touchegg.gif" style="max-width: 30rem;" alt="trackpad multi-finger gesture" />

As you can see from the above *gif*, I was able to set-up a multi-figer swipe to change my different *workspaces* on my machine. *Touchegg* provides support for (*swipes*, *touches*, *zooming*, *multi-finger*) with pre-made functionality or your own **custom commands** to run.

## Using Rclone to interface with Google Drive
I encountered a problem with my *Linux* enviornment in which my *shared* folder on my **Google Drive** does not support a *Linux* interface. One of the solutions I found was **Rclone** which allows you to use the *CLI* to run **CRUD** (*Create/Read/Update/Delete*) functionality on **cloud storage** providers like *Google, AWS, Azure, etc.* to manage your storage *locally* and *remote* changes. I used a command like `rclone copy` or `rclone sync` to manage these updates through a Command Line Interface (*CLI*). 

<img src="/assets/2020/linux_rclone.png" style="max-width: 30rem;" alt="rclone google drive" />

Learn more about managing your cloud storage providers at the following link... 

[Rclone Documentation](https://rcglone.org/docs/)

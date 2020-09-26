---
title: Blog 3
---

**Date**: _09/25/2020_

This week I learned more about `Docker` with the use of automated build container creation via `Dockerfile`'s.

## Building my first Dockerfile's

I was very suprised with how simple it was to learn about configuring a `Dockerfile`. I was able to pick up the same principles of manually building a docker container into creating a Dockerfile that would automate building an image I can use to build as many **Docker Containers** I want, which would allow building any future apps to be scalable with a simple build of a Dockerfile. I used the **FROM** command to pull a _remote_ image of `Ubuntu` and added a version number by following up with **:18.04**. I loved how if it cannot recognize a local image it will automatically pull from **Docker Hub** of the specified remote image name. I learned other commands like **ENV** & **ARG** which allow you to use **SCOPED Variables** that will allow certain restrictions with the use of portable variables that you can import anywhere in the _Dockerfile_. From my prior `BASH` scirpting knowledge I was able to build every other part of the image easily with the use of the **RUN** command.

<img src="/assets/2020/dockerfile-creation.png" style="max-width: 30rem;" alt="dockerfile" />

Find more on **Docker** in the following link: https://www.docker.com/

[Docker Command List](https://docs.docker.com/engine/reference/commandline/docker/)

[Dockerfile Reference](https://docs.docker.com/engine/reference/builder/)

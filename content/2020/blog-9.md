---
title: Blog 9
---

**Date**: _11/06/2020_

This week I messed around with the **Pokemon API** to create a small project that resembles a "*Tamagotchi*" kids toy. 

## Project Overview
For this mini-project, I built a web-based **Pokemon** "*Tamagotchi*" like client using JQuery. One of the requirements I wanted to fulfill was "*stats*" and "*status*" effect indicators which interact with each other to display to the viewer. Another requirement I wanted to give is the ability to have a randomly generated pokemon each time a new *Pokemon* is recruited. 

## Designing an Interactive System
Every recruited "*Tamagotchi*" **Pokemon** pet will take on a random set of values that will be rendered to the viewer. I followed a `one-way data-binded` type architecture in this case where from the *action* that is clicked within the system it first goes through the inital `check` sub-routine, then it grabs the appointed `data` processes, and finally is being rendered into the `view` of the client browser. During the *data* process aspect of the system, I mutated the `state` & `status` values that are dependent on the `stats` of the pet.

<img src="/assets/2020/pokemon_tamagotchi_graphic.png" style="max-width: 28rem;" alt="project diagram" />

## Using the Pokemon API to build a Tamagotchi
Using the *Interactive System* I built, I was able to process my data using the **Pokemon API** to generate a pet *pokemon* and **random** *stats*.

<br>

Find the Pokemon API at: [Pokemon API](https://pokeapi.co/)

<br>

The *Pokemon API* provides a specified `GET` request `http` route that can be used to interface in gathering *pokemon information*. The route I wanted to request was referenced as `https://pokeapi.co/api/v2/ability/{id or name}/`. Since the request can be sent as a **unique id** of the *Pokemon*, I was able to use all **Generation 1** pokemon with a number limiter of *150* (*All 150 Gen 1 Pokemon*). This pokemon request returned back to me *2 key* pieces of data I needed, the Pokemon `name` & `img src`. From there on I used this data during the **processing** portion of my *Interaction System* to generate a *unique* pet.

<img src="/assets/2020/pokemon_tamagotchi.png" style="max-width: 12rem;" alt="tamagotchi pokemon" />

Try it yourself at  my GitHub Repository at: [Pokemon Tamagotchi Repo](https://github.com/BrianLinggadjaja/tamagotchi_pokemon_pet)

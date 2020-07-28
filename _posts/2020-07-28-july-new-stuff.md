---
layout: post
categories: posts
title: New stuff
author: Pip
subtitle: 
featured-image: 
tags: [dev]
date-string: JULY 28, 2020
desc: A bingo app and an Epic Encounters 2 tool.
---
It's been a while, but with my exams out of the way, I can get back to doing stuff. This blog post will showcase 2 new things I've made recently:

### A bingo app
This has been on the site since March, but I only recently gave it some finishing touches. It's available [here](https://pinewood.team/bingo/).

![](/images/posts/july-new-stuff/bingo.png)
<p class="centered-text"><i>Man, these screenshots sure look like ass here.</i></p>

It's a bingo app made in React.js which lets you generate bingo boards from a list of words (and you can now make a number-based board too).

wFridge and I wanted a quick way to make bingo boards for shits and giggles, and we weren't pleased with all the obnoxious ad-riddled sites that already existed for that. So I made my own. It was my first time using React.js and I must say I have fallen in love with it, as you'll see below.

### An Epic Encounters 2 skill tree tool
The second new tool available on our site is another React.js app, which finds (or at least tries to find) the shortest paths towards user-specified combinations of constellations in [Epic Encounters 2](https://docs.google.com/document/d/1du5jE2dyDE4B4-Za0wolfe50ReeKXqkqdgG5FvAwKTo/edit#)'s epic skill tree. It's hosted [here.](https://www.pinewood.team/ee2calc/)

Epic Encounters 2 is an overhaul mod for Divinity: Original Sin 2 which adds a massive amount of content and has become my favorite way to play the game since its release back in August 2019.

A tool like mine has existed before (made by Serity), but the mod's skill tree went through a big overhaul a few months ago and Serity went MIA. Since nobody updated it I decided to tackle it myself.

And, to my surprise, it was much easier to make than I thought it would be. The EE2 skill tree has complex non-linear progression based on accumulating "embodiments" to gain access to more advanced constellations. Nodes can be removed at any time as long as you don't invalidate the requirements for your constellations, which means you can remove "early game" constellations once you complete more advanced ones and gain their embodiment rewards. The tool takes this into account, along with some other intricacies of the system.

![](/images/posts/july-new-stuff/ee2_calc.png)

My approach to finding the shortest paths was to create thousands of randomized builds (following the rules) that included the user's chosen constellations, and saving the most point-efficient one. While this is an inefficient approach, it certainly works.

Serity's tool had a way to iterate through every possible build in a programmatic manner, but I'm just not wise enough yet to understand how that would be done (and her code was too dense to examine).

I hope the community finds it useful in some way. I'm quite excited to revisit this in a few years and see how I could've made it better.

### Wrapping up
Last but not least, I wanted to address the current state of Awesome Soccer's development.

The sheer amount of work and time I had to dedicate to my exams made it clear there was no way I could live up to my estimate of finishing Awesome Soccer this summer. And especially with how little motivation for game development that I have right now. My summer break started 2 weeks ago but so far I haven't found the will to work as hard on Awesome Soccer as I thought I would.

Currently, I'm experimenting with moving AS over to React.js. With the 2 projects I mentioned in this blog post I feel I have become quite proficient with it, and I see many advantages to reworking AS to use it, such as:
- Separating UI code from the game code, greatly uncluttering the whole mess of a webpage that I made
- Creating new UIs with more ease, which would be very useful considering I still want to add 2 big features which would require their own special UIs (not just lists of buttons)
- Better compatibility. As you know, AS currently only works on desktop Chrome due to the ungodly amount of hacks in the code. Porting it to React.js could even open the doors for mobile support (which I would very greatly want to have)
- And finally, it would be a great opportunity to clean up the code and revise the schema for enemy and item definitions.

Thus I don't currently have anything new to show. I hope over the upcoming weeks I can start working on stuff again, whether it's AS updates or an entirely new game. I would really like to make stuff in Unity again, but it's hard as heck to come up with a game idea that is unique, fun, and most importantly, within my scope.

As always, thanks for reading. I assume some people from the EE2 discord will come here out of curiosity, and if so, then congrats, you're my webpage's first visitors! I didn't want to show it to anybody yet (since there is literally nothing of interest here), but I had no choice but to host the EE2 tool here.
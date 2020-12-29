---
layout: post
categories: posts
title: December Blog Post
author: Pip
subtitle: 
featured-image: /images/posts/dec-20/build_planner.png
tags: [dev]
date-string: DECEMBER 29, 2020
desc: All the stuff I've been up to these past 4 months in one big blog post!
---
It has been a long time since I wrote a blog post here, but that doesn't mean I've been sitting idly - in fact, these past 4 months have been the busiest months ever when it came to working on projects.

Since August, I've pushed out an Awesome Soccer update, numerous Epic Encounters 2 help resources along with an epic build planner app, and various private scripts/thingajingas.

So let's get right to what's relevant & noteworthy for the average www.pinewood.team user (sorted chronologically, more or less):

## Awesome Soccer Update
Awesome Soccer received another large update in September which came with (yet another) full rewrite of the game, this time in React.js.

The update brought new content, shoes as a large new feature, and major improvements to the interface and player experience. With confidence, I can finally say that Awesome Soccer can be played. As in, it's in a good enough state to be actually considered a game! A weird one, but a game nonetheless!

![](/images/posts/dec-20/awesome_soccer.png)
<p class="centered-text"><i>Random screenshot to make the post look nicer</i></p>

The update took almost the entirety of September to create. It was quite the effort, but it's one I will remember fondly - it was very fun to remake the interfaces in React and decouple the UI code from the game code, and the new features were fun to implement.

As an added bonus, thanks to the rewrite, the game now actually works on browsers outside of Chrome, and it even works on mobile! It's still a bit clunky there due to a lack of dedicated UI layout, but it felt great to finally be able to play some awesome Awesome Soccer soccer matches on my phone. I think the game's very fit for killing time outside your house.

The plan was to continue development after September, but motivation issues inhibited me from doing so. Future plans just never quite work out for me, but that's not a bad thing - I got to work on numerous other cool things instead. You'll see them below.

There already are plans for what the next Awesome Soccer update will be. Playtesting from this version has helped me realize what the game needs the most at the moment, and I hope the next big feature will elevate the game from "alright" to "pretty alright". The patch notes post for the last update hints at what this next big feature will be a bit, I believe.

## Epic Encounters 2 Things
I've been really into the [Epic Encounters 2](https://docs.google.com/document/d/1du5jE2dyDE4B4-Za0wolfe50ReeKXqkqdgG5FvAwKTo/edit#) mod for Divinity Original Sin 2 since it released, and thought it would be fun to expand my programming knowledge by making some nifty tools for it.

The [Ascension pathfinding tool](https://www.pinewood.team/ee2calc/) I showcased back in [July's blog post](https://www.pinewood.team/posts/2020-07-28/july-new-stuff.html) got a few updates since then, mainly improving its reliability. It still relies on a shitty method to do its thing, and while I now know a better way of going about it, reworking it is rather low priority. Especially with the new EE2 goodies I've released since then:

### List of item modifiers
The next EE2-related project I did after the Ascension tool was this [handy sortable list of all item modifiers](https://www.pinewood.team/ee2gearmods/), made in response to the itemization update in August.

![](/images/posts/dec-20/modifiers.png)

The data was imported from the mod's scripts which served to teach me the magic of regex expressions. Figuring out what exactly these values were required a bit of experimentation and poking the devs, but it was very fun and helped the community get the most out of the new item upgrade systems. This originally started out as a rather technical spreadsheet (linked in the page), but I turned it into a simplified website upon request.

### The Build Planner
Last but not least comes the greatest project I have worked on so far: [a build planner for EE2.](https://www.pinewood.team/ee2buildplanner/)

![](/images/posts/dec-20/build_planner.png)

It features:
-   Skill viewer, featuring correctly formatted tooltips with accurate in-game stats (unlike the official mod docs)
-   Ascension functionality:
    -   Add aspects and choose subnodes
    -   View node effects, embodiment requirements and rewards
    -   View all of your build's keyword activators and mutators at quick glance (a much-requested feature) - including keyword boons from Artifacts
-   Attribute/ability/civils/talents trackers
-   Artifacts and runes
-   Tally counters for stat boosts from Ascension, attributes, etc.
-   Sharing functionality through .json and a community build gallery with linkable builds

Which makes it quite a big deal! It's highly useful, relatively pretty and polished - making it the first project of mine that I would deem a finished, noteworthy product!

Development of it started in the last week of October, after a conversation with one of the mod's devs where he motivated me to pursue this vague idea I've had in my mind for a while.

![](/images/posts/dec-20/tooltip.png)
<p class="centered-text"><i>Pretty tooltips!</i></p>

I spent the first week creating multiple python scripts to parse all the necessary game data, which strengthened my regex skills and understanding of the game engine. By the end of the second week, I had a nice, functional prototype that I showed off to the community, which gathered a lot of interest. It got me very motivated.

It took about 5 weeks to finish and release it on December 13th (excluding a few breaks I took in between). For the first time ever, I experienced what the polishing phase of development is like - I'd say more than 50% of the time it took to make this was spent refining features, the interface and user experience; the core functionality of the app was implemented rather quickly in comparison.

It was very fun to finally get to work on a large project like this, where I knew there would actually be people using it. I put a lot more care into the UI than usual because of that, and learned a lot about making intuitive interfaces and CSS in the process.

It sure was an amazing project to end the year with. I learned all sorts of things while working on it, and I now feel very proficient at React.js.

# Sign-off and future plans
Thank you for reading this blog post. Next time I think I'll try blogging every time I release anything rather than making a large cumulative post like this - it'd make the site look more alive for sure.

Work and posts here used to be scarce because I didn't have much time for programming while I was in school. I didn't start university this year for reasons, so I'm spending as much time as I can learning by myself, which has given me the opportunity to work on far more programming stuff than usual.

Next year I plan to double-down on studying React, Japanese (which will be my fifth language), along with some maths, data structures and algorithms. I also gotta finish getting my driver's license - I got the theorical exam done this month, now I gotta start the actual driving.

As if those plans didn't sound like enough already, I also got a fantastic opportunity from an acquaintance that I sure won't want to skip: he offered me, a completely unqualified guy, some commission work after seeing how cool the planner app was. Needless to say I am amazed. I hope I can live up to his expectations.

As for more Team Pinewood projects, there isn't anything well planned-out at the moment, aside from the next Awesome Soccer update (no idea when that will come, though). I am considering making a new game in Unity, but with all the stuff I've got planned for the next few months I might have to put it off for later.

At the moment, I'm chilling out, resting after finishing the planner app and enjoying the holidays. I've been working a bit on a flash cards app to help me study Japanese nouns, which is coming along alright:

![](/images/posts/dec-20/kanji.png)

It pulls words from my notes and gives exercises to practice them. For now, I'm making this for personal use. If it turns out to be useful, I might consider polishing it up for a public release.

That's all I have to say for this blog post. Thanks again for reading, and I hope everyone has a nice new year!
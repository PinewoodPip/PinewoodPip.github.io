---
layout: post
categories: posts
title: The combat update for Awesome Soccer is out for testing!
author: Pip
subtitle:
featured-image: /images/projects/awesome_soccer_banner.png
tags: [Awesome Soccer, dev]
date-string: APRIL 11, 2020
desc: The first release of the combat update for Awesome Soccer is here!
---
Yep, it's here. The Combat Update has been in development since late Autumn 2019 and I'm really excited to finally get to the interesting part of it: adding content, balancing, and actually playing it!

![](/images/posts/combat-update/combat.png)

First of all, this blog post will be a bit low-effort. I've been working really hard these past few days on preparing the website and polishing the update for a pseudo-release, so I wanna get this post done quick.

The first release of the combat update is out and playable. This is still a pretty early version of the update, but it does have 3 areas you can travel to and all the basic mechanics are implemented. The purpose of this release is to gather early feedback on the gameplay.

From now on, development should be a lot smoother and consistent, as we shift the focus onto developing content instead of systems. This is the first time a game of ours has made it into the "content phase" and I'm very excited!

The current version contains 3 areas, 5 weapons, 6 artifacts and 2 soccer moves to try out, to get a feel for how the combat will be meant to play out. We will be progressively adding more toys for the player while working on the remaining features and areas.

If you want to check out all the equipment quickly, the "debug gym" button in the debug buttons unlocks all of them.

**/ ! \ PLAY WITH THE CONSOLE LOG ON !!! / ! \\**

[Ctrl + shift + i] opens the console. Please keep an eye out for any red warnings in there, as those mean the game has crashed.

<hr>
### Known issues / unfinished stuff worth keeping in mind:
- **Entering combat shows the enemy's name in the log**: This is supposed to be a "you found a wild X!" type of message but was not finished.
- **The combat log overflows and is ugly**: Will be adressed next week.
- **You can't unequip stuff**: Unequip buttons will be added soon.
- **Enemy descriptions are lame**: This, along with lore for the unlockables, will be addressed in a later update, maybe along with the addition of a "bestiary" to track slain enemies and their drops.
- **Any enemy can drop any unlockable**: Temporary solution, since we do not currently have enough areas/enemies to region-lock the drops as is intended.
- **Enemies use moves randomly**: This is only a problem with the self-healing spells, but we'd like to give them some basic AI in the future.
- **Entering any area past the first 3 crashes the game**: You're not supposed to go into those yet, cheater! Their data is a placeholder.
- **Soccer moves feel unbalanced/out of place**: With the addition of artifacts and weapons, soccer moves have been kinda "left behind". The next update will focus on adding more of them and making them viable and a vital part of combat, as they're meant to be.
- **Shouldn't sweat/willpower be displayed as bars?**: Yes.

<hr>
### Roadmap
Here are the planned big updates:

- **The Pre-Alpha Test**: Where we are now. The first release of the combat update, which will serve to gather feedback on everything implemented so far. Will be followed by some small bugfix updates if needed.
- **The Progression Update**: This update will implement better progression by adding more areas, equipment, region-locking items and will also add non-combat content such as new balls. Soccer moves and the Gym in general will also be revised and expanded, along with stat scaling. Oh, items will be in this one too, hopefully.
- **The Shoeforging Update**: This update will mark the return of shoes as equipment dropped from enemies, with random stat boosts. The Shoeforge (name pending) will allow you to fuse shoes together to create the equipment of your dreams. This feature will fill the need for more player stat customization.
- **The QoL Update**: This one will focus on polishing the game by improving the UI and text, adding any missing graphics, and will add clearer tutorials for lost sheep, paving the way towards showing the game to the public.
- **The Friends-and-Family Beta**: First 'public' release, which will aim to gather feedback from people I know.
- **THE Update**: The 1.0 update. It will add the final boss and implement suggestions from the Friends-and-Family beta.

We plan to progressively roll out features, so these "updates" will be more like phases of development. By that I mean that the entirety of the Progression Update probably won't be released all at once.

Note that this roadmap is not an exhaustive list. We'll be adding and tweaking content progressively whenever we feel like it.

<hr>
### Low priority stuff
We'd like to add localization (Spanish / Catalan / Polish / German) and the Arena area from previous iterations of the game, but both of these features are low-priority and may not make it into v1.0.

<hr>
### Where's the detailed changelog?
The amount of small changes to the base game was too big to note down, I'm sorry. That's just what happens with massive updates like this one. But from now on we'll be keeping detailed lists of the features we add and the changes we make, which will be available on our website instead of a cheap .txt file. The homepage will list the latest patch, and so will the project page.

<hr>
That's all. As always, I hope someone finds this fun to read in the future, and I hope I won't give up on developing the game.

So come on, get your game on, [go play (the update).](https://pinewood.team/AwesomeSoccer)
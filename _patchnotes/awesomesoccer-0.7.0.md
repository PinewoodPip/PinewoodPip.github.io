---
layout: patchnote
product: awesomesoccer
product-fancy: 'Awesome Soccer'
type: update
title: 'The Combat Update 2: REAWAKENING'
short-desc: Major content & polishing update
version: v0.7.0
date: 2020-09-24
---

Okay, you've seen the combat update, but are you ready to see it again?

This patch is a polished version of the combat update, with some nice new gameplay additions. I've made many changes and additions to improve the experience, such that the game can be taken more seriously. The game's "engine" has also been reworked significantly, which now allows me to make interfaces far more easily.

But enough of all that technical talk, let's get to the good stuff:

# NEW CONTENT

![](/images/posts/awesome-soccer-0.7.0/forging.png)

- **SHOES!!!** 
    - Back after so many years, and cooler than ever
    - Shoes drop from enemies, with different shoe drops per area
    - Each shoe comes with a specific stat modifier / perk, with randomized value (100% quality = best roll)
    - Combine 2 shoes in the Shoeforge to merge their properties and upgrade their quality. This costs a scaling amount of LP (halleluja, an LP sink)
    - Certain combinations of modifiers result in additional perks (ex. motivational + memorable. Won't spoil what it is), encouraging experimentation
    - Shoes protect your leg from breaking
    - Can dual-wield shoes with a perk from the gym (!!!)
    - All in all this feature should provide the stat customization that AS has always been lacking, as well as interesting long-term progression

![](/images/posts/awesome-soccer-0.7.0/shoe_example.png)
<hr/>
- **New Artifacts, and changes to old ones:**
    - **Realitious Virtuality Binocles**: If you were to take damage worth more than 30% of your maximum health, don't, and instead pay 40 Willpower. If you don't have enough Willpower, this effect does not trigger.
    - **Clipboard o' Deadlines**: Your Willpower Generation gets a bonus inversely proportional to your health %; for every 2% of health below/above 80%, your Willpower Generation is increased/decreased by 2% respectively.
    - **The Kingdom's Chronicles**: When you're below 40 Willpower, status effects which afflict you no longer decay. Positive stat increases from statuses are 20% less effective on you at all times.
    - **Engraved Ring of Healing** now grants 3% of max HP as out-of-combat healing instead of a flat amount. Healing from Willpower spending has been slightly nerfed
    - **Cleansing Talisman** reworked: When you attack with your weapon, the Cleansing Talisman removes one negative effect from your target to grant you 20 Willpower.
    - **Monocles of Duality**'s effects no longer cancel each other out, but stack.

<hr/>
- **New perks at the gym:**
    - **Mindfulness**: Increases your Willpower Allowance by 5 per level.
    - **Dual-Wearing**: Allows you to wear 2 shoes at a time. (!!!)
    - **Beta Armor**: Increases stat boosts from shoes by 10% per level.
    - **Mental Gymnastics**: Applies a permanent debuff to your enemies which increases their Manipulation by 8% per level, allowing you to inflict statuses upon them with more ease.
<hr/>

- New Soccer Move, **Self-Reserve**: Restore 15% health at the start of your next turn. Additionally, gain a 20% damage bonus for 3 turns. If empowered, restore 10% more health and gain +20% defense for 3 turns as well.
- New consumable item, **Clarity Nut**: Bust this bad boy open at anytime to gain a rush of inspiration and enlightenment.

![](/images/posts/awesome-soccer-0.7.0/stats.png)
- New combat stats, along with a new screen to see them!
    - **Willpower Generation**: a multiplier to (most of) the Willpower that you earn.
    - **Willpower Allowance**: amount of Willpower gained at the start of turns. (spoilers: it's not affected by the WP generation stat, sorry)
    - **Manipulation**: alters the chances of receving negative statuses
    - **Crit chance & multiplier**: self-explanatory
    - **Sweat Multiplier**: totally not busted

<hr/>
- Greatly improved new-player-experience, with tutorials, more helpful tooltips, and progressive unlocking of features
- A great amount of minor improvements throughout the whole interface
- You can now equip 2 artifacts at once, as was always intended
- **Hitsplats!** They're still a WIP, but should already make combat a much better experience.
- New area: **The Pine Woods**, which goes up to level 25
- New enemies in the temple area
- An improved loot screen, that displays your newly unlocked stuff with icons!
- Some balls now have flair text (not all)
- The D20 ball now allows you to perform critical successes and failures
- A new future-proof save system powered by recursion (your current save will be wiped, but that's no big deal)
- An unequip button, to cleanse oneself of unwanted artifacts
- Fancier ball menu, with icons
- Added an option to scale the game UI (for mobile play). Should you screw this up, you can reset it by loading the page with ?resetScale=true appended to the URL.

## MISCELLANEOUS CHANGES
- This update's so cool we're skipping a version number
- Defeating a boss for the first time now grants 1 Gym Membership Giftcard
- If you lose to a boss, you will encounter it again sooner
- No more debug buttons! Unless you know the passcode...
- If you have "prefer losses" ticked in the settings, the "winrate rounding" setting is changed to "lossrate rounding". Losers rejoice!
- You are 40% less likely to receive duplicate balls from lootboxes
- Starting from level 5, the xp you get from kicking the ball decreases with each level. Xp from Legendary Streaks is unaffected.
- Ball lootbox now costs 2 LP, down from 3, as Shoeforging has made LP very valuable
- The initial hit of Penalty Kick now ignores all defense, as was always intended
- Bunch of nerfs and buffs nobody is going to notice
- There is no longer a distinction between unlocking and upgrading perks/moves. They are considered unlocked and lvl 1 as soon as you buy them.
- Damage reduction from defense is now capped, but negative defense now results in damage amplification. Defense is likely to get reworked later, though.
- Willpower and Sweat is no longer expressed in percentages to reduce confusion with effects that are percentage-based or increase the caps
- The Gym is now accessed through the main, uhh, """"Shop"""" panel.
- The Breakdawner is now exclusively obtained from the Killfreak Temple's boss
- Each area now has different drops. Higher level areas grant better shoes.
- Base chance to break your leg is now 30%, down from 35%. Also, you can no longer break your leg twice in a row. These changes were made to frustrate newbies less.

- Totally didn't rewrite the whole game again
    - And especially not in React.js. Absolutely not.
    - Okay I actually did. And it was absolutely worth it. Interface-related stuff is super easy to work with now, and the code also heavily benefitted from decoupling game code from UI code. Plus, this means much better compatibility across browsers; see below!

## BROWSER COMPATIBILITY
The game now seems to work on Firefox and Edge, and, surprisingly, on mobile too! Or at least on Android Chrome; I haven't been able to try others. Here are a few pointers if you want to play it on mobile:
- Tap on text to view tooltips
- Use landscape mode
- Enable "Desktop site" setting on the Chrome app for much better scaling
- Adjust size of the interface in the config
- Tooltips don't seem to work on buttons, except for shoes. Will see what I can do about that
- Exporting/importing saves works between mobile & PC (probably not for iOS though, but I can provide a workaround later)

## UP NEXT
- A recipe book to keep track of your shoe crafting recipes, as well as hints
- The Arena, although likely with a different purpose
- A whole new major feature, involving a hook, which will become the primary way of obtaining shoes (and diversify the gameplay)
- More shoes and modifiers
- A bestiary
- More polish. Improving the tooltips is top priority, now that it is easy for me to do
- More areas, and eventually, the final boss

<hr/>
Sorry for the rather unorganized changelog. This patch's been quite the beast, and I am just too exhausted to make a nicely worded blog post about it at the moment. There's still a lot of work to be done though, especially when it comes to balancing, so I hope I'll get to work more on the game next week and publish a 0.7.1 version with any needed changes. Might also work on some new content too, we'll see. Until next time~!
---
layout: patchnote
product: awesomesoccer
product-fancy: 'Awesome Soccer'
type: update
title: The Killfreak Temple Update
short-desc: Adds a new area, 1 new weapon and numerous fixes.
version: v0.5.2
date: 2020-04-25
---

- Added a button to export/import saves
- Wiped saves again due to minor changes to the format
- Added a new secret area, the Killfreak Temple, accessed by obtaining a certain ball. Completing it unlocks the Breakdawner.
- Added a new weapon, the Shield of Resistance, which does not deal damage but increases your defense for the next enemy turn and grants 10% block chance. Can be empowered to increase the defense buff.
- When an entity has status effects, a * is appended to their name to indicate it, and hint at the ability to view status effects by hovering over someone's name.
- Removed the autobattler button. With the addition of combat, autobattler was confusing, and I don't think it's a feature anyone will really miss. It may be brought back in the future.
- Added player-specific lines for inflicting a status effect. No more "Player's defense has increased!" type of stuff.

Fixes:
- Fixed reapplying non-stackable status effects not resetting the duration
- Applying a new stack of a status effect now calls onApply()
- Fixed the ball not working after winning a fight

<script setup>
import ProjectContainer from './ProjectContainer.vue'

// I thought about moving this to json,
// but it doesn't make sense for a webpage this simple to require extra requests.
const PROJECTS = {
  MAIN: [
    {
      Name: "Epip",
      Description: "Large UI & QoL mod for Divinity: Original Sin 2 with an extensive feature set and configurability, made with Norbyte's Script Extender",
      Link: "/epip/",
    },
    {
      Name: "Ep1p",
      Description: "UI & QoL mod for Divinity: Original Sin 1 made with DLL injection and reverse-engineering",
      Link: "/ep1p/",
    },
  ],
  RESOURCES: [
    {
      Name: "Epic Encounters 2 Build Planner",
      Description: "CRPG build planner web app for Epic Encounters 2",
      Link: "/ee2buildplanner/",
    },
    {
      Name: "Divinity Skill Viewer",
      Description: "Skills reference for various Divinity: Original Sin 2 overhaul mods",
      Link: "/skillviewer/",
    },
    {
      Name: "Epic Encounters 2 Ascension Helper",
      Description: "Brute-forces optimal Ascension paths for Epic Encounters 2",
      Link: "/ee2calc/",
    },
    {
      Name: "Epic Encounters 2 Gear Modifiers List",
      Description: "Filterable list of equipment attributes in Epic Encounters 2",
      Link: "/ee2gearmods/",
    },
  ],
  OTHER: [
    {
      Name: "Lazy Galaxy 2",
      Description: "Incremental/clicker game with base-building and light RTS elements",
      Link: "https://store.steampowered.com/app/1477950/Lazy_Galaxy_2/",
    },
    {
      Name: "KF3 Tweaks",
      Description: "QoL & graphics improvement mod for Kemono Friends 3",
      Link: "https://github.com/pinewoodpip/kf3tweaks",
    },
  ],
}

</script>

<template>
  <div class="main-container px-5">
    <h2>Main Projects</h2>
    <p>You're probably here for my <i>Divinity: Original Sin</i> mods:</p>
    <ProjectContainer :projects="PROJECTS.MAIN"></ProjectContainer>
    
    <h2>Resources & Web Apps</h2>
    <p>I've also made various utilities and resources for <i>Divinity: Original Sin</i> games and its modded overhauls, mainly for <i>Epic Encounters 2:</i></p>
    <ProjectContainer :projects="PROJECTS.RESOURCES"></ProjectContainer>

    <h2>Other Projects</h2>
    <p>You may also be interested in my other works:</p>
    <ProjectContainer :projects="PROJECTS.OTHER"></ProjectContainer>
  </div>
</template>

<style scoped>
.read-the-docs {
  color: #888;
}
h2 {
  color: #8576de;
}
.main-container {
  max-width: 1200px;
}
</style>

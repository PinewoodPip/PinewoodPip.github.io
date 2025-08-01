<template>
  <!-- TODO figure out what it is about the project slots that causes horizontal overflow -->
  <div class="min-w-[100vw] flex flex-col items-center content-center mx-auto">

    <!-- Logo and title -->
    <div class="header-bg flex w-full">
      <div class="logo-container flex flex-column mx-auto items-center">
        <div class="flex flex-col content-center">
          <img class="logo" src="./assets/pinewood_rhombe_purple.svg"/>
          <h1 class="title my-auto">Team Pinewood</h1>
          <p class="subtitle mx-auto"><i>Niche software for niche people</i></p>
        </div>
      </div>
    </div>

    <!-- Bio -->
    <div class="max-w-[800px] flex lg:flex-row flex-col bg-base-200 rounded-lg py-5 px-5 gap-x-5 gap-y-3 items-center mt-5 mx-4">
      <div class="avatar">
        <div class="w-32 rounded-full">
          <img src="/avatar_pip.png" />
        </div>
      </div>
      <div class="flex flex-col gap-y-3">
        <p>I'm Pip, a software engineer with experience in game development and an avid modder.<br/>I mostly make mods for Larian Studios games, but I enjoy programming in general and also dabble in full-stack development and reverse-engineering.</p>
        <div class="flex gap-x-3">
          <a class="btn btn-primary" href="https://github.com/PinewoodPip">GitHub</a>
        </div>
      </div>
    </div>

    <!-- Projects -->
    <Projects class="mt-5 mx-auto"/>

    <!-- Footer -->
    <Footer class="mt-16"/>
  </div>
</template>

<script setup>
import { _themes as daisyThemes } from '#tailwind-config/daisyui'
import Projects from '../components/Projects.vue'
import Footer from '../components/Footer.vue'
// import { useColorMode } from '@vueuse/core'

// const colorMode = useColorMode();

const themes = [
  "system", ...daisyThemes
];
</script>

<style scoped>
.title {
  font-size: 3.2em;
  text-align: center;
}

.logo-container {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
  height: 200px;
}
.logo-container:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.header-bg {
  /* TODO get a higher res pic */
  /* background-image: url('./assets/bg.jpg');
  background-size: cover; */
  background-color: #202020;
}
.logo {
  max-height: 5em;
}
.subtitle {
  opacity: 50%;
  /* margin-top: -30px; */
}
h1 {
  color: #8576de;
}
/* Downsize logo and title on mobile resolutions */
@media only screen and (max-width: 600px) {
  .logo {
    max-height: 4em;
  }
  h1 {
    font-size: 2em;
  }
  .title {
    font-size: 2.5em;
  }
}
</style>
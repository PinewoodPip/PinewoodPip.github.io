<script setup>
import Projects from './components/Projects.vue'
import Footer from './components/Footer.vue'
</script>

<template>
  <div class="header-bg">
    <div class="logo-container d-flex flex-column">
      <div class="mx-auto my-auto">
        <!-- Logo and title -->
        <div class="d-flex justify-content-center">
          <img class="logo" src="./assets/pinewood_rhombe_purple.svg"/>
          <div class="mx-2"></div>
          <h1 class="my-auto">Team Pinewood</h1>
        </div>
        <p class="subtitle"><i>Niche software for niche people</i></p>
      </div>
    </div>
  </div>
  <Projects class="mx-auto"/>
  <Footer class="mt-5"/>
</template>

<style scoped>
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
}
</style>

<template>
  <div class="hero bg-base-200 rounded-lg">
    <div class="hero-content flex-col items-start lg:flex-row p-0 gap-0">
      <!-- Description & links -->
      <div class="flex flex-col gap-y-3 p-5 flex-grow basis-0 self-stretch">
        <div class="flex flex-col items-center mx-auto gap-y-2">
          <h1 class="text-xl font-bold text-center"><a :href="project.main_link">{{ project.name }}</a></h1>

          <!-- Skill badges -->
          <div class="flex flex-wrap gap-1">
            <span v-for="skill in project.skills" :key="skill" class="badge badge-sm badge-primary h-8">
              <img :src="SKILL_ICONS[skill]" alt="Skill icon" class="inline-block size-6 aspect-square" />
              {{ skill }}
            </span>
          </div>
        </div>

        <slot name="description" />
        <p v-if="!$slots.description">{{ project.description }}</p>

        <!-- Bullet points -->
        <p v-if="project.bullet_points.length > 0" class="opacity-80"><i>Key points:</i></p>
        <ul class="list-disc ml-5">
          <li v-for="(feature, index) in project.bullet_points" :key="index">{{ feature }}</li>
        </ul>

        <div class="my-auto" />

        <!-- Links -->
        <div class="flex gap-x-3 mx-auto">
          <a v-for="link in project.links" class="btn btn-primary" :href="link.url">{{ link.name }}</a>
        </div>
      </div>

      <!-- Screenshot carousel -->
      <figure v-if="!isMinor" class="rounded-lg flex-grow basis-0 my-auto">
        <Carousel v-if="project.images.length > 1" v-bind="carouselConfig">
          <Slide v-for="(image, index) in project.images" :key="index">
            <img class="rounded-lg" :src="image" alt="Screenshot" />
          </Slide>

          <!-- Carousel controls -->
          <template #addons>
            <Navigation />
            <Pagination />
          </template>
        </Carousel>
        <!-- Don't show carousel if there is only one image -->
        <img v-else class="rounded-lg" :src="project.images[0]" alt="Screenshot" />
      </figure>
    </div>
  </div>
  
</template>

<script setup lang="ts">
import 'vue3-carousel/carousel.css'
import { Carousel, Slide, Pagination, Navigation } from 'vue3-carousel'

const props = defineProps<{
  project: Project,
  isMinor: boolean,
}>();

const carouselConfig = {
  itemsToShow: 1,
  wrapAround: true,
  autoplay: 10000,
}

const SKILL_ICONS: {[skill: string]: string} = {
  "C++": "/icons/cpp.png",
  "Ghidra": "/icons/ghidra.png",
  "React": "/icons/react.svg",
  "Vue": "/icons/vue.png",
  "Nuxt": "/icons/nuxt.svg",
  "FastAPI": "/icons/fastapi.png",
  "PostgreSQL": "/icons/postgresql.png",
  "C#": "/icons/csharp.png",
  "Unity": "/icons/unity.png",
  "Lua": "/icons/lua.png",
  "Python": "/icons/python.png",
}

</script>

<style scoped>
/* 
  Add stroke to carousel navigation buttons for better contrast 
  Source: https://stackoverflow.com/a/18330345
*/
path {
  stroke: #fde7ff;
  stroke-width: 1px;
  stroke-linejoin: round;
}

.project-card>a {
  font-size: large;
  display: inline-block;
}

.project-card {
  max-width: 400px;
  box-shadow: 10px 10px 19px 0 rgba(26, 26, 26, .96);
  background-color: #25272c;
  transition: all .1s ease-in;
  border: 2px solid rgba(48, 48, 48, 0.527);
  border-radius: 5px;
  min-height: 150px;
}

.project-card:hover {
  transform: translate(0, -5px);
  box-shadow: 16px 16px 19px 0 rgb(26, 26, 26);
  cursor: pointer;
}

.project-card-header {
  background-color: #222427;
}
</style>

<style>
/* Overrrides for carousel styles */

.carousel__pagination-button {
  @apply bg-purple-300 border-gray-100 border rounded-sm min-h-full min-w-full
}

.carousel__pagination-button:hover {
  @apply bg-purple-500
}

.carousel__pagination-button--active {
  @apply bg-purple-500
}

.carousel__pagination-item {
  @apply min-h-5 min-w-10
}

.carousel__icon {
  @apply text-purple-500 outline-2
}

</style>
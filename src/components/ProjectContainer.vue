<script setup>

import Project from './Project.vue'

const props = defineProps(['projects'])

</script>
<template>
  <div class="container">
    <div class="row justify-content-center">
      <Project class="col-xl-6 m-2" v-for="project in props.projects" :key="project.Name" :project="project"></Project>
    </div>
  </div>
</template>
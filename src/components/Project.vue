<script setup>

const props = defineProps(['project'])

function gotoLink() {
  window.location.href = props.project.Link
}

</script>
<template>
  <div class="project-card d-flex flex-column p-0" @click="gotoLink">
    <div class="project-card-header p-2">
      <a class="mb-3" :href="props.project.Link">{{ props.project.Name }}</a>
    </div>
    <p class="my-auto mx-2">{{ props.project.Description }}</p>
  </div>
</template>

<style scoped>
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
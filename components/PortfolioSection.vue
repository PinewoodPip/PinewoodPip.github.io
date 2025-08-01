<template>
  <div class="flex flex-col">
    <div class="divider my-5">
      <h1 class="text-[1.5em]">{{ name }}</h1>
    </div>
    <div class="flex flex-col gap-y-5">
      <slot name="projects" />
    </div>
  </div>
</template>

<script setup lang="ts">

const props = defineProps<{
  name: string,
}>();

</script>
<template>
  <div
    class="
      relative
      block
      p-6
      max-w-sm
      bg-white
      rounded-lg
      border border-gray-200
      shadow-md
      hover:bg-gray-100
      dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700
      text-left
      my-5
      md:my-10
      font-Kumbh
    "
  >
    <img :src="job.logo" class="absolute -top-5" alt="logo" />
    <h4 class="text-Gray my-3 block">
      {{ job.postedAt }} . {{ job.contract }}
    </h4>
    <router-link :to="{ name: 'ShowJob', params: { id: job.id } }">
      <h1 class="text-xl font-bold dark:text-white">{{ job.position }}</h1>
    </router-link>
    <h3 class="text-md text-Gray my-2">{{ job.company }}</h3>
    <h4 class="text-violet font-bold mt-5">{{ job.location }}</h4>
  </div>
</template>

<script>
export default {
  props: ["job"],
};
</script>

<style>
</style>
<template>
  <nav
    class="
      flex
      relative
      justify-between
      items-center
      px-20
      py-20
      rounded-bl-full
    "
  >
    <router-link to="/">
      <h1 class="text-white text-2xl">Devjobs</h1>
    </router-link>
    <div class="flex justify-center items-center space-x-2">
      <img src="../assets/desktop/icon-sun.svg" alt="" />

      <label
        for="default-toggle"
        class="inline-flex relative items-center cursor-pointer"
      >
        <input
          type="checkbox"
          value=""
          id="default-toggle"
          class="sr-only peer"
          @click="toggleDark"
        />
        <div
          class="
            w-11
            h-6
            bg-gray-200
            rounded-full
            peer
            peer-focus:ring-4 peer-focus:ring-blue-300
            dark:peer-focus:ring-blue-800 dark:bg-gray-700
            peer-checked:after:translate-x-full peer-checked:after:border-white
            after:content-['']
            after:absolute
            after:top-0.5
            after:left-[2px]
            after:bg-white
            after:border-gray-300
            after:border
            after:rounded-full
            after:h-5
            after:w-5
            after:transition-all
            dark:border-gray-600
            peer-checked:bg-blue-600
          "
        ></div>
        <span
          class="ml-3 text-sm font-medium text-gray-900 dark:text-gray-300"
        ></span>
      </label>
      <img src="../assets/desktop/icon-moon.svg" alt="" />
    </div>
  </nav>
</template>

<script>
export default {
  methods: {
    toggleDark() {
      document
        .getElementById("default-toggle")
        .addEventListener("change", function () {
          if (this.checked) {
            document.documentElement.classList.add("dark");
          } else {
            document.documentElement.classList.remove("dark");
          }
        });
    },
  },
};
</script>

<style>
</style>
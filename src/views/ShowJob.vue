<template>
  <div
    class="flex flex-col justify-center items-center"
    v-for="job in getData($route.params.id)"
    :key="job.id"
  >
    <!-- <from class="max-w-5xl flex items-center -translate-y-5 w-full bg-white"> -->
    <div
      class="
        -translate-y-5
        bg-white
        dark:bg-[#242e3f] dark:text-white
        font-Kumbh
        py-4
        lg:w-[730px] lg:h-[140px]
        flex flex-col
        md:flex-row
        items-center
        container
        relative
      "
    >
      <!-- {{ job.logoBackground }} -->
      <!-- {{ logoBackground }} -->
      <!-- { [`bg-[${job.logoBackground}]`]: active } -->
      <!-- <div class="bg-[#e54b24] invisible"></div>
      <div class="bg-[#ea9310] invisible"></div>
      <div class="bg-[#353641] invisible"></div>
      <div class="bg-[#2f4fc6] invisible"></div> -->

      <div :class="[`bg-[${job.logoBackground}]`]">
        <img
          :src="'.' + job.logo"
          class="w-[140px] h-[140px] border-none bg-[job.logoBackground]"
          alt="logo"
        />
      </div>
      <div class="ml-4">
        <h1 class="text-3xl my-4 font-bold">{{ job.company }}</h1>
        <h3 class="text-xl">{{ job.website }}</h3>
      </div>
      <button
        class="
          bg-LightGrey
          text-violet
          dark:bg-midNight dark:text-white
          font-bold
          mt-5
          md:mt-0 md:absolute md:right-10
          py-4
          px-6
        "
      >
        Company site
      </button>
    </div>
    <!-- description -->
    <div class="bg-white dark:bg-[#242e3f] lg:w-[730px] px-6 py-4 text-left">
      <h4 class="text-Gray my-3 block">
        {{ job.postedAt }} . {{ job.contract }}
      </h4>
      <div class="flex flex-col md:flex-row justify-between items-center">
        <h1 class="text-xl font-bold dark:text-white">{{ job.position }}</h1>

        <div>
          <button
            class="
              bg-violet
              py-2
              px-32
              mt-4
              md:px-6
              w-full
              text-white
              rounded-md
            "
          >
            Apply Now
          </button>
        </div>
      </div>
      <h4 class="text-violet font-bold mt-5">{{ job.location }}</h4>
      <p class="text-md text-DarkGrey my-10 leading-loose">
        {{ job.description }}
      </p>
      <h4 class="text-xl font-bold dark:text-white">Requirements</h4>
      <div v-for="(value, key, index) in job.requirements" :key="key">
        <p v-if="index == 0" class="text-md text-DarkGrey my-10 leading-loose">
          {{ value }}
        </p>
        <ul v-if="index == 1" class="list-disc">
          <li
            v-for="(value, key) in job.requirements.items"
            :key="key"
            class="text-md text-DarkGrey ml-2 leading-loose"
          >
            {{ value }}
          </li>
        </ul>
      </div>
      <h4 class="text-xl font-bold my-6 dark:text-white">What You Will Do</h4>
      <div v-for="(value, key, index) in job.role" :key="key">
        <p v-if="index == 0" class="text-md text-DarkGrey my-10 leading-loose">
          {{ value }}
        </p>
        <ul v-if="index == 1" class="list-disc">
          <li
            v-for="(value, key) in job.role.items"
            :key="key"
            class="text-md text-DarkGrey ml-2 leading-loose"
          >
            {{ value }}
          </li>
        </ul>
      </div>
    </div>
    <footer
      class="
        flex
        justify-evenly
        items-center
        w-full
        bg-white
        dark:bg-midNight dark:text-white
        mt-20
      "
    >
      <div class="ml-4 hidden md:block">
        <h1 class="text-3xl my-4 font-bold">{{ job.position }}</h1>
        <h3 class="text-xl">{{ job.company }}</h3>
      </div>
      <button class="bg-violet py-2 px-32 mt-4 md:px-6 text-white rounded-md">
        Apply Now
      </button>
    </footer>
  </div>
</template>

<script>
import data from "../data.json";

export default {
  props: ["id"],
  data() {
    return {
      jobs: Object.values(data),
      active: true,
    };
  },
  mounted() {
    // console.log(JSON.parse(JSON.stringify(this.job)));
  },
  methods: {
    getData(id) {
      let data = this.jobs;
      return data.filter((item) => {
        return item.id == id;
      });
    },
  },
};
</script>

<style>
</style>
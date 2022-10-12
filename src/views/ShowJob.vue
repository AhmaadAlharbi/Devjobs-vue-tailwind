<template>
  <div class="flex flex-col justify-center items-center">
    <!-- <from class="max-w-5xl flex items-center -translate-y-5 w-full bg-white"> -->
    <div
      class="
        -translate-y-5
        bg-white
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
      <div class="{job.logoBackground}">
        <img
          :src="'.' + job.logo"
          class="w-[140px] h-[140px] border-none"
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
    <div class="bg-white lg:w-[730px] px-6 py-4 text-left">
      <h4 class="text-Gray my-3 block">
        {{ job.postedAt }} . {{ job.contract }}
      </h4>
      <div class="flex flex-col md:flex-row justify-between items-center">
        <h1 class="text-xl font-bold">{{ job.position }}</h1>

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
      <h4 class="text-xl font-bold">Requirements</h4>
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
      <h4 class="text-xl font-bold my-6">What You Will Do</h4>
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
    <footer class="flex justify-evenly items-center w-full bg-white mt-20">
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
export default {
  props: ["id"],
  data() {
    return {
      uri: "http://localhost:3000/jobs/" + this.id,
      job: [],
      active: true,
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
    // console.log(this.job);
  },
};
</script>

<style>
</style>
<template>
  <div class="flex flex-col justify-center items-center">
    <Search @opacity="toggleBody" />
    <div
      id="main"
      v-if="jobs.length"
      class="
        grid grid-cols-1
        md:grid-cols-2
        lg:grid-cols-3
        gap-6
        justify-center
      "
    >
      <div v-for="job in jobs" :key="job.id" class="">
        <SingleJob :job="job" />
      </div>
    </div>
    <div v-else>
      <h3>no jobs</h3>
    </div>
    <button class="bg-violet text-white px-6 py-2 rounded-lg font-bold">
      Load more
    </button>
  </div>
</template>

<script>
import Search from "../components/Search.vue";
import SingleJob from "../components/SingleJob.vue";
export default {
  name: "HomeView",
  components: { Search, SingleJob },
  data() {
    return {
      jobs: [],
    };
  },
  mounted() {
    fetch("http://localhost:3000/jobs")
      .then((res) => res.json())
      .then((data) => (this.jobs = data))
      .catch((err) => console.log(err.message));

    console.log(this.jobs);
  },
  methods: {
    toggleBody() {
      const mainBody = document.getElementById("main");
    },
  },
};
</script>
<style>
/* .dark {
  width: 100%;
  height: 100%;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7));
  position: absolute;
  left: 0;
  right: 0;
  margin: 0 auto;
  opacity: 0.8;
} */
</style>
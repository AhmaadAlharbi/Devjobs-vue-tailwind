<template>
  <div class="flex justify-center items-center">
    <!-- <from class="max-w-5xl flex items-center -translate-y-5 w-full bg-white"> -->
    <div
      class="
        -translate-y-5
        bg-white
        w-[730px]
        h-[140px]
        flex
        items-center
        container
        relative
      "
    >
      <div>
        <img
          :src="'.' + job.logoInside"
          class="w-[140px] h-[140px] border-none"
          alt="logo"
        />
      </div>
      <div class="ml-4">
        <h1 class="text-3xl my-4 font-bold">{{ job.company }}</h1>
        <h3 class="text-xl">{{ job.website }}</h3>
      </div>
      <button
        class="bg-LightGrey text-violet font-bold absolute right-10 py-4 px-6"
      >
        Company site
      </button>
    </div>
  </div>
</template>

<script>
export default {
  props: ["id"],
  data() {
    return {
      uri: "http://localhost:3000/jobs/" + this.id,
      job: [],
    };
  },
  mounted() {
    fetch(this.uri)
      .then((res) => res.json())
      .then((data) => (this.job = data))
      .catch((err) => console.log(err.message));
    console.log(this.job);
  },
};
</script>

<style>
</style>
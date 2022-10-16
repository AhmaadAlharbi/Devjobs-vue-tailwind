<template>
  <form
    class="
      container
      md:flex
      items-center
      -translate-y-5
      w-full
      bg-white
      hidden
      rounded-2xl
      font-Kumbh
      px-8
      py-4
      dark:bg-midNight dark:text-white
    "
  >
    <div class="relative flex w-full">
      <div class="absolute inset-y-0 -left-5 top-2 pointer-events-none">
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
            fill="#5964E0"
            fill-rule="nonzero"
          />
        </svg>
      </div>
      <input
        v-model="title"
        id="title"
        type="text"
        class="
          hidden
          lg:block
          flex-[2_2_0%]
          border-none
          focus:ring-0
          z-0
          w-full
          dark:bg-midNight
        "
        placeholder="Filter by title, companies, expertise…"
      />
      <input
        type="text"
        v-model="title"
        class="
          block
          lg:hidden
          rounded-md
          w-[100%]
          border-none
          focus:ring-0
          mx-10
          dark:bg-midNight
          z-0
        "
        placeholder="Filter by title"
      />
    </div>

    <span class="border-r border-Gray h-16 z-20"></span>
    <div class="relative w-full">
      <div
        class="
          flex
          absolute
          inset-y-0
          left-0
          items-center
          pl-3
          pointer-events-none
          ml-4
        "
      >
        <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
            fill="#5964E0"
            fill-rule="nonzero"
          />
        </svg>
      </div>
      <input
        type="text"
        v-model="location"
        class="
          rounded-md
          w-[100%]
          border-none
          mx-10
          px-4
          focus:ring-0
          z-10
          flex-1
          dark:bg-midNight
        "
        placeholder="Filter by location…"
      />
    </div>
    <span class="border-r border-Gray h-16 z-20"></span>

    <div
      class="
        bg-white
        flex
        justify-center
        items-center
        w-[100%]
        dark:bg-midNight
      "
    >
      <input type="checkbox" class="bg-Gray" v-model="fullTime" />
      <label for="" class="text-black ml-3 font-bold dark:text-white"
        >Full time only</label
      >
    </div>
    <button
      @click.prevent="hanldeSubmit"
      type="submit"
      class="text-white bg-violet px-6 py-2 rounded-lg m-3"
    >
      Search
    </button>
  </form>
  <!-- search on mobile -->
  <form
    class="
      max-w-5xl
      top-60
      px-20
      flex flex-col
      justify-center
      items-center
      -translate-y-5
      md:hidden
      z-40
      font-Kumbh
    "
  >
    <div class="flex justify-between items-center mt-10">
      <div>
        <input
          v-model="title"
          type="text"
          class="border-none mx-10 px-4 focus:ring-0 z-10 dark:bg-midNight"
          placeholder="by title"
        />
      </div>
      <div class="cursor-pointer" @click="toggleSearch">
        <svg width="20" height="20" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M19.108 0H.86a.86.86 0 00-.764.455.833.833 0 00.068.884l6.685 9.202.007.01c.242.32.374.708.375 1.107v7.502a.825.825 0 00.248.594.865.865 0 00.942.18l3.756-1.4c.337-.1.56-.41.56-.784v-6.092c0-.399.132-.787.375-1.108l.007-.009 6.685-9.202c.19-.26.217-.6.068-.884A.86.86 0 0019.108 0z"
            fill="#6E8098"
            fill-rule="nonzero"
          />
        </svg>
      </div>
      <div class="mx-2">
        <button @click.prevent="hanldeSubmit" class="bg-violet px-4 py-2">
          <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
            <path
              d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
              fill="#ffffff"
              fill-rule="nonzero"
            />
          </svg>
        </button>
      </div>
    </div>
    <div
      v-if="showSearch"
      class="flex mt-20 md:hidden flex-col justify-center items-center"
    >
      <div
        class="
          w-full
          h-full
          py-12
          bg-white
          dark:bg-midNight
          divide-y-2 divide-slate-200
        "
      >
        <div class="relative w-full">
          <div
            class="
              flex
              justify-center
              items-center
              pointer-events-none
              absolute
              top-2
              left-5
            "
          >
            <svg width="17" height="24" xmlns="http://www.w3.org/2000/svg">
              <path
                d="M14.358 2.451A8.3 8.3 0 008.448 0a8.3 8.3 0 00-5.911 2.451c-2.922 2.925-3.285 8.427-.786 11.76l6.697 9.683 6.687-9.669c2.508-3.347 2.145-8.85-.777-11.774zm-5.833 8.894a3.057 3.057 0 01-3.051-3.054 3.057 3.057 0 013.05-3.055 3.057 3.057 0 013.052 3.055 3.057 3.057 0 01-3.051 3.054z"
                fill="#5964E0"
                fill-rule="nonzero"
              />
            </svg>
          </div>
          <input
            type="text"
            v-model="location"
            class="
              rounded-md
              border-none
              mx-10
              px-4
              focus:ring-0
              z-10
              over
              py-4
              dark:bg-[#19202D]
            "
            placeholder="Filter by location…"
          />
        </div>
        <div
          class="
            bg-white
            dark:bg-midNight
            flex flex-col
            justify-center
            items-center
            py-7
            w-[100%]
          "
        >
          <div>
            <input type="checkbox" class="bg-Gray" v-model="fullTime" />
            <label for="" class="text-black ml-3 font-bold dark:text-white"
              >Full time only</label
            >
          </div>
          <button
            @click.prevent="hanldeSubmit"
            class="text-white bg-violet px-32 py-4 rounded-lg m-3"
          >
            Search
          </button>
        </div>
      </div>
    </div>
  </form>
</template>

<script>
export default {
  data() {
    return {
      showSearch: false,
      title: "",
      location: "",
      fullTime: false,
    };
  },
  methods: {
    toggleSearch() {
      this.showSearch = !this.showSearch;
      if (this.showSearch == true) {
        this.$emit("opacity");
      }
    },
    hanldeSubmit() {
      if (this.title !== "") {
        this.$emit("title", this.title);
      }
      if (this.location !== "") {
        this.$emit("location", this.location);
      }
      if (this.fullTime === true) {
        this.$emit("fullTime", this.fullTime);
      }
    },
  },
};
</script>

<style scoped>
</style>
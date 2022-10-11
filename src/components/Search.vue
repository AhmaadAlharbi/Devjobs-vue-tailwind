<template>
  <from class="max-w-5xl flex items-center -translate-y-5 w-full bg-white">
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
        "
      >
        <svg width="24" height="24" xmlns="http://www.w3.org/2000/svg">
          <path
            d="M17.112 15.059h-1.088l-.377-.377a8.814 8.814 0 002.15-5.784A8.898 8.898 0 008.898 0 8.898 8.898 0 000 8.898a8.898 8.898 0 008.898 8.899c2.211 0 4.23-.808 5.784-2.143l.377.377v1.081l6.845 6.832 2.04-2.04-6.832-6.845zm-8.214 0A6.16 6.16 0 118.9 2.737a6.16 6.16 0 010 12.322z"
            fill="#5964E0"
            fill-rule="nonzero"
          />
        </svg>
      </div>
      <input
        id="title"
        type="text"
        class="hidden lg:block flex-1 w-full border-none focus:ring-0 mx-7 z-0"
        placeholder="Filter by title, companies, expertise…"
      />
      <input
        type="text"
        class="
          block
          lg:hidden
          rounded-md
          flex-1
          w-[100%]
          border-none
          focus:ring-0
          mx-10
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
        class="rounded-md w-[100%] border-none mx-10 px-4 focus:ring-0 z-10"
        placeholder="Filter by location…"
      />
    </div>
    <span class="border-r border-Gray h-16 z-20"></span>

    <div class="bg-white flex justify-center items-center w-[100%]">
      <input type="checkbox" class="bg-Gray" />
      <label for="" class="text-black ml-3 font-bold">Full time only</label>
    </div>
    <button class="text-white bg-violet px-6 py-2 rounded-lg m-3">
      Search
    </button>
  </from>
</template>

<script>
export default {};
</script>

<style scoped>
</style>
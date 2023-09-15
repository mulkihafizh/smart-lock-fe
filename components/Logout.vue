<template>
  <div
    class="h-screen bg-[#CCCCCC] bg-opacity-50 w-screen fixed z-40 flex items-center justify-center"
  >
    <div
      class="card bg-white p-5 w-[40%] rounded-xl flex flex-col relative gap-5"
    >
      <div class="absolute right-4 top-1 text-red-500">
        <i class="fa-solid fa-x" @click="logout == false"></i>
      </div>
      <h1 class="title text-xl">Are you sure to logout?</h1>
      <nuxt-link
        to="/"
        class="bg-red-500 text-white px-5 text-lg rounded-lg self-end"
        >Log Out</nuxt-link
      >
    </div>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

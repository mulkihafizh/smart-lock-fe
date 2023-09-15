<script setup>
useSeoMeta({
  title: "Smart Lock Door",
});
</script>

<template>
  <div class="min-h-screen main-cover">
    <main class="grid sm:grid-cols-2 items-center min-h-screen">
      <div class="content px-[10%]">
        <h1 class="title text-4xl sm:text-7xl font-bold text-[#2447A9]">
          Smart<br />Lock Door
        </h1>
        <p class="subtitle text-base sm:text-xl sm:w-[45%] text-[#2447A9]">
          Be smart about keeping your home safe! Use Smart Door Lock now
        </p>
        <nuxt-link to="/login">
          <button
            style="
              background: linear-gradient(94deg, #59c0ff 6.13%, #1b84f5 75.99%);
            "
            class="start-btn rounded-full px-12 mt-12 py-2 text-white text-2xl"
          >
            Start
          </button>
        </nuxt-link>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style scoped>
.main-cover {
  background-image: url("/images/vector-1.png"), url("/images/bg.png");
  background-size: contain, cover;
  background-position: bottom right, center;
  background-repeat: no-repeat;
}

@media (max-width: 375px) {
  .main-cover {
    background-size: cover, cover;
  }
}
</style>

<template>
  <div class="min-h-screen">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style>
@import url("https://fonts.googleapis.com/css2?family=Nunito&family=Poppins&display=swap");
* {
  font-family: "Poppins", sans-serif;
}

.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.3 ease;
}

.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>

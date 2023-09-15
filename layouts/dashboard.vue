<template>
  <div class="bg-[#F1F6FD] h-screen">
    <Sidebar :doors="door" />
    <slot />
  </div>
</template>

<script setup>
const door = await useFetch("/api/dashboard/door/getAll").then((res) => {
  return JSON.parse(res.data.value);
});
</script>
<style lang="scss" scoped></style>

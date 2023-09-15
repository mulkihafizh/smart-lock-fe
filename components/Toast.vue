<template>
  <div>
    {{ props.type }}
    {{ props.message }}
  </div>
</template>

<script>
const props = defineProps({
  type: {
    type: String,
    default: "success",
  },
  message: {
    type: String,
    default: "Success",
  },
});
</script>

<style lang="scss" scoped></style>

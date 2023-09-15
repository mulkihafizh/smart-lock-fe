<script setup>
useSeoMeta({
  title: "Login",
});
definePageMeta({
  middleware: "is-guest",
});
</script>

<template>
  <div
    class="grid max-h-screen grid-rows-2 sm:grid-cols-9 sm:grid-rows-1 bg-[#F1F6FD]"
  >
    <div
      class="sm:col-span-4 max-h-screen flex justify-center items-center flex-grow"
    >
      <NuxtImg loading="lazy" src="images/door.png" class="h-[80%]" alt="" />
    </div>
    <div class="sm:col-span-5 rounded-3xl bg-[#fff] flex items-center">
      <div class="content px-[10%] sm:p-[10%] flex-grow font-nunito">
        <h1 class="title text-main-color sm:text-5xl font-bold">Login</h1>
        <p class="subtitle text-sm sm:text-xl pb-2 sm:pb-0">
          Please login to see your lock door
        </p>
        <div class="form sm:py-12 flex flex-col gap-6 sm:gap-12">
          <div class="form-group flex flex-col">
            <label for="email" class="sm:text-xl">Email</label>
            <input
              v-model="email"
              type="email"
              class="border border-[#1F41BB] px-4 py-2 focus:outline-none rounded-md"
            />
          </div>
          <div class="form-group flex flex-col">
            <label for="password" class="smtext-xl">Password</label>
            <input
              type="password"
              v-model="password"
              class="border border-[#1F41BB] px-4 py-2 focus:outline-none rounded-md"
            />
          </div>
          <div class="form-submit flex justify-center">
            <button
              @click="login()"
              :disabled="loading"
              class="bg-main-color duration-300 hover:opacity-80 sm:text-2xl text-[#fff] px-6 sm:px-12 py-2 rounded-xl disabled:opacity-50 disabled:cursor-not-allowed"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      loading: false,
      email: "",
      password: "",
    };
  },

  methods: {
    async login() {
      this.loading = true;
      await useFetch("/api/auth/login", {
        method: "POST",
        credentials: "include",
        headers: {
          "Content-Type": "application/json",
        },
        body: {
          email: this.email,
          password: this.password,
        },
      }).then((res) => {
        if (res.status.value === "success") {
          this.$router.push("/dashboard");
        } else {
          alert(JSON.parse(res.error.value.data).message);
          this.loading = false;
        }
      });
    },
  },
};
</script>

<style lang="scss" scoped></style>

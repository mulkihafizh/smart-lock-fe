<script setup>
useSeoMeta({
  title: "Dashboard",
});
definePageMeta({
  layout: "dashboard",
  middleware: "is-login",
});
const user = await useFetch("/api/dashboard/user/getUser", {
  headers: {
    Authorization: useCookie("token").value,
  },
}).then((res) => {
  return JSON.parse(res.data.value).user;
});

const door = await useFetch("/api/dashboard/door/getAll").then((res) => {
  return JSON.parse(res.data.value);
});
</script>

<template>
  <div>
    <!-- tambahin figma sakha -->
    <div class="content h-screen lg:ml-[350px] p-5 sm:p-14 flex flex-col">
      <header class="flex justify-end">
        <div class="user flex items-center gap-4 text-[#7B7B7B]">
          <p class="username">
            {{ user.username.charAt(0).toUpperCase() + user.username.slice(1) }}
          </p>
          <i class="fa-regular fa-circle-user fa-xl"></i>
        </div>
      </header>
      <main class="flex-grow flex flex-col">
        <div class="title pt-10 text-xl font-bold text-main-color">
          Dashboard
        </div>
        <NuxtImg
          loading="lazy"
          src="/images/dsmain.png"
          class="sm:w-1/4 self-center w-5/6"
          alt=""
        />
        <div
          class="card bg-[#fff] sm:text-base text-xs w-full h-full rounded-2xl flex flex-col"
        >
          <div class="content p-12 flex flex-col gap-5">
            <div class="items grid sm:grid-cols-7 grid-cols-4 gap-2">
              <div class="sm:col-span-1">Username</div>
              <div class="sm:col-span-1 justify-self-end">:</div>
              <div class="sm:col-span-5">
                {{
                  user.username.charAt(0).toUpperCase() + user.username.slice(1)
                }}
              </div>
            </div>
            <div class="items grid sm:grid-cols-7 grid-cols-4 gap-2">
              <div class="sm:col-span-1">Email</div>
              <div class="sm:col-span-1 justify-self-end">:</div>
              <div class="sm:col-span-5">{{ user.email }}</div>
            </div>
            <div class="items grid sm:grid-cols-7 grid-cols-4 gap-2">
              <div class="sm:col-span-1">Door</div>
              <div class="sm:col-span-1 justify-self-end">:</div>
              <div class="sm:col-span-5 col-span-2">
                <ul class="list-['-'] list-inside">
                  <li>Main Door</li>
                  <li>Garage</li>
                  <li>Bedroom</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  </div>
</template>
<script>
export default {
  setup() {
    return {};
  },
};
</script>

<style lang="scss" scoped></style>

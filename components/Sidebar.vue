<template>
  <div
    class="sm:w-[350px] duration-300 bg-[#fff] h-screen fixed z-10"
    :class="
      sidebar == true
        ? 'left-0 '
        : 'left-[-250px] sm:left-[-300px]  bg-transparent lg:left-0 lg:bg-white'
    "
  >
    <div
      @click="sidebarT()"
      class="absolute right-5 lg:hidden top-4 text-main-color"
    >
      <i class="fa-solid fa-bars fa-lg"></i>
    </div>
    <div class="content px-8 py-12 flex flex-col h-screen">
      <div class="title flex items-center gap-5">
        <NuxtImg loading="lazy" src="images/logo.png" class="w-[15%]" alt="" />
        <h1 class="text-xl font-bold text-[#2447A9]">Smart Lock Door</h1>
      </div>
      <div class="nav py-20 flex-grow flex flex-col justify-between">
        <div class="menu flex flex-col gap-6">
          <h3 class="title font-bold text-xl">Menu</h3>
          <nuxt-link
            to="/dashboard"
            :active-class="
              sidebar == true ? 'bg-main-color text-white' : 'bg-transparent'
            "
            class="flex duration-300 rounded-lg items-center py-4 px-12 gap-4 text-main-color hover:bg-main-color hover:text-white"
          >
            <i class="fa-solid fa-house fa-xl"></i>
            <p>Dashboard</p>
          </nuxt-link>
          <div
            @click="toggle()"
            class="flex text-main-color duration-300 rounded-lg items-center justify-between py-4 px-12 gap-4 cursor-pointer hover:bg-main-color hover:text-[#fff]"
          >
            <div class="wrap flex gap-4 items-center">
              <i class="fa-solid fa-door-open fa-xl"></i>
              <p>Door</p>
            </div>
            <i
              class="fa-solid fa-chevron-down duration-300"
              v-bind:class="opened == true ? 'rotate-180' : ''"
            ></i>
          </div>
          <transition name="fade" mode="out-in">
            <div class="duration-300 flex flex-col gap-2" v-if="opened == true">
              <nuxt-link
                v-for="door in doors"
                :active-class="
                  sidebar == true
                    ? 'bg-main-color text-white'
                    : 'bg-transparent'
                "
                :to="'/dashboard/door/' + door._id"
                class="flex text-main-color rounded-lg items-center justify-between py-4 px-12 gap-4 hover:bg-main-color hover:text-white duration-300"
              >
                <div class="wrap flex gap-4">
                  <p>{{ door.name }} Door</p>
                </div>
              </nuxt-link>
            </div>
          </transition>
        </div>
        <div
          @click="logout()"
          class="logout text-red-600 duration-300 text-red flex py-4 px-12 gap-4 justify-self-end items-center cursor-pointer hover:bg-main-color hover:text-white rounded-lg"
        >
          <i class="fa-solid fa-arrow-right-from-bracket fa-xl -rotate-180"></i>
          <p>Logout</p>
        </div>
      </div>
    </div>
  </div>
  <Logout v-if="logouts === true" />
</template>

<script setup>
const props = defineProps({
  doors: {
    type: Array,
    default: () => [],
  },
});
</script>
<script>
export default {
  data() {
    return {
      opened: false,
      logouts: false,
      sidebar: true,
    };
  },
  methods: {
    toggle() {
      this.opened = !this.opened;
    },
    sidebarT() {
      this.sidebar = !this.sidebar;
    },

    logout() {
      this.logouts = true;
      console.log(this.logouts);
    },
  },
};
</script>

<style scoped></style>

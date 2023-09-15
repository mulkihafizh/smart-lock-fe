<script setup>
definePageMeta({ layout: "dashboard", middleware: "is-login" });
const id = useRoute().params.id;
const door = await useFetch("/api/dashboard/door/" + id).then((res) => {
  return JSON.parse(res.data.value);
});
const history = await useFetch("/api/dashboard/door/history/" + id).then(
  (res) => {
    if (res.data.value == null) {
      return [];
    }
    return JSON.parse(res.data.value);
  }
);
useSeoMeta({
  title: door.name.charAt(0).toUpperCase() + door.name.slice(1) + " Door",
});
</script>

<template>
  <div class="content h-screen lg:ml-[350px] p-5 sm:p-14 flex flex-col">
    <header class="flex justify-end">
      <div class="user text-xl flex items-center gap-4 text-[#7B7B7B]">
        <p class="username">Kistar</p>
        <i class="fa-regular fa-circle-user fa-xl"></i>
      </div>
    </header>
    <main class="flex-grow flex flex-col gap-12">
      <div class="title pt-10 text-xl font-bold text-main-color">
        {{ door.name.charAt(0).toUpperCase() + door.name.slice(1) }} Door
      </div>
      <div
        class="card bg-white py-8 rounded-2xl px-12 flex gap-8 items-center"
        v-if="door.isLocked == true"
      >
        <i class="fa-solid fa-lock-open fa-2xl"></i>
        <p class="sm:text-xl text-green-600 drop-shadow-lg">Pintu Terbuka</p>
      </div>
      <div
        class="card bg-white py-8 rounded-2xl px-12 flex gap-8 items-center"
        v-else
      >
        <i class="fa-solid fa-lock fa-2xl"></i>
        <p class="sm:text-xl text-red-600 drop-shadow-lg">Pintu Terkunci</p>
      </div>
      <div
        class="card bg-[#fff] w-full h-full rounded-2xl flex flex-col overflow-hidden"
      >
        <table class="border-collapse sm:text-base text-sm">
          <thead class="bg-[#B7CBFF]">
            <tr class="text-main-color">
              <th class="py-2">Date</th>
              <th>Time</th>
              <th>Name</th>
            </tr>
          </thead>
          <tbody v-if="history.length > 0">
            <tr class="text-center" v-for="h in history">
              <td class="py-2">
                {{ formatDate(h.date) }}
              </td>
              <td>{{ formatHour(h.date) }}</td>
              <td>{{ h.name }}</td>
            </tr>
          </tbody>
          <tbody v-else>
            <tr class="text-center">
              <td class="py-2">-</td>
              <td>-</td>
              <td>-</td>
            </tr>
          </tbody>
        </table>
      </div>
    </main>
  </div>
</template>

<script>
export default {
  data() {
    return {
      id: this.$route.params.id,
      door: {},
    };
  },
  methods: {
    formatDate(date) {
      const d = new Date(date);
      return d.toLocaleDateString("id-Id", {
        year: "numeric",
        month: "long",
        day: "numeric",
      });
    },
    formatHour(hour) {
      const d = new Date(hour);
      return d.toLocaleTimeString("id-Id", {
        hour: "2-digit",
        minute: "2-digit",
      });
    },
  },
  async mounted() {},
};
</script>

<style lang="scss" scoped></style>

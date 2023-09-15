export default defineNuxtRouteMiddleware((to) => {
  if (to.path === "/dashboard") {
    return;
  }
  const token = useCookie("token");
  if (to.path === "/login" && token.value) {
    return navigateTo("/dashboard");
  }
});

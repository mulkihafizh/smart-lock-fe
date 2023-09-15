import { login } from "@/utils/api";

export default eventHandler(async (event) => {
  const body = await readBody(event);
  try {
    const data = await login(body);
    if (!data.token) {
      const res = {
        message: "Invalid credentials",
      };
      return new Response(JSON.stringify(res), { status: 401 });
    }
    setCookie(event, "token", data.token);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
});

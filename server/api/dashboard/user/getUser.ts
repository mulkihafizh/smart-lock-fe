import { getUser } from "~/utils/api";

export default eventHandler(async (event) => {
  const token = event.headers.get("Authorization");
  try {
    const data = await getUser(token!);
    return new Response(JSON.stringify(data), { status: 200 });
  } catch (e: any) {
    return new Response(e.message, { status: 500 });
  }
});

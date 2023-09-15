import { getHistoryById } from "~/utils/api";

export default eventHandler(async (event) => {
  const id = event.context.params!.id;
  const res = await getHistoryById(id);
  
  return new Response(JSON.stringify(res), { status: 200 });
});

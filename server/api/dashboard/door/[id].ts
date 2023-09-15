export default eventHandler(async (event) => {
  const id = event.context.params!.id;
  const res = await getDoorById(id);
  return new Response(JSON.stringify(res), { status: 200 });
});

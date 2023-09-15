export default eventHandler(async (event) => {
  const res = await getDoor();
  return new Response(JSON.stringify(res), { status: 200 });
});

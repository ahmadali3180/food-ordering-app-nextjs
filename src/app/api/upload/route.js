export async function POST(req) {
  const data = await req.formData();
  if (data.get("file")) {
    // upload  the file
  } else {
    return new Response("Missing form data", { status: 400 });
  }

  return Response.json(true);
}

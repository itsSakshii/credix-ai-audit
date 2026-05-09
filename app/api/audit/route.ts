export async function POST(req: Request) {
  const body = await req.json();

  return Response.json({
    audit:
      "Initial AI audit placeholder response",
    input: body,
  });
}
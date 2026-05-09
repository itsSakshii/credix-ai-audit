import { supabase } from "@/lib/supabase";
import { validateAudit } from "@/lib/validations/utils";
export async function POST(req: Request) {
  try {
    const body = await req.json();

    const { data, error } = await supabase
      .from("leads")
      .upsert(body, {
        onConflict: "email,audit_id",
      })
      .select();

    if (error) {
      return Response.json({
        success: false,
        error,
      });
    }

    // Detect if it was update or insert
    const isUpdate = data?.length > 0;

    return Response.json({
      success: true,
      type: isUpdate ? "updated" : "created",
      data,
    });
  } catch (err) {
    return Response.json({
      success: false,
      error: "Internal server error",
    });
  }
}



export async function validatePOST(req: Request) {
  const body = await req.json();

  const result = validateAudit(body);

  if (!result.success) {
    return Response.json(
      { error: "Invalid input", details: result.error.flatten() },
      { status: 400 }
    );
  }

  const data = result.data;

  return Response.json({
    message: "Validated successfully",
    data,
  });
}
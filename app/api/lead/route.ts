import { supabase } from "@/lib/supabase";

export async function POST(req: Request) {
  try {
    const body = await req.json();

    console.log("Received body:", body);

    const { data, error } = await supabase
      .from("leads")
      .insert([body]);

    if (error) {
      console.error("Supabase error:", error);

      return Response.json({
        success: false,
        error,
      });
    }

    console.log("Lead inserted:", data);

    return Response.json({
      success: true,
      data,
    });
  } catch (err) {
    console.error("Server error:", err);

    return Response.json({
      success: false,
      error: "Internal server error",
    });
  }
}
import useSupabaseServer from "@/app/components/hooks/useSupabaseServer";
import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { email } = await req.json();

  const supabase = useSupabaseServer()

  const { data, error } = await supabase.auth.resetPasswordForEmail(email, {
    redirectTo: "https://monumental-zuccutto-62f1b9.netlify.app/reset-password",
  });

  if (error) {
    return new NextResponse(JSON.stringify({ error: error.message }), { status: 400 });
  }

  return new NextResponse(JSON.stringify({ success: true }), { status: 200 });
}


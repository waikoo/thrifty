import { NextRequest, NextResponse } from "next/server";
import useSupabaseServer from "@/app/components/hooks/useSupabaseServer";


export async function POST(req: NextRequest) {
  const supabase = useSupabaseServer()
  try {
    const { idToken } = await req.json();

    if (!idToken) {
      return NextResponse.json({ error: "No token provided" }, { status: 400 });
    }
    const { data, error } = await supabase.auth.signInWithIdToken({
      provider: "google",
      token: idToken
    })
    return NextResponse.json({ user: data.user, session: data.session }, { status: 200 });
  } catch (error) {
    console.error("Authentication error:", error);
    return NextResponse.json({ error: "Internal Server Error" }, { status: 500 });
  }
}


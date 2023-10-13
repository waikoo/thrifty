import { supabase } from "@/app/supabase";

type HandleRecoverPasswordProps = (
  e: React.FormEvent,
  email: string,
  setShowRecovery: (value: boolean) => void,
  setShowSignIn: (value: boolean) => void,
) => void;

export const handleRecoverPassword: HandleRecoverPasswordProps = async (
  e,
  email,
  setShowRecovery,
  setShowSignIn
) => {
  e.preventDefault();
  let { data, error }: { data: any, error: any } = await supabase.auth.resetPasswordForEmail(email);

  if (Object.keys(data).length > 0) {
    console.log('Password reset email sent!');
  } else if (error !== null) {
    console.log('Something went wrong');
  }

  setShowRecovery(false);
  setShowSignIn(false);
};


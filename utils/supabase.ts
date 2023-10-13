import { supabase } from "@/app/supabase";

type HandleRecoverPasswordProps = {
  e: React.FormEvent;
  email: string;
  setShowSignIn: (value: boolean) => void;
  setShowRecovery: (value: boolean) => void;
};

export const handleRecoverPassword = async ({ e, email, setShowRecovery, setShowSignIn }: HandleRecoverPasswordProps) => {
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


import { create } from 'zustand';
import { supabase } from '@/app/supabase';
import { AuthUser } from '@supabase/supabase-js';

export type TMouseOnButton = React.MouseEvent<HTMLButtonElement>

type State = {
  user: null | AuthUser;
  email: string;
  password: string;
}

type Action = {
  setEmail: (email: string) => void;
  setPassword: (password: string) => void;
  setUser: (user: any) => void;
  signOut: () => Promise<void>;
  signIn: (e: TMouseOnButton) => Promise<AuthUser | null>;
  signUp: (e: TMouseOnButton) => Promise<void>;
};

export const useUserStore = create<State & Action>((set, get) => ({
  user: null as null | AuthUser,
  email: '',
  password: '',
  setEmail: (email) => set(() => ({ email })),
  setPassword: (password) => set(() => ({ password })),
  setUser: (user) => set(() => ({ user })),
  signIn: async (e: TMouseOnButton): Promise<AuthUser | null> => {
    // e.preventDefault()
    const { email, password } = get()

    const { data, error } = await supabase.auth.signInWithPassword({
      email: email,
      password: password
    });

    if (error) throw error;
    set({ user: data.user });
    return data.user
  },
  signOut: async () => {
    await supabase.auth.signOut();
    set(() => ({ user: null }));
  },
  signUp: async (e: TMouseOnButton) => {
    const { email, password, signIn } = get()
    const { data, error } = await supabase.auth.signUp({ email, password });
    if (error) throw error;
    // if (!error) signIn(e)
  }
}));

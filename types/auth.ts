export enum Auth {
  LOGIN = 'log in',
  SIGNUP = 'sign up',
}

export type AuthModes = Auth.LOGIN | Auth.SIGNUP

export type StateButtonProps = {
  children: React.ReactNode;
  className?: string;
  selected: boolean;
  authValue: AuthModes;
  setSelected: TSetSelected
}

type TSetSelected = (current: AuthModes) => void

export type StateButtonContainerProps = {
  setSelected: TSetSelected
  selected: AuthModes
}

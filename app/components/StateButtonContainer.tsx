import { StateButton } from ".";
import { Auth, StateButtonContainerProps } from "@/types/auth"


export default function StateButtonContainer({ selected, setSelected }: StateButtonContainerProps) {
  return (

    <div className="flex w-4/5 mx-auto">

      <StateButton
        selected={selected === 'log in'}
        authValue={Auth.LOGIN}
        setSelected={setSelected}
      >Log In</StateButton>

      <StateButton
        selected={selected === 'sign up'}
        authValue={Auth.SIGNUP}
        setSelected={setSelected}
      >Sign Up</StateButton>
    </div>
  )
}

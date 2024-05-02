import StateButton from "@/app/components/generic/StateButton";
import { Auth, StateButtonContainerProps } from "@/types/auth"

export default function StateButtonContainer({ selected, setSelected }: StateButtonContainerProps) {

  return (
    <div className="flex w-full pt-2">

      <StateButton
        selected={selected === 'log in'}
        authValue={Auth.LOGIN}
        setSelected={setSelected}
      >LOG IN</StateButton>

      <StateButton
        selected={selected === 'sign up'}
        authValue={Auth.SIGNUP}
        setSelected={setSelected}
      >SIGN UP</StateButton>
    </div>
  )
}

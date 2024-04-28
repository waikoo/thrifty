import MiniCartView from "@/app/components/navigation/MiniCartView"
import MiniCartButtons from "@/app/components/navigation/MiniCartButtons"
import { useNavigationStore } from "@/state/client/navigationState"
import useUserSession from "@/app/components/hooks/useUserSession"

export default function MiniCart() {
  const { showMiniCartView } = useNavigationStore()
  const { session, error } = useUserSession()

  return session && showMiniCartView && (
    <>
      <MiniCartView />
      <MiniCartButtons />
    </>
  )
}


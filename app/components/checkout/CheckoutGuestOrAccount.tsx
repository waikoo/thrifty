"use client"
import { useEffect, useRef, useState } from 'react'

import { borderRadius } from '@/app/components/data/universalStyles'
import { useUIStore } from '@/state/client/uiState'
import { albert, albert_600 } from '@/utils/fonts'

export default function CheckoutGuestOrAccount() {
  const { showSignIn, setShowSignIn } = useUIStore()
  const inputRef1 = useRef<HTMLInputElement>(null)
  const inputRef2 = useRef<HTMLInputElement>(null)
  const [fontWeight1, setFontWeight1] = useState(albert_600.className)
  const [fontWeight2, setFontWeight2] = useState(albert.className)

  const onChange = () => {
    if (inputRef1.current?.checked) {
      setFontWeight1(albert_600.className)
      setFontWeight2(albert.className)
    }
    if (inputRef2.current?.checked) {
      setFontWeight1(albert.className)
      setFontWeight2(albert_600.className)
      setShowSignIn(true)
    }
  }

  useEffect(() => {
    if (!showSignIn) {
      inputRef1.current?.click()
    }
  }, [showSignIn])

  return (
    <div className={`bg-white w-[800px] p-4 ${borderRadius}`}>
      <div className="mx-auto w-1/2 flex justify-around sm:text[17px] xl:text-[14px]">
        <label
          htmlFor="guest"
          className="flex gap-2"
        >
          <input
            type="radio"
            name="guestOrAccount"
            id="guest"
            className={`checked:bg-black`}
            defaultChecked={true}
            ref={inputRef1}
            onChange={onChange}
          />
          <span className={`${fontWeight1}`}>
            Continue as Guest
          </span>
        </label>

        <label
          htmlFor="account"
          className="flex gap-2"
        >
          <input
            type="radio"
            name="guestOrAccount"
            id="account"
            className={`checked:bg-black`}
            // onClick={() => setShowSignIn(true)}
            onChange={onChange}
            ref={inputRef2}
          />
          <span className={`${fontWeight2}`}>
            Log In / Create Account
          </span>
        </label>
      </div>
    </div>
  )
}

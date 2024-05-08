"use client"
import { useState } from "react"

import ProfileSettings from "@/app/components/profile/ProfileSettings"
import { Gender, Locales } from "@/types/link"
import ProfilePopup from "@/app/components/profile/ProfilePopup"
import { useProfile } from "@/state/client/profileState"
import { useUserSession } from "@/app/components/hooks"
import { albert_500, albert_900 } from "@/utils/fonts"

type PageProps = {
  params: {
    lang: Locales,
    gender: Gender
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageProps) {
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [showPasswordPopup, setShowPasswordPopup] = useState(false)
  const { currentEmail, setCurrentEmail, newEmail, setNewEmail, newPassword, setNewPassword, updateEmail, updatePassword } = useProfile()
  const { session } = useUserSession()
  const [isHovered1, setIsHovered1] = useState(false)
  const [isHovered2, setIsHovered2] = useState(false)
  const hoveredStyles1 = isHovered1 ? `${albert_900.className}` : ''
  const hoveredStyles2 = isHovered2 ? `${albert_900.className}` : ''

  return (
    <main className="text-bkg ">
      <div className="mx-auto w-[800px]">
        <div className="mt-8 flex justify-between gap-8">
          <ProfileSettings showPopup={setShowEmailPopup}>Email</ProfileSettings>
          <ProfileSettings showPopup={setShowPasswordPopup}>Password</ProfileSettings>
        </div>

        <div className={`*:cursor-pointer ${albert_500.className} *:text-content *:text-[0.75rem] ml-12 mt-10 flex flex-col gap-5`}>
          <span
            onMouseEnter={() => setIsHovered1(true)}
            onMouseLeave={() => setIsHovered1(false)}
            className={`${hoveredStyles1}`}
          >DELETE ACCOUNT</span>
          <span
            onMouseEnter={() => setIsHovered2(true)}
            onMouseLeave={() => setIsHovered2(false)}
            className={`${hoveredStyles2}`}
          >LOG OUT</span>
        </div>

        {showEmailPopup && (
          <ProfilePopup
            setShowPopup={setShowEmailPopup}
            update={updateEmail}
            inputSettings={[{
              type: 'email',
              id: 'current',
              placeholder: 'Current Email',
              value: session?.user.email || currentEmail,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setCurrentEmail(e.target.value)
            }, {

              type: 'email',
              id: 'new',
              placeholder: 'New Email',
              value: newEmail,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNewEmail(e.target.value)
            },
            ]}
          >EMAIL</ProfilePopup>
        )}
        {showPasswordPopup && (
          <ProfilePopup
            setShowPopup={setShowPasswordPopup}
            update={updatePassword}
            inputSettings={[{

              type: 'password',
              id: 'newPassword',
              placeholder: 'New Password',
              value: newPassword,
              onChange: (e: React.ChangeEvent<HTMLInputElement>) => setNewPassword(e.target.value)
            }]}
          >PASSWORD</ProfilePopup>
        )}

      </div>
    </main>
  )
}

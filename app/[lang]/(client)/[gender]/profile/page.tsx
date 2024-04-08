"use client"
import { useState } from "react"

import ProfileSettings from "@/app/components/profile/ProfileSettings"
import { Category, Locales } from "@/types/home"
import ProfilePopup from "@/app/components/profile/ProfilePopup"
import { useProfile } from "@/state/client/profileState"
import { useUserSession } from "@/app/components/hooks"

type PageProps = {
  params: {
    lang: Locales,
    gender: Category['category']
  }
  searchParams: { [key: string]: string | string[] | undefined }
}

export default function Page({ params }: PageProps) {
  const [showEmailPopup, setShowEmailPopup] = useState(false)
  const [showPasswordPopup, setShowPasswordPopup] = useState(false)
  const { currentEmail, setCurrentEmail, newEmail, setNewEmail, newPassword, setNewPassword, updateEmail, updatePassword } = useProfile()
  const { session } = useUserSession()

  return (
    <main className="text-bkg ">
      <div className="mx-auto w-[800px]">
        <div className="mt-8 flex justify-between gap-8">
          <ProfileSettings showPopup={setShowEmailPopup}>Email</ProfileSettings>
          <ProfileSettings showPopup={setShowPasswordPopup}>Change Password</ProfileSettings>
        </div>

        <div className="*:cursor-pointer *:font-semibold *:text-content *:text-[0.75rem] ml-12 mt-10 flex flex-col gap-5">
          <span>DELETE ACCOUNT</span>
          <span>LOG OUT</span>
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

"use client"
import { useState } from "react"

import ProfileSettings from "@/app/components/profile/ProfileSettings"
import { Category, Locales } from "@/types/home"
import ProfilePopup from "@/app/components/profile/ProfilePopup"

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
            inputSettings={[{
              type: 'email',
              id: 'current',
              placeholder: 'Current Email',
            }, {

              type: 'email',
              id: 'new',
              placeholder: 'New Email',
            }, {

              type: 'password',
              id: 'password',
              placeholder: 'Password',
            }
            ]}
          >EMAIL</ProfilePopup>
        )}
        {showPasswordPopup && (
          <ProfilePopup
            setShowPopup={setShowPasswordPopup}
            inputSettings={[{
              type: 'password',
              id: 'currentPassword',
              placeholder: 'Current Password',
            }, {

              type: 'password',
              id: 'newPassword',
              placeholder: 'New Password',
            }]}
          >PASSWORD</ProfilePopup>
        )}

      </div>
    </main>
  )
}

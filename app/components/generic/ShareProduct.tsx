'use client'
import { useState } from 'react'

import { FiLink } from 'react-icons/fi'

import Portal from '@/app/components/generic/Portal'
import WithCloseButton from '@/app/components/navigation/WithCloseButton'
import { useUIStore } from '@/state/client/uiState'
import { albert, albert_700, albert_800 } from '@/utils/fonts'
import { viewport } from '../data/universalStyles'
import useViewport from '../hooks/useViewport'

type ShareProductProps = {
  productUuid: string | string[]
}

const BASE_URL = 'https://monumental-zuccutto-62f1b9.netlify.app/en/women/products/'

export default function ShareProduct({ productUuid }: ShareProductProps) {
  const { setShowShare } = useUIStore()
  const [buttonText, setButtonText] = useState('COPY')
  const [link, setLink] = useState(
    typeof productUuid === 'string' ? `${BASE_URL}${productUuid}` : productUuid.map(item => `${BASE_URL}${item}`).join('\n')
  )
  const [buttonStyle, setButtonStyle] = useState('bg-black text-t_white')
  const viewportWidth = useViewport()

  function copyLink() {
    navigator.clipboard.writeText(link)
    setButtonText('COPIED!')
    setButtonStyle('bg-t_mustard text-t_black')
    setTimeout(() => {
      setButtonText('COPY'), 2000
      setButtonStyle('bg-t_black text-t_white')
    }, 2000)
  }

  return (
    <Portal>
      <WithCloseButton onClose={() => setShowShare(false)} isPopUp={true} padding="p-6">
        <div className="flex flex-col gap-4">
          <h1 className={`${albert_800.className} text-[17px] sm:text-[21px] xl:text-[18px] text-center`}>
            SHARE 1 SELECTED ITEM
          </h1>

          <p className={`${albert.className} text-[13px] sm:text-[17px] xl:text-[14px] `}>Copy link</p>

          <div className="flex flex-col sm:flex-row gap-4 sm:gap-0 relative">
            <FiLink
              className="absolute left-4 top-2 sm:left-4 sm:bottom-3"
              size={20}
              color="#616161"
            />
            <input
              type="text"
              value={link}
              readOnly
              spellCheck={false}
              className="pl-11 rounded-full sm:w-full xl:w-[400px] w-full text-[13px] sm:text-[17px] xl:text-[14px]"
            />

            <button
              className={`p-2 px-6 sm:-ml-[6.3rem] w-full sm:w-[6rem] ${albert_700.className} text-[15px] ${buttonStyle} rounded-full relative h-[2.3rem] mt-[0.2rem]`}
              onClick={copyLink}
            >
              {viewportWidth > viewport.sm && (
                <div className="absolute right-24 bottom-4 bg-white w-3 h-3"></div>
              )}
              {buttonText}
            </button>
          </div>
        </div>
      </WithCloseButton>
    </Portal>
  )
}

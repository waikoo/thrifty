import { Suspense } from 'react'
import { BackToTop, Category, LanguagePicker, NavBar, Banner } from './'

const Navigation = () => {
  return (
    <nav className="fixed top-0 grid place-items-center bg-bkg w-full">
      <LanguagePicker />
      <Banner />
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Category />
      </Suspense>

      <BackToTop />
    </nav>
  )
}

export default Navigation

import React, { Suspense } from 'react'
import { Category, NavBar } from './'

const Navigation = () => {
  return (
    <nav>
      <NavBar />

      <Suspense fallback={<div>Loading...</div>}>
        <Category />
      </Suspense>

    </nav>
  )
}

export default Navigation

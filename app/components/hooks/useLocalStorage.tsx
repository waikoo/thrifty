"use client"
import { useState } from "react"

const useLocalStorage = (key: string, value: unknown) => {

  const [state, setState] = useState(() => {

    try {
      const item = window.localStorage.getItem(key)
      return item ? JSON.parse(item) : value

    } catch (e) {
      return value
    }
  })

  const setLocalStorageState = (newState: unknown) => {
    try {
      const newStateValue = typeof newState === 'function' ? newState(state) : newState

      setState(newStateValue)
      window.localStorage.setItem(key, JSON.stringify(newStateValue))
    } catch (e) {
      console.error(`Unable to store new value for ${key} in localStorage.`)
    }
  }

  return [state, setLocalStorageState]
}

export default useLocalStorage

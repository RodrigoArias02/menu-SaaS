import { useContext } from "react"

import { CartContext } from "./cartcontext.jsx"

export const useCart = () => {
  return useContext(CartContext)
}
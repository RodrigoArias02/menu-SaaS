import { useContext } from "react"

import { CartContext } from "./cartContext.jsx"

export const useCart = () => {
  return useContext(CartContext)
}
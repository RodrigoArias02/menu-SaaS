import {
  useEffect,
  useState
} from "react"

import { CartContext } from "./cartcontext.jsx"

export const CartProvider = ({
  children
}) => {

  const [cart, setCart] = useState(() => {

    const savedCart =
      localStorage.getItem("cart")

    return savedCart
      ? JSON.parse(savedCart)
      : []
  })
  

  useEffect(() => {

    localStorage.setItem(
      "cart",
      JSON.stringify(cart)
    )

  }, [cart])

  const addToCart = (
    product,
    quantity = 1
  ) => {

    const existingProduct = cart.find(
      item => item.id === product.id
    )

    if (existingProduct) {

      setCart(
        cart.map(item =>

          item.id === product.id
            ? {
                ...item,
                quantity:
                  item.quantity + quantity
              }
            : item
        )
      )

    } else {

      setCart([
        ...cart,
        {
          ...product,
          quantity
        }
      ])
    }
  }

  const removeFromCart = (id) => {
    console.log("Removing product with id:", id)
    setCart(
      cart.filter(
        item => item.id !== id
      )
    )
  }

  const increaseQuantity = (id) => {

    setCart(
      cart.map(item =>

        item.id === id
          ? {
              ...item,
              quantity: item.quantity + 1
            }
          : item
      )
    )
  }

  const decreaseQuantity = (id) => {

    setCart(
      cart
        .map(item =>

          item.id === id
            ? {
                ...item,
                quantity: item.quantity - 1
              }
            : item
        )
        .filter(item => item.quantity > 0)
    )
  }

  const total = cart.reduce(

    (acc, item) =>
      acc + (
        item.price * item.quantity
      ),

    0
  )

  return (
    <CartContext.Provider
      value={{
        cart,
        addToCart,
        removeFromCart,
        increaseQuantity,
        decreaseQuantity,
        total
      }}
    >
      {children}
    </CartContext.Provider>
  )
}
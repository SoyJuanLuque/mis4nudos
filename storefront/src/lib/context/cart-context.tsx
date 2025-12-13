"use client"

import { HttpTypes } from "@medusajs/types"
import { createContext, useContext, useState, useCallback, ReactNode } from "react"

type CartContextType = {
  cart: HttpTypes.StoreCart | null
  setCart: (cart: HttpTypes.StoreCart | null) => void
  totalItems: number
  updateCart: (cart: HttpTypes.StoreCart | null) => void
}

const CartContext = createContext<CartContextType | null>(null)

export function CartProvider({
  children,
  initialCart
}: {
  children: ReactNode
  initialCart: HttpTypes.StoreCart | null
}) {
  const [cart, setCartState] = useState<HttpTypes.StoreCart | null>(initialCart)

  const totalItems = cart?.items?.reduce((acc, item) => acc + item.quantity, 0) || 0

  const setCart = useCallback((newCart: HttpTypes.StoreCart | null) => {
    setCartState(newCart)
  }, [])

  const updateCart = useCallback((newCart: HttpTypes.StoreCart | null) => {
    console.log("[CartContext] updateCart called, items:", newCart?.items?.length)
    setCartState(newCart)
  }, [])

  return (
    <CartContext.Provider value={{ cart, setCart, totalItems, updateCart }}>
      {children}
    </CartContext.Provider>
  )
}

export function useCart() {
  const context = useContext(CartContext)
  if (!context) {
    throw new Error("useCart must be used within a CartProvider")
  }
  return context
}

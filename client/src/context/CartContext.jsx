import { createContext, useContext, useEffect, useMemo, useState } from 'react'
import { getStoredData, saveStoredData, storageKeys } from '../utils/localStorage'

const CartContext = createContext(null)

export const CartProvider = ({ children }) => {
  const [cartItems, setCartItems] = useState(() => getStoredData(storageKeys.cart, []))

  useEffect(() => {
    saveStoredData(storageKeys.cart, cartItems)
  }, [cartItems])

  const addToCart = (food) => {
    setCartItems((current) => {
      const existingItem = current.find((item) => item.id === food.id)
      if (existingItem) {
        return current.map((item) =>
          item.id === food.id ? { ...item, quantity: item.quantity + 1 } : item,
        )
      }
      return [...current, { ...food, quantity: 1 }]
    })
  }

  const removeFromCart = (id) => {
    setCartItems((current) => current.filter((item) => item.id !== id))
  }

  const updateQuantity = (id, change) => {
    setCartItems((current) =>
      current
        .map((item) =>
          item.id === id ? { ...item, quantity: Math.max(0, item.quantity + change) } : item,
        )
        .filter((item) => item.quantity > 0),
    )
  }

  const clearCart = () => setCartItems([])

  const totalItems = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity, 0),
    [cartItems],
  )

  const totalPrice = useMemo(
    () => cartItems.reduce((sum, item) => sum + item.quantity * item.price, 0),
    [cartItems],
  )

  const value = {
    cartItems,
    addToCart,
    removeFromCart,
    updateQuantity,
    clearCart,
    totalItems,
    totalPrice,
  }

  return <CartContext.Provider value={value}>{children}</CartContext.Provider>
}

export const useCart = () => {
  const context = useContext(CartContext)
  if (!context) throw new Error('useCart must be used in CartProvider')
  return context
}

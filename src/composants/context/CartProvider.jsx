// src/context/CartProvider.jsx
import { CartProvider } from 'react-use-cart'

export default function MyCartProvider({ children }) {
  return <CartProvider>{children}</CartProvider>
}

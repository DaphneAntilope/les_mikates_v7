import { CartProvider } from "react-use-cart";

export default function Panier({children}) {
    return <CartProvider>{children}</CartProvider>
}
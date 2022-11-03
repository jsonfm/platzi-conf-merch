import { useAppContext } from "@/hooks/useAppContext"

export const Checkout = () => {
  const { state } = useAppContext();
  return(
    <div>

      {state.cart.map(cart => <p>{cart.title}</p>)}
    </div>
  )
}

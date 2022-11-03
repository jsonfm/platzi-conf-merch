import { useAppContext } from "@/hooks/useAppContext";
import { ProductsList } from "@/components/ProductsList";
import { ProductCard } from "@/components/ProductCard";

export const Home = () => {
  const { state } = useAppContext();

  return(
    <ProductsList>
      {state.products.map((product, index) => <ProductCard key={index} product={product} /> )}
    </ProductsList>
  )
}

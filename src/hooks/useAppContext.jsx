import { useContext } from "react";
import { AppContext } from "@/store/context";

export const useAppContext = () => {
  return useContext(AppContext);
}

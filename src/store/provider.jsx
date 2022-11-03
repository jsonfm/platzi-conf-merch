import { useReducer } from "react";
import { AppContext } from "@/store/context";
import { reducer } from "@/reducers";
import { initialState } from "@/store/state";

export const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initialState());

  const store = {
    state,
    dispatch,
  };

  return <AppContext.Provider value={store}>{children}</AppContext.Provider>;
};

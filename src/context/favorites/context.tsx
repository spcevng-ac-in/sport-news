import { createContext, useContext, useReducer } from "react";
import { FavoritesDispatch, FavoritesState, initialFavoritesState } from "./types";
import { FavoritesReducer } from "./reducer";

const FavoritesStateContext = createContext<FavoritesState | undefined>(initialFavoritesState);
const FavoritesDispatchContext = createContext<FavoritesDispatch>(() => {});

export const FavoritesProvider: React.FC<React.PropsWithChildren > = ({
    children,}) => {
    const [state, dispacth] = useReducer(FavoritesReducer, initialFavoritesState);
    return (
      <FavoritesStateContext.Provider value={state}>
        <FavoritesDispatchContext.Provider value={dispacth}>
          {children}
        </FavoritesDispatchContext.Provider>
      </FavoritesStateContext.Provider>
    );
  };
  
export const useFavoritesState = () => useContext(FavoritesStateContext);
export const useFavoritesDispatch = () => useContext(FavoritesDispatchContext);
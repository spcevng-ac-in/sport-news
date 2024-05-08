import { createContext, useContext, useReducer } from "react";
import { FavoritesDispatch, FavoriteSportState, initialFavoriteSportState } from "./types";
import { FavoritesReducer } from "./reducer";

const FavoritesStateContext = createContext<FavoriteSportState | undefined>(initialFavoriteSportState);
const FavoritesDispatchContext = createContext<FavoritesDispatch>(() => {});

export const FavoritesProvider: React.FC<React.PropsWithChildren > = ({
    children,}) => {
    const [state, dispacth] = useReducer(FavoritesReducer, initialFavoriteSportState);
    return (
      <FavoritesStateContext.Provider value={state}>
        <FavoritesDispatchContext.Provider value={dispacth}>
          {children}
        </FavoritesDispatchContext.Provider>
      </FavoritesStateContext.Provider>
    );
  };
  
export const useFavoriteSportState = () => useContext(FavoritesStateContext);
export const useFavoriteSportDispatch = () => useContext(FavoritesDispatchContext);
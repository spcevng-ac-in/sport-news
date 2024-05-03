import { createContext, useContext, useReducer } from "react";
import { MatchDetailReducer } from "./reducer";
import { MatchDetailDispatch, MatchDetailState, initialMatchDetailState } from "./types";


const MatcheDetailStateContext = createContext<MatchDetailState | undefined>(initialMatchDetailState);
const MatcheDetailDispatchContext = createContext<MatchDetailDispatch>(() => {});


export const MatchesDetailProvider: React.FC<React.PropsWithChildren > = ({
    children,}) => {
    const [state, dispacth] = useReducer(MatchDetailReducer, initialMatchDetailState);
    return (
      <MatcheDetailStateContext.Provider value={state}>
        <MatcheDetailDispatchContext.Provider value={dispacth}>
          {children}
        </MatcheDetailDispatchContext.Provider>
      </MatcheDetailStateContext.Provider>
    );
  };
  
export const useMatcheDetailState = () => useContext(MatcheDetailStateContext);
export const useMatcheDetailDispatch = () => useContext(MatcheDetailDispatchContext);
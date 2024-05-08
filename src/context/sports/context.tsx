import React, { createContext, useContext, useReducer } from "react";
import { SportDispatch, SportState, initialSportState } from "./types";
import { SportReducer } from "./reducer";

const SportStateContext = createContext<SportState>(initialSportState);
const SportDispatchContext = createContext<SportDispatch>(() => {});


export const SportProvider: React.FC<React.PropsWithChildren> = ({
  children,}) => {
  const [state, dispacth] = useReducer(SportReducer, initialSportState);
  return (
    <SportStateContext.Provider value={state}>
      <SportDispatchContext.Provider value={dispacth}>
        {children}
      </SportDispatchContext.Provider>
    </SportStateContext.Provider>
  );
};


export const useSportState = () => useContext(SportStateContext);
export const useSportDispatch = () => useContext(SportDispatchContext);

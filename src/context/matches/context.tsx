import React, { createContext, useContext, useReducer } from "react";
import { MatchReducer } from "./reducer";
import { MatchesState, MatchDispatch, initialState, MatcheDetailState, initialMatchDetailState, MatchDetailDispatch } from "./types";

const MatchesStateContext = createContext<MatchesState>(initialState);
const MatchesDispatchContext = createContext<MatchDispatch>(() => {});

const MatcheDetailStateContext = createContext<MatcheDetailState>(initialMatchDetailState);
const MatcheDetailDispatchContext = createContext<MatchDetailDispatch>(() => {});

export const MatchesProvider: React.FC<React.PropsWithChildren> = ({
  children,}) => {
  const [state, dispacth] = useReducer(MatchReducer, initialState);
  return (
    <MatchesStateContext.Provider value={state}>
      <MatchesDispatchContext.Provider value={dispacth}>
        {children}
      </MatchesDispatchContext.Provider>
    </MatchesStateContext.Provider>
  );
};
export const useMatchesState = () => useContext(MatchesStateContext);
export const useMatchesDispatch = () => useContext(MatchesDispatchContext);

export const useMatcheDetailState = () => useContext(MatcheDetailStateContext);
export const useMatcheDetailDispatch = () => useContext(MatcheDetailDispatchContext);
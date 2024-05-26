import React, { createContext, useContext, useReducer } from "react";
import { TrendingNewsDispatch, TrendingNewsState, initialTrendingNewsState } from "./types";
import { TrendingNewsReducer } from "./reducer";

const TrendingNewsStateContext = createContext<TrendingNewsState>(initialTrendingNewsState);
const TrendingNewsDispatchContext = createContext<TrendingNewsDispatch>(() => { });


export const TrendingNewsProvider: React.FC<React.PropsWithChildren> = ({
  children, }) => {
  const [state, dispacth] = useReducer(TrendingNewsReducer, initialTrendingNewsState);
  return (
    <TrendingNewsStateContext.Provider value={state}>
      <TrendingNewsDispatchContext.Provider value={dispacth}>
        {children}
      </TrendingNewsDispatchContext.Provider>
    </TrendingNewsStateContext.Provider>
  );
};


export const useTrendingNewsState = () => useContext(TrendingNewsStateContext);
export const useTrendingNewsDispatch = () => useContext(TrendingNewsDispatchContext);

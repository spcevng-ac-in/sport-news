import React, { createContext, useContext, useReducer } from "react";
import { TrendingNewsDetailDispatch, TrendingNewsDetailState, initialTrendingNewsDetailState } from "./types";
import { TrendingNewsDetailReducer } from "./reducer";

const TrendingNewsDetailStateContext = createContext<TrendingNewsDetailState>(initialTrendingNewsDetailState);
const TrendingNewsDetailDispatchContext = createContext<TrendingNewsDetailDispatch>(() => {});


export const TrendingNewsDetailProvider: React.FC<React.PropsWithChildren> = ({
  children,}) => {
  const [state, dispacth] = useReducer(TrendingNewsDetailReducer, initialTrendingNewsDetailState);
  return (
    <TrendingNewsDetailStateContext.Provider value={state}>
      <TrendingNewsDetailDispatchContext.Provider value={dispacth}>
        {children}
      </TrendingNewsDetailDispatchContext.Provider>
    </TrendingNewsDetailStateContext.Provider>
  );
};


export const useTrendingNewsDetailState = () => useContext(TrendingNewsDetailStateContext);
export const useTrendingNewsDetailDispatch = () => useContext(TrendingNewsDetailDispatchContext);

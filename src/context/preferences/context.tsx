import { createContext, useContext, useReducer } from "react";
import { PreferencesDispatch, PreferencesState, initialPreferencesState } from "./types";
import { PreferencesReducer } from "./reducer";

const PreferencesStateContext = createContext<PreferencesState | undefined>(initialPreferencesState);
const PreferencesDispatchContext = createContext<PreferencesDispatch>(() => {});

export const PreferencesProvider: React.FC<React.PropsWithChildren > = ({
    children,}) => {
    const [state, dispacth] = useReducer(PreferencesReducer, initialPreferencesState);
    return (
      <PreferencesStateContext.Provider value={state}>
        <PreferencesDispatchContext.Provider value={dispacth}>
          {children}
        </PreferencesDispatchContext.Provider>
      </PreferencesStateContext.Provider>
    );
  };
  
export const usePreferencesState = () => useContext(PreferencesStateContext);
export const usePreferencesDispatch = () => useContext(PreferencesDispatchContext);
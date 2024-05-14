import React, { createContext, useContext, useReducer } from "react";
import { TeamDispatch, TeamsState, initialTeamState } from "./types";
import { TeamReducer } from "./reducer";

const TeamsStateContext = createContext<TeamsState | undefined>(initialTeamState);
const TeamsDispatchContext = createContext<TeamDispatch>(() => {});


export const TeamsProvider: React.FC<React.PropsWithChildren> = ({
  children,}) => {
  const [state, dispacth] = useReducer(TeamReducer, initialTeamState);
  return (
    <TeamsStateContext.Provider value={state}>
      <TeamsDispatchContext.Provider value={dispacth}>
        {children}
      </TeamsDispatchContext.Provider>
    </TeamsStateContext.Provider>
  );
};


export const useTeamsState = () => useContext(TeamsStateContext);
export const useTeamsDispatch = () => useContext(TeamsDispatchContext);

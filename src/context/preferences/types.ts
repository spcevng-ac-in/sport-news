export interface Preferences{
    sports: number[];
    teams: number[];
}


export interface PreferencesState{
    preferences: Preferences,
    isLoading: boolean,
    isError: boolean,
    errorMessage: string
  }

  
export const initialPreferencesState: PreferencesState = {
    preferences: {sports:[],teams:[]},
    isLoading: false,
    isError: false,
    errorMessage: "",
};


export enum PreferencesAction {
    FETCH_PREFERENCES_REQUEST = "FETCH_PREFERENCES_REQUEST",
    FETCH_PREFERENCES_SUCCESS = "FETCH_PREFERENCES_SUCCESS",
    FETCH_PREFERENCES_FAILURE = "FETCH_PREFERENCES_FAILURE",
};


export type PreferencesActions =
    | { type: PreferencesAction.FETCH_PREFERENCES_REQUEST }
    | { type: PreferencesAction.FETCH_PREFERENCES_SUCCESS, payload: Preferences }
    | { type: PreferencesAction.FETCH_PREFERENCES_FAILURE, payload: string }


export type PreferencesDispatch = React.Dispatch<PreferencesActions >
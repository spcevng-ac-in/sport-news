
export interface Sport {
    id: number,
    name: string
}

export interface SportState{
    sports: Sport[],
    isLoading: boolean,
    isError: boolean,
    errorMessage: string
  }

  
export const initialSportState: SportState = {
    sports: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};


export enum SportAction {
    FETCH_SPORT_REQUEST = "FETCH_SPORT_REQUEST",
    FETCH_SPORT_SUCCESS = "FETCH_SPORT_SUCCESS",
    FETCH_SPORT_FAILURE = "FETCH_SPORT_FAILURE",
};


export type SportActions =
    | { type: SportAction.FETCH_SPORT_REQUEST }
    | { type: SportAction.FETCH_SPORT_SUCCESS, payload: Sport[] }
    | { type: SportAction.FETCH_SPORT_FAILURE, payload: string }


export type SportDispatch = React.Dispatch<SportActions >
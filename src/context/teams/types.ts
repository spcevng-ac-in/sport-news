

export interface Team {
    id: number;
    name: string;
    plays: string;
};

export interface TeamsState {
    teams: Team[],
    isLoading: boolean,
    isError: boolean,
    errorMessage: string
};

export const initialTeamState: TeamsState = {
    teams: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};


export enum TeamAction {
    FETCH_TEAM_REQUEST = "FETCH_TEAM_REQUEST",
    FETCH_TEAM_SUCCESS = "FETCH_TEAM_SUCCESS",
    FETCH_TEAM_FAILURE = "FETCH_TEAM_FAILURE",
};


export type TeamActions =
    | { type: TeamAction.FETCH_TEAM_REQUEST }
    | { type: TeamAction.FETCH_TEAM_SUCCESS, payload: Team[] }
    | { type: TeamAction.FETCH_TEAM_FAILURE, payload: string }

export type TeamDispatch = React.Dispatch<TeamActions>
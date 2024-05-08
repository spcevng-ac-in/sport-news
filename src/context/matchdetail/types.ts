import { Sport } from "../sports/types";

export interface MatchDetail {
    id: number;
    isRunning: boolean;
    name: string;
    location: string;
    startsAt: string;
    endsAt: string;
    score: Score;
    teams: Sport[];
    sportName: string;
    playingTeam: string;
    story: string;
};

export interface Score{
    name: string;
    scoreValue: string;
}

export interface MatchDetailState {
    matchDetail: MatchDetail[],
    isLoading: boolean,
    isError: boolean,
    errorMessage: string
};

export const initialMatchDetailState: MatchDetailState = {
    matchDetail: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};


export enum MatcheDetailAvailableAction {
    FETCH_MATCH_DETAIL_REQUEST = "FETCH_MATCH_DETAIL_REQUEST",
    FETCH_MATCH_DETAIL_SUCCESS = "FETCH_MACTH_DETAIL_SUCCESS",
    FETCH_MATCH_DETAIL_FAILURE = "FETCH_MATCH_DETAIL_FAILURE",
};


export type MatchDetailActions =
    | { type: MatcheDetailAvailableAction.FETCH_MATCH_DETAIL_REQUEST }
    | { type: MatcheDetailAvailableAction.FETCH_MATCH_DETAIL_SUCCESS, payload: MatchDetail }
    | { type: MatcheDetailAvailableAction.FETCH_MATCH_DETAIL_FAILURE, payload: string }

export type MatchDetailDispatch = React.Dispatch<MatchDetailActions>
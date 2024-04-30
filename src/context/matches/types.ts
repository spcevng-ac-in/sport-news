import React from "react";
import { Sport } from "../sports/type";

export interface Matches {
    id: number;
    name: string;
    location: string;
    sportName: string;
    endsAt: string;
    isRunning: boolean;
    teams: Sport[];
    // matchDetail: MatchDetail;
};

export interface MatchesState {
    matches: Matches[],
    isLoading: boolean,
    isError: boolean,
    errorMessage: string
};

export const initialState: MatchesState = {
    matches: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};

export interface MatchDetail {
    id: number;
    isRunning: boolean;
    name: string;
    location: string;
    startsAt: string;
    endsAt: string;
    score: Object;
    teams: Sport[];
    sportName: string;
    playingTeam: string;
    story: string;
};

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


export enum MatcheAvailableAction {
    FETCH_MATCH_REQUEST = "FETCH_MATCH_REQUEST",
    FETCH_MATCH_SUCCESS = "FETCH_MACTH_SUCCESS",
    FETCH_MATCH_FAILURE = "FETCH_MATCH_FAILURE",
    FETCH_MATCH_DETAIL_REQUEST = "FETCH_MATCH_DETAIL_REQUEST",
    FETCH_MATCH_DETAIL_SUCCESS = "FETCH_MACTH_DETAIL_SUCCESS",
    FETCH_MATCH_DETAIL_FAILURE = "FETCH_MATCH_DETAIL_FAILURE",
    
};

export type MatchActions =
    | { type: MatcheAvailableAction.FETCH_MATCH_REQUEST }
    | { type: MatcheAvailableAction.FETCH_MATCH_SUCCESS, payload: Matches[] }
    | { type: MatcheAvailableAction.FETCH_MATCH_FAILURE, payload: string }
    | { type: MatcheAvailableAction.FETCH_MATCH_DETAIL_REQUEST }
    | { type: MatcheAvailableAction.FETCH_MATCH_DETAIL_SUCCESS, payload: Matches[] }
    | { type: MatcheAvailableAction.FETCH_MATCH_DETAIL_FAILURE, payload: string }

export type MatchDispatch = React.Dispatch<MatchActions>
export type MatchDetailDispatch = React.Dispatch<MatchActions>
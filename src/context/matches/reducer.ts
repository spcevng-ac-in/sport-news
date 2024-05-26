import { Reducer } from "react";
import { MatchesState, MatchActions, MatcheAvailableAction, initialState } from "./types";


export const MatchReducer: Reducer<MatchesState, MatchActions> = (
    state = initialState, action) => {
    switch (action.type) {
        case MatcheAvailableAction.FETCH_MATCH_REQUEST:
            return { ...state, isLoading: true }
        case MatcheAvailableAction.FETCH_MATCH_SUCCESS:
            return {
                ...state, isLoading: false,
                matches: action.payload
            }
        case MatcheAvailableAction.FETCH_MATCH_FAILURE:
            return {
                ...state, isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }

}


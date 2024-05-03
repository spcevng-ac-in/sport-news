import { Reducer } from "react"
import { MatchDetailActions, MatchDetailState, MatcheDetailAvailableAction, initialMatchDetailState } from "./types"

export const MatchDetailReducer: Reducer<MatchDetailState | undefined, MatchDetailActions> = (
    state = initialMatchDetailState, action) => {
    switch (action.type) {
        case MatcheDetailAvailableAction.FETCH_MATCH_DETAIL_FAILURE:
            return { ...state, isLoading: true }
        case MatcheDetailAvailableAction.FETCH_MATCH_DETAIL_SUCCESS:
            // console.log("Match detail status -> ",[...state.matchDetail, action.payload] )
            return {
                ...state, isLoading: false,
                matchDetail: [...state.matchDetail, action.payload]
            }
        case MatcheDetailAvailableAction.FETCH_MATCH_DETAIL_FAILURE:
            return {
                ...state, isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }

}
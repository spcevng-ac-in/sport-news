import { Reducer } from "react"
import { TeamAction, TeamActions, TeamsState, initialTeamState } from "./types"

export const TeamReducer: Reducer<TeamsState | undefined, TeamActions> = (
    state = initialTeamState, action) => {
    switch (action.type) {
        case TeamAction.FETCH_TEAM_REQUEST :
            return { ...state, isLoading: true }
        case TeamAction.FETCH_TEAM_SUCCESS:
            // console.log("Match detail status -> ",[...state.matchDetail, action.payload] )
            return {
                ...state, isLoading: false,
                teams:  action.payload
            }
        case TeamAction.FETCH_TEAM_FAILURE:
            return {
                ...state, isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }

}
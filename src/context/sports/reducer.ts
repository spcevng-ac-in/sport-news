import { Reducer } from "react";
import { SportAction, SportActions, SportState, initialSportState } from "./type";

export const SportReducer: Reducer<SportState, SportActions> = (
    state = initialSportState, action) => {
    switch (action.type) {
        case SportAction.FETCH_SPORT_REQUEST:
            return { ...state, isLoading: true }
        case SportAction.FETCH_SPORT_SUCCESS:
            // console.log("Sport Payload:", action.payload)
            return {
                ...state, isLoading: false,
                sports:  action.payload
            }
        case SportAction.FETCH_SPORT_FAILURE:
            return {
                ...state, isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }

}


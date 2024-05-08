import { Reducer } from "react"
import { FavoritesAction, FavoritesActions, FavoritesState, initialFavoritesState } from "./types"

export const FavoritesReducer: Reducer<FavoritesState | undefined, FavoritesActions> = (
    state = initialFavoritesState, action) => {
    switch (action.type) {
        case FavoritesAction.FETCH_FAVORITES_REQUEST:
            return { ...state, isLoading: true }
        case FavoritesAction.FETCH_FAVORITES_SUCCESS:
            // console.log("Match detail status -> ",[...state.matchDetail, action.payload] )
            return {
                ...state, isLoading: false,
                matchDetail: action.payload
            }
        case FavoritesAction.FETCH_FAVORITES_FAILURE:
            return {
                ...state, isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }

}
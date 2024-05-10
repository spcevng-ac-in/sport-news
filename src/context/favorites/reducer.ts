import { Reducer } from "react"
import { FavoritesAction, FavoritesActions, FavoriteSportState, initialFavoriteSportState } from "./types"

export const FavoritesReducer: Reducer<FavoriteSportState | undefined, FavoritesActions> = (
    state = initialFavoriteSportState, action) => {
    switch (action.type) {
        case FavoritesAction.FETCH_FAVORITES_REQUEST:
            return { ...state, isLoading: true }
        case FavoritesAction.FETCH_FAVORITES_SUCCESS:
            console.log("Update Payload:", action.payload)
            return {
                ...state, isLoading: false,
                sports: [action.payload]
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

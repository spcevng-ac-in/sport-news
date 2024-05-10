import { Reducer } from "react";
import { PreferencesAction, PreferencesActions, PreferencesState, initialPreferencesState } from "./types";

export const PreferencesReducer: Reducer<PreferencesState | undefined, PreferencesActions> = (
    state = initialPreferencesState, action) => {
    switch (action.type) {
        case PreferencesAction.FETCH_PREFERENCES_REQUEST:
            return { ...state, isLoading: true }
        case PreferencesAction.FETCH_PREFERENCES_SUCCESS:
            return {
                ...state, isLoading: false,
                preferences: action.payload
            }
        case PreferencesAction.FETCH_PREFERENCES_FAILURE:
            return {
                ...state, isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }
}

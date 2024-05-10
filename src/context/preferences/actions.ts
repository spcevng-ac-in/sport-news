import { API_ENDPOINT } from "../../config/constants";
import { usePreferencesState } from "./context";
import { PreferencesAction, PreferencesDispatch } from "./types";

export const fetchPreferences: any = async (
    dispatch: PreferencesDispatch
) => {
    try {
        dispatch({ type: PreferencesAction.FETCH_PREFERENCES_REQUEST })
        const token: string | null = localStorage.getItem("authToken") ?? "";
        console.log("Fetch preferences:", `${API_ENDPOINT}/user/preferences`);
        const res = await fetch(`${API_ENDPOINT}/user/preferences`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },

        });

        if (!res.ok) {
            throw new Error("Failed to Fetch Matche Detail")
        }
        const data = await res.json();

        dispatch({
            type: PreferencesAction.FETCH_PREFERENCES_SUCCESS,
            payload: data
        })
        return data;
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        dispatch({
            type: PreferencesAction.FETCH_PREFERENCES_FAILURE,
            payload: "Unable to Load Preferences Detail"
        })
    }
}

export const updatePreferences: any = async (
    dispatch: PreferencesDispatch
) => {

    const preference = usePreferencesState();
    console.log("update preferences:", preference);
    try {
        dispatch({ type: PreferencesAction.FETCH_PREFERENCES_REQUEST })
        const token: string | null = localStorage.getItem("authToken");
        const res = await fetch(`${API_ENDPOINT}/user/preferences`, {
            method: 'PATCH',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },
            body: JSON.stringify({ preferences: preference }),
        });

        if (!res.ok) {
            throw new Error("Failed to Update Preferences")
        }
        const data = await res.json();

        dispatch({
            type: PreferencesAction.FETCH_PREFERENCES_SUCCESS,
            payload: data
        })
        return data;
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        dispatch({
            type: PreferencesAction.FETCH_PREFERENCES_FAILURE,
            payload: "Unable to Load Preferences Detail"
        })
    }
}
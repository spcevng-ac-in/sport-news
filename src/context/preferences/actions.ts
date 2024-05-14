
import { API_ENDPOINT } from "../../config/constants";

import { PreferencesAction, PreferencesDispatch, PreferencesState } from "./types";

export const fetchPreferences: any = async (
    dispatch: PreferencesDispatch
) => {
    // let navigate = useNavigate();
    try {
        dispatch({ type: PreferencesAction.FETCH_PREFERENCES_REQUEST })
        const token = localStorage.getItem("authToken") ?? "";
        const res = await fetch(`${API_ENDPOINT}/user/preferences`, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                Authorization: `Bearer ${token}`
            },

        });

        if (!res.ok) {
            throw new Error("Failed to Fetch Preferences Detail")
        }
        const data = await res.json();
        // console.log("Fetch Preference-1:", data.preferences);
        dispatch({
            type: PreferencesAction.FETCH_PREFERENCES_SUCCESS,
            payload: data.preferences
        })
        return data;
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        // navigate("/signin");
        
        dispatch({
            type: PreferencesAction.FETCH_PREFERENCES_FAILURE,
            payload: "Unable to Load Preferences Detail"
        })
    }
}

export const updatePreferences: any = async (
    dispatch: PreferencesDispatch, preference: PreferencesState
) => {

    // const preference = usePreferencesState();
    // console.log("TO update preferences:", preference);
    // let navigate = useNavigate();
    try {
        dispatch({ type: PreferencesAction.FETCH_PREFERENCES_REQUEST })
        
        const token = localStorage.getItem("authToken") ?? "";
        // console.log("Token:", token);
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
        // console.log("Updated data response:", data.preferences);
        // fetchPreferences(dispatch);
        dispatch({
            type: PreferencesAction.FETCH_PREFERENCES_SUCCESS,
            payload: data.preferences
        })
        return data;
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        // navigate("/signin");
        
        dispatch({
            type: PreferencesAction.FETCH_PREFERENCES_FAILURE,
            payload: "Unable to Load Preferences Detail"
        })
    }
}
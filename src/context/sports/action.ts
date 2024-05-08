import { API_ENDPOINT } from "../../config/constants";
import { SportAction, SportDispatch } from "./types";


export const fetchSports = async (
    dispatch: SportDispatch,
) => {
    // console.log("URL:", `${API_ENDPOINT}/sports`)
    try {
        dispatch({ type: SportAction.FETCH_SPORT_REQUEST })
        const res = await fetch(`${API_ENDPOINT}/sports`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!res.ok) {
            throw new Error("Failed to Fetch Sports")
        }
        const data = await res.json();
        // console.log("Sports Data:", data);
        dispatch({
            type: SportAction.FETCH_SPORT_SUCCESS,
            payload: data.sports
        })

    } catch (error) {
        console.log(`Operation Failed:${error}`)
        dispatch({
            type: SportAction.FETCH_SPORT_FAILURE,
            payload: "Unable to Load Sports"
        })
    }
}

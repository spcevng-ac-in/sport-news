import {MatchDispatch, MatcheAvailableAction } from "./types";
import { API_ENDPOINT } from "../../config/constants";



export const fetchMatches = async (
    dispatch: MatchDispatch,
) => {
    // let navigate = useNavigate();
    try {
        dispatch({ type: MatcheAvailableAction.FETCH_MATCH_REQUEST })
        const res = await fetch(`${API_ENDPOINT}/matches`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!res.ok) {
            throw new Error("Failed to Fetch Matches")
        }
        const data = await res.json();

        dispatch({
            type: MatcheAvailableAction.FETCH_MATCH_SUCCESS,
            payload: data.matches
        })

    } catch (error) {
        console.log(`Operation Failed at fetchMatches:${error}`)
        // navigate("/signin");
        
        dispatch({
            type: MatcheAvailableAction.FETCH_MATCH_FAILURE,
            payload: "Unable to Load Matches"
        })
    }
}

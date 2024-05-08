import { API_ENDPOINT } from "../../config/constants";
import { TeamAction, TeamDispatch } from "./types";


export const fetchTeams = async (
    dispatch: any,
) => {
    try {
        // console.log(`${API_ENDPOINT}/teams`);

        dispatch({ type: TeamAction.FETCH_TEAM_REQUEST })
        const res = await fetch(`${API_ENDPOINT}/teams`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!res.ok) {
            throw new Error("Failed to Fetch Teams")
        }
        const data = await res.json();
        console.log("Teams Data:", data);

        dispatch({
            type: TeamAction.FETCH_TEAM_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(`Operation Failed:${error}`)
        dispatch({
            type: TeamAction.FETCH_TEAM_FAILURE,
            payload: "Unable to Load Teams"
        })
    }
}

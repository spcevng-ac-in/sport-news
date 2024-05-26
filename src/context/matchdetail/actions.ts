
import { API_ENDPOINT } from "../../config/constants";
import { MatchDetailDispatch, MatcheDetailAvailableAction } from "./types";

export const fetchMatcheDetail: any = async (
    dispatch: MatchDetailDispatch, matchID: string
) => {
    // let navigate = useNavigate();
    try {
        dispatch({ type: MatcheDetailAvailableAction.FETCH_MATCH_DETAIL_REQUEST })
        const res = await fetch(`${API_ENDPOINT}/matches/${matchID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!res.ok) {
            throw new Error("Failed to Fetch Match Detail")
        }
        const data = await res.json();
        // console.log("Match detail for -> " , matchID, " Payload:", data);
        // console.log("Disoacth:", dispatch);
        dispatch({
            type: MatcheDetailAvailableAction.FETCH_MATCH_DETAIL_SUCCESS,
            payload: data
        })
        return data;
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        dispatch({
            type: MatcheDetailAvailableAction.FETCH_MATCH_DETAIL_FAILURE,
            payload: "Unable to Load Match Detail"
        })
        // navigate("/signin");
    }
}

import {TrendingNewsDispatch, TrendingNewsAvailableAction } from "./types";
import { API_ENDPOINT } from "../../config/constants";

export const fetchTrendingNews = async (
    dispatch: TrendingNewsDispatch,
) => {
    // let navigate = useNavigate();
    try {
        dispatch({ type: TrendingNewsAvailableAction.FETCH_TRENDINGNEWS_REQUEST })
        const res = await fetch(`${API_ENDPOINT}/articles`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!res.ok) {
            throw new Error("Failed to Fetch TrendingNews")
        }
        const data = await res.json();
        // console.log("Data:", data);
        dispatch({
            type: TrendingNewsAvailableAction.FETCH_TRENDINGNEWS_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(`Operation Failed:${error}`)
        // navigate("/signin");
        dispatch({
            type: TrendingNewsAvailableAction.FETCH_TRENDINGNEWS_FAILURE,
            payload: "Unable to Load TrendingNews"
        })
    }
}

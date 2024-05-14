import {TrendingNewsDetailDispatch, TrendingNewsDetailAvailableAction } from "./types";
import { API_ENDPOINT } from "../../config/constants";



export const fetchTrendingNewsDetail = async (
    dispatch: TrendingNewsDetailDispatch, newsID: any
) => {
    // let navigate = useNavigate();
    try {
        dispatch({ type: TrendingNewsDetailAvailableAction.FETCH_TRENDINGNEWSDETAIL_REQUEST })
        const res = await fetch(`${API_ENDPOINT}/articles/${newsID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!res.ok) {
            throw new Error("Failed to Fetch Trending News Detail")
        }
        const data = await res.json();
        // console.log("Data:", data);
        dispatch({
            type: TrendingNewsDetailAvailableAction.FETCH_TRENDINGNEWSDETAIL_SUCCESS,
            payload: data
        })

    } catch (error) {
        console.log(`Operation Failed:${error}`)
        // navigate("/signin");
        
        dispatch({
            type: TrendingNewsDetailAvailableAction.FETCH_TRENDINGNEWSDETAIL_FAILURE,
            payload: "Unable to Load Trending News Detail"
        })
    }
}

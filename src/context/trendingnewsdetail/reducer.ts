import { Reducer } from "react";
import { TrendingNewsDetailActions, TrendingNewsDetailAvailableAction, TrendingNewsDetailState, initialTrendingNewsDetailState } from "./types";


export const TrendingNewsDetailReducer: Reducer<TrendingNewsDetailState, TrendingNewsDetailActions> = (
    state = initialTrendingNewsDetailState, action) => {
    switch (action.type) {
        case TrendingNewsDetailAvailableAction.FETCH_TRENDINGNEWSDETAIL_REQUEST:
            return { ...state, isLoading: true }
        case TrendingNewsDetailAvailableAction.FETCH_TRENDINGNEWSDETAIL_SUCCESS:
            // console.log("Trending News Detail - action.payload:", action.payload);
            // console.log("Trending News Detail - State:", state.trendingNewsDetail);
            return {
                ...state, isLoading: false,
                trendingNewsDetail:  [...state.trendingNewsDetail, action.payload]
            }
        case TrendingNewsDetailAvailableAction.FETCH_TRENDINGNEWSDETAIL_FAILURE:
            return {
                ...state, isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }

}


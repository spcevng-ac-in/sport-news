import { Reducer } from "react";
import { TrendingNewsActions, TrendingNewsAvailableAction, TrendingNewsState, initialTrendingNewsState } from "./types";


export const TrendingNewsReducer: Reducer<TrendingNewsState, TrendingNewsActions> = (
    state = initialTrendingNewsState, action) => {
    switch (action.type) {
        case TrendingNewsAvailableAction.FETCH_TRENDINGNEWS_REQUEST:
            return { ...state, isLoading: true }
        case TrendingNewsAvailableAction.FETCH_TRENDINGNEWS_SUCCESS:
            console.log("State:", state);
            
            return {
                ...state, isLoading: false,
                trendingNews: action.payload
            }
        case TrendingNewsAvailableAction.FETCH_TRENDINGNEWS_FAILURE:
            return {
                ...state, isLoading: false,
                isError: true,
                errorMessage: action.payload
            }
        default:
            return state;
    }

}


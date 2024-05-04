import { Sport, Team } from "../sports/type";

export interface TrendingNewsDetail{
    id: number;
    title: string;
    summary: string;
    thumbnail: string;
    sport: Sport;
    date: string;
    content: string;
    teams: Team[];
  }

  export interface TrendingNewsDetailState{
    trendingNewsDetail: TrendingNewsDetail[],
    isLoading: boolean,
    isError: boolean,
    errorMessage: string
  }

  
export const initialTrendingNewsDetailState: TrendingNewsDetailState = {
    trendingNewsDetail: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};


export enum TrendingNewsDetailAvailableAction {
    FETCH_TRENDINGNEWSDETAIL_REQUEST = "FETCH_TRENDINGNEWSDETAIL_REQUEST",
    FETCH_TRENDINGNEWSDETAIL_SUCCESS = "FETCH_TRENDINGNEWSDETAIL_SUCCESS",
    FETCH_TRENDINGNEWSDETAIL_FAILURE = "FETCH_TRENDINGNEWSDETAIL_FAILURE",
};


export type TrendingNewsDetailActions =
    | { type: TrendingNewsDetailAvailableAction.FETCH_TRENDINGNEWSDETAIL_REQUEST }
    | { type: TrendingNewsDetailAvailableAction.FETCH_TRENDINGNEWSDETAIL_SUCCESS, payload: TrendingNewsDetail }
    | { type: TrendingNewsDetailAvailableAction.FETCH_TRENDINGNEWSDETAIL_FAILURE, payload: string }


export type TrendingNewsDetailDispatch = React.Dispatch<TrendingNewsDetailActions >
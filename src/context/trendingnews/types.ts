import { Sport, Team } from "../sports/type";

export interface TrendingNews{
    id: number;
    title: string;
    thumbnail: string;
    sport: Sport;
    date: string;
    summary: string;
    teams: Team[]
}

export interface TrendingNewsState {
    trendingNews: TrendingNews[],
    isLoading: boolean,
    isError: boolean,
    errorMessage: string
};

export const initialTrendingNewsState: TrendingNewsState = {
    trendingNews: [],
    isLoading: false,
    isError: false,
    errorMessage: "",
};

export enum TrendingNewsAvailableAction {
    FETCH_TRENDINGNEWS_REQUEST = "FETCH_TRENDINGNEWS_REQUEST",
    FETCH_TRENDINGNEWS_SUCCESS = "FETCH_TRENDINGNEWS_SUCCESS",
    FETCH_TRENDINGNEWS_FAILURE = "FETCH_TRENDINGNEWS_FAILURE",
};


export type TrendingNewsActions =
    | { type: TrendingNewsAvailableAction.FETCH_TRENDINGNEWS_REQUEST }
    | { type: TrendingNewsAvailableAction.FETCH_TRENDINGNEWS_SUCCESS, payload: TrendingNews[] }
    | { type: TrendingNewsAvailableAction.FETCH_TRENDINGNEWS_FAILURE, payload: string }


export type TrendingNewsDispatch = React.Dispatch<TrendingNewsActions >
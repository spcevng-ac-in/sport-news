import { Link } from "react-router-dom";
import { Matches } from "../../context/matches/types";
import { useTrendingNewsDispatch, useTrendingNewsState } from "../../context/trendingnews/context";
import TrendingNews from ".";
import { useEffect } from "react";
import { fetchTrendingNews } from "../../context/trendingnews/action";
import TrendingNewsDetail from "./TrendingNewsDetaiil";

export default function TrendingNewsItems(props: Matches) {
    // let trendingNewsDispatch = useTrendingNewsDispatch();
    // console.log("Trending News Dispatch:", trendingNewsDispatch);

    let trendingNewsState: any = useTrendingNewsState();
    const { trendingNews, isLoading, isError, errorMessage } = trendingNewsState
    console.log("Trending News:", trendingNews);
    if (trendingNews.length === 0 && isLoading) {
        return <span>Trending News Loading...</span>;
    }

    if (isError) {
        return <span>Trending News Item Page - {errorMessage}</span>;
    }

    return (
        <>
            <div className="flex-col w-full">
                {
                    trendingNews.map((news: any) => {
                        console.log("News:", news.id);
                        return (

                            <div
                                className=" flex justify-between m-2 block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            >
                                <div className="w-3/4">
                                    <h6 className="m-1 font-bold tracking-tight text-gray-900 dark:text-white text-left">
                                        {news.sport.name}
                                    </h6>
                                    <h2 className="m-1 text-xl font-bold tracking-tight text-blue-900 dark:text-white text-left">
                                        {news.title}
                                    </h2>
                                    <div className="m-1 h-24 text-wrap text-xs text-gray-600 text-left">
                                        {news.summary}
                                    </div>
                                    <div className=" flex justify-between m-1 mt-4 text-nowrap text-xs text-gray-600 text-left">
                                        {news.date}
                                        <TrendingNewsDetail data={news}/>
                                        
                                    </div>
                                </div>
                                <div className="w-1/4 bg-black">
                                    <img
                                        src={news.thumbnail}
                                        alt="news.title"
                                        className="w-[300px] min-h-full max-h-[200px] max-[1023px]:w-full max-[1023px]:rounded-t-lg  object-cover min-[1024px]:rounded-l-lg"
                                    />
                                </div>
                            </div>
                        )

                    })
                }

            </div>
        </>
    );
}


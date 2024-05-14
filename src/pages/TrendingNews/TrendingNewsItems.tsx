import { Link, useNavigate } from "react-router-dom";
import { useTrendingNewsState } from "../../context/trendingnews/context";
import { TrendingNews } from "../../context/trendingnews/types";
import { usePreferencesDispatch, usePreferencesState } from "../../context/preferences/context";
import { Team } from "../../context/teams/types";
import { useEffect, useState } from "react";
import { fetchPreferences } from "../../context/preferences/actions";

export default function TrendingNewsItems(props: any) {
    let navigate = useNavigate();
    let sportID = props.sportID;
    let [favoriteNews, SetFavoriteNews] = useState<number[]>([]);

    // console.log("Sport ID:---------->", sportID);
    // let trendingNewsDispatch = useTrendingNewsDispatch();
    // console.log("Trending News Dispatch:", trendingNewsDispatch);

    const userData = localStorage.getItem("userData") ?? "";
    // console.log("User Data:", userData);


    let trendingNewsState: any = useTrendingNewsState();
    const { trendingNews, isLoading, isError, errorMessage } = trendingNewsState
    // console.log("Trending News:", trendingNews, isLoading, isError, errorMessage);
    if (trendingNews.length === 0 && isLoading) {
        return <span>Trending News Loading...</span>;
    }

    if (isError) {
        return <span>Trending News Item Page -{errorMessage}</span>;
    }
    // let newsID = useParams();
    // const trendingNewsDetailDispatch = useTrendingNewsDetailDispatch();
    // useEffect(() => {

    //     if (newsID) fetchTrendingNewsDetail(trendingNewsDetailDispatch, newsID);

    // }, []);

    let selectedNews = trendingNews.filter(
        (tempNews: TrendingNews) => {
            // console.log("tempnews.id", tempNews.id);
            // console.log("sportID->", sportID);
            return (tempNews.sport.id === Number(sportID))
        }
    );

    const preferencesDispatch = usePreferencesDispatch();
    const preferencesState: any = usePreferencesState();
    const { preferences, isLoading2, isError2, errorMessage2 } = preferencesState;
    console.log("Preferences:", preferences, isLoading2, isError2, errorMessage2);

    try {
        useEffect(() => {
            // console.log("Call fetchPreferences");
            if (userData !== undefined && userData.length !== 0)
                fetchPreferences(preferencesDispatch);
        }, [preferencesDispatch, userData]);
    }
    catch (error) {
        navigate("/logout");
    }


    if ((userData === undefined || userData.length === 0) && sportID === 0) {
        selectedNews = trendingNews;
    }

    if (userData !== undefined && userData.length !== 0 && sportID == 0) {
        if (preferences?.sport?.length === 0 && preferences?.teams?.length === 0)
            return <span className="text-lg font-bold">Select Your Preferences!</span>
        selectedNews = trendingNews.filter(
            (tempNews: TrendingNews) => {
                let sportMatch = preferences?.sports?.includes(tempNews.sport.id);
                if (sportMatch)
                    return (sportMatch)
                // console.log("tempnews teams", tempNews.teams);
                // console.log("sportID->", sportID);
                let filteredTeamsNews = tempNews.teams.filter((team: Team) => {
                    if (preferences.teams?.includes(team.id)) {
                        // console.log(tempNews);
                        return (true);
                        // return preferences.teams?.includes(team.id);
                    }

                })
                if (filteredTeamsNews?.length !== 0) {
                    // console.log("matched tempNews.teams", filteredTeamsNews);
                    return true;
                }
                // let teamMatch1 = preferences.teams?.includes(tempNews.teams?[0].id);
                // let teamMatch2 = preferences.teams?.includes(tempNews.teams[1].id);
                // return ( sportMatch || teamMatch1 || teamMatch2)
                // return ( sportMatch )
            }
        );
        // return <span className="text-lg font-bold">News, You Likes!</span>
    }

    // console.log("Selcted News 1:", selectedNews);
    if (selectedNews === undefined || selectedNews.length === 0) {
        return <span className="text-lg font-bold">No Trending News for Now!</span>
    }

    // let selectedTabID = "tab" + sportID;
    // let selectedTab = document.getElementById(selectedTabID) || undefined;
    // if (selectedTab !== undefined) {
    //     // selectedTab.className = "font-bold border-y-purple-950";
    //     console.log("selected tab:", selectedTab.className);
    // }

    let tempFavoriteNews = localStorage.getItem("favoriteNews");
    if (tempFavoriteNews) {
        favoriteNews = JSON.parse(tempFavoriteNews);
    }
    const updateFavoritesNews = (newsID: number) => {
        console.log("Before Favorite Matches State", favoriteNews);
        if (favoriteNews) {
            // const updateFavoriteMatches = JSON.parse(favoriteMatches);
            // console.log("Before Favorite Matches", updateFavoriteMatches);
            if (favoriteNews.includes(newsID)) {
                const index = favoriteNews.indexOf(newsID);
                index > -1 ? favoriteNews.splice(index, 1) : "";
            } else {
                favoriteNews.push(newsID);
            }
            localStorage.setItem("favoriteNews", JSON.stringify(favoriteNews));
            SetFavoriteNews(favoriteNews);
            console.log("After Favorite News", favoriteNews);
        } else {
            console.log("First News ID: ", newsID);
            localStorage.setItem("favoriteNews", JSON.stringify([newsID]));
            SetFavoriteNews([newsID]);
        }
        console.log("Favorite News State", favoriteNews);
    }

    const formatDate = (isoDate: string) => {
        try {
            console.log("Date -> ", isoDate);
            const dateObj = new Date(isoDate);
            const year = dateObj.getFullYear();
            const month = String(dateObj.getMonth() + 1).padStart(2, "0");
            const day = String(dateObj.getDate()).padStart(2, "0");
            return `${year}-${month}-${day}`;
        }
        catch (error) {
            console.log("Date Formate error -", error);

        }
        return isoDate;

    };

    return (
        <>
            <div className="flex-col w-full">
                {
                    selectedNews.map((news: any) => {
                        // console.log("News:", news.id);
                        // fetchTrendingNewsDetail(trendingNewsDetailDispatch, news.id);
                        return (

                            <div key={news.id}
                                className=" flex justify-between m-2 block bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            >
                                <div className="w-3/4">
                                    <h6 className="flex justify-between m-1 font-bold tracking-tight text-gray-900 dark:text-white text-left">
                                        {news.sport.name}
                                        <div
                                            // to={match.id} 
                                            key={news.id} className="hover:text-red-600"
                                            onClick={() => updateFavoritesNews(news.id)}
                                        >
                                            {
                                                favoriteNews.includes(news.id) ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
                                                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                )
                                            }

                                        </div>
                                    </h6>
                                    <h2 className="m-1 text-xl font-bold tracking-tight text-blue-900 dark:text-white text-left">
                                        {news.title}
                                    </h2>
                                    <div className="m-1 h-24 text-wrap text-xs text-gray-600 text-left">
                                        {news.summary}
                                    </div>
                                    <div className=" flex justify-between m-1 mt-4 text-nowrap text-xs text-gray-600 text-left">
                                        <div className="justify-self-auto mr-0">{formatDate(news.date)}</div>
                                        {/* <TrendingNewsDetail data={news} /> */}
                                        <Link to={`${news.id}`}>
                                            <p className="underline hover:text-blue-600 transiton duration-400">
                                                Read more...
                                            </p>
                                        </Link>
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


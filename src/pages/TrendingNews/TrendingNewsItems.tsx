import { Link } from "react-router-dom";
import { useTrendingNewsState } from "../../context/trendingnews/context";
import { TrendingNews } from "../../context/trendingnews/types";
import { usePreferencesDispatch, usePreferencesState } from "../../context/preferences/context";
import { Team } from "../../context/teams/types";
import { useEffect } from "react";
import { fetchPreferences } from "../../context/preferences/actions";

export default function TrendingNewsItems(props: any) {
    let sportID = props.sportID;
    // console.log("Sport ID:---------->", sportID);
    // let trendingNewsDispatch = useTrendingNewsDispatch();
    // console.log("Trending News Dispatch:", trendingNewsDispatch);

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

    console.log("Preference 2->", preferences);
    useEffect(() => {
        fetchPreferences(preferencesDispatch);
    }, []);



    if (sportID == 0) {
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

    console.log("Selcted News 1:", selectedNews);
    if (selectedNews === undefined || selectedNews.length === 0) {
        return <span className="text-lg font-bold">No Trending News for Now!</span>
    }

    let selectedTabID = "tab" + sportID;
    let selectedTab = document.getElementById(selectedTabID) || undefined;
    if (selectedTab !== undefined) {
        selectedTab.className = "font-bold border-y-purple-950";
        console.log("selected tab:", selectedTab?.className);
    }
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
                                        {/* <Link onClick={(event) => alert(event.target.id)} >
                                            <svg id={news.id} xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M11.48 3.499a.562.562 0 0 1 1.04 0l2.125 5.111a.563.563 0 0 0 .475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 0 0-.182.557l1.285 5.385a.562.562 0 0 1-.84.61l-4.725-2.885a.562.562 0 0 0-.586 0L6.982 20.54a.562.562 0 0 1-.84-.61l1.285-5.386a.562.562 0 0 0-.182-.557l-4.204-3.602a.562.562 0 0 1 .321-.988l5.518-.442a.563.563 0 0 0 .475-.345L11.48 3.5Z" />
                                            </svg>

                                        </Link> */}
                                    </h6>
                                    <h2 className="m-1 text-xl font-bold tracking-tight text-blue-900 dark:text-white text-left">
                                        {news.title}
                                    </h2>
                                    <div className="m-1 h-24 text-wrap text-xs text-gray-600 text-left">
                                        {news.summary}
                                    </div>
                                    <div className=" flex justify-between m-1 mt-4 text-nowrap text-xs text-gray-600 text-left">
                                        {news.date}
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


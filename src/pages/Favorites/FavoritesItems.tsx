import { Link } from "react-router-dom";
import { TrendingNews } from "../../context/trendingnews/types";
import { useTrendingNewsState } from "../../context/trendingnews/context";

export default function FavoritesItems(props: any) {

    let sportID = props.sportID;
    if(sportID === undefined)
        {
            return <span></span>;
        }
    console.log("Selected Sport ID:", sportID);
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
            console.log("sportID->", sportID);
            return (tempNews.sport.id === Number(sportID))
        }
    );
    // console.log("Selcted News:", selectedNews);
    if (selectedNews === undefined || selectedNews.length === 0) {
        return <span className="text-lg font-bold">No Trending News for Now!</span>
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
                                <div className="w-full">
                                    <h4 className="m-1 font-bold tracking-tight text-blue-900 dark:text-white text-left">
                                        {news.title}
                                    </h4>
                                    <div className="m-1 h-24 text-wrap text-xs text-gray-600 text-left">
                                        {news.summary}
                                    </div>
                                    <div className=" flex-right justify-between m-1 mt-4 text-nowrap text-xs text-gray-600 text-right">
                                        {/* <TrendingNewsDetail data={news} /> */}
                                        <Link to={`${news.id}`}>
                                            <p className="underline hover:text-blue-600 transiton duration-400 text-right">
                                                Read more...
                                            </p>
                                        </Link>
                                    </div>
                                </div>

                            </div>
                        )

                    })
                }

            </div>
        </>
    );
}


import { Link } from "react-router-dom";
import { TrendingNews } from "../../context/trendingnews/types";
import { useTrendingNewsState } from "../../context/trendingnews/context";

export default function FavoritesItems(props: any) {
    // console.log("Props:", props);
    let sport = props.sport;
    let team = props.team;
    if (sport === undefined || team === undefined )  {
        return <span></span>;
    }
    // console.log("Selected Sport:", sport);
    // console.log("Selected Team:", team);
    
    let trendingNewsState: any = useTrendingNewsState();
    const { trendingNews, isLoading, isError, errorMessage } = trendingNewsState
    console.log("Trending News:", trendingNews, isLoading, isError, errorMessage);
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
    // console.log("Sport ->", sport);
    // console.log("Team ->", team);
    let selectedNews = trendingNews.filter(
        (tempNews: TrendingNews) => {
            // console.log("Temp News:", tempNews);
            // console.log("tempNews.sport.id ---", tempNews.sport.id)
            // console.log("tempNews.teams[0].id ---", tempNews.teams[0].id )
            // console.log("tempNews.teams[1].id ---", tempNews.teams[1].id )
            // if(tempNews.sport.id === Number(sport.id)){
            //     if(tempNews.teams.length!=0){
            //         if(tempNews.teams[0].id === team.id || tempNews.teams[1].id === team.id){
            //             return true;
            //         }
            //     }
            // }
            // return false;
            if(tempNews.sport.id !== sport.id )
                return false;
            let tempNewsTeam = tempNews.teams.filter(item =>{
                return (team.id === item.id);
            });
            if(tempNewsTeam.length === 0)
                return false;

            return true;
            // return ((tempNews.sport.id === Number(sport.id)) && tempNews.teams.length!=0 && (tempNews.teams[0].id === team.id || tempNews.teams[1].id === team.id))
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
                                    <div className="m-1 text-wrap text-xs text-gray-600 text-left">
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


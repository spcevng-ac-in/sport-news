import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useTrendingNewsDispatch } from "../../context/trendingnews/context";
import { fetchTrendingNews } from "../../context/trendingnews/action";

const TrendingNewsContainer = () => {
//   let { matchID } = useParams();
  const trendingNewsDispatch = useTrendingNewsDispatch();
  
  useEffect(() => {
    fetchTrendingNews(trendingNewsDispatch);
    
  }, [trendingNewsDispatch]);

  return <Outlet />;
};

export default TrendingNewsContainer;
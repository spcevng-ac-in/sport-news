import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useTrendingNewsDispatch } from "../../context/trendingnews/context";
import { fetchTrendingNews } from "../../context/trendingnews/action";
import { fetchTrendingNewsDetail } from "../../context/trendingnewsdetail/action";
import { useTrendingNewsDetailDispatch } from "../../context/trendingnewsdetail/context";

const TrendingNewsContainer = () => {
  let { newsID } = useParams();
  const trendingNewsDispatch = useTrendingNewsDispatch();
  const trendingNewsDetailDispatch = useTrendingNewsDetailDispatch();

  useEffect(() => {
    fetchTrendingNews(trendingNewsDispatch);
    if (newsID) fetchTrendingNewsDetail(trendingNewsDetailDispatch, newsID);

  }, [trendingNewsDispatch, trendingNewsDetailDispatch]);

  return <Outlet />;
};

export default TrendingNewsContainer;
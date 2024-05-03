import { Outlet } from "react-router-dom";
import { useMatchesDispatch } from "../../context/matches/context";
import { useEffect } from "react";
import { fetchMatches } from "../../context/matches/actions";
import { fetchTrendingNews } from "../../context/trendingnews/action";
import { useTrendingNewsDispatch } from "../../context/trendingnews/context";

const DashboardContainer = () => {
  const matchDispatch = useMatchesDispatch();
  const trendingNewsDispatch = useTrendingNewsDispatch();
  useEffect(() => {
    fetchMatches(matchDispatch);
    fetchTrendingNews(trendingNewsDispatch)
  }, [matchDispatch, trendingNewsDispatch]);

  return <Outlet />;
};

export default DashboardContainer;
import { Outlet } from "react-router-dom";
import { useMatchesDispatch } from "../../context/matches/context";
import { useEffect } from "react";
import { fetchMatches } from "../../context/matches/actions";
import { fetchTrendingNews } from "../../context/trendingnews/action";
import { useTrendingNewsDispatch } from "../../context/trendingnews/context";
import { useSportDispatch } from "../../context/sports/context";
import { fetchSports } from "../../context/sports/action";

const DashboardContainer = () => {

  const matchDispatch = useMatchesDispatch();
  const trendingNewsDispatch = useTrendingNewsDispatch();
  const sportsDispatch = useSportDispatch();
  useEffect(() => {
    fetchMatches(matchDispatch);
    fetchTrendingNews(trendingNewsDispatch);
    fetchSports(sportsDispatch);
  }, [matchDispatch, trendingNewsDispatch, sportsDispatch]);

  return <Outlet />;
};

export default DashboardContainer;
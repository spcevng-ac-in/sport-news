import { Outlet } from "react-router-dom";
import { useMatchesDispatch } from "../../context/matches/context";
import { useEffect } from "react";
import { fetchMatches } from "../../context/matches/actions";

const DashboardContainer = () => {
  const matchDispatch = useMatchesDispatch();
  useEffect(() => {
    fetchMatches(matchDispatch);
  }, [matchDispatch]);

  return <Outlet />;
};

export default DashboardContainer;
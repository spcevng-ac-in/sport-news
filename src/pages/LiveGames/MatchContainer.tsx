import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useMatcheDetailDispatch, useMatchesDispatch } from "../../context/matches/context";
import { fetchMatcheDetail, fetchMatches } from "../../context/matches/actions";

const MatchContainer = () => {
  let { matchID } = useParams();
  const matchDispatch = useMatchesDispatch();
  const matchDetailDispatch = useMatcheDetailDispatch();
  useEffect(() => {
    fetchMatches(matchDispatch);
    if(matchID) fetchMatcheDetail(matchDetailDispatch, matchID);
  }, [matchDispatch, matchDetailDispatch]);

  return <Outlet />;
};

export default MatchContainer;
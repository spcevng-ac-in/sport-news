import { useEffect } from "react";
import { Outlet, useParams } from "react-router-dom";
import { useMatchesDispatch } from "../../context/matches/context";
import { fetchMatches } from "../../context/matches/actions";
import { useMatcheDetailDispatch } from "../../context/matchdetail/context";
import { fetchMatcheDetail } from "../../context/matchdetail/actions";

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
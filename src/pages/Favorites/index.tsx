import { Suspense, useEffect } from "react";
import ErrorBoundary from "../../components/ErrorBoundary";
import FavoritesList from "./FavoritesList";
import Dropdown from "./DropDownSport";
import { useSportDispatch, useSportState } from "../../context/sports/context";
import { useTeamsDispatch, useTeamsState } from "../../context/teams/context";
import { fetchSports } from "../../context/sports/action";
import { fetchTeams } from "../../context/teams/actions";
import DropdownSport from "./DropDownSport";
import DropdownTeam from "./DropDownTeam";


const Favorites = () => {
  const sportsDispatch = useSportDispatch();
  let teamsDispatch = useTeamsDispatch();
  // console.log("Team Dispatch:", teamsDispatch);
  // fetchTeams(teamsDispatch);
  useEffect(() => {
		fetchSports(sportsDispatch);
    fetchTeams(teamsDispatch);
	}, []);

  let sportState: any = useSportState();
  const { sports, isLoading, isError, errorMessage } = sportState;
  console.log("Sports:", sports, isLoading, isError, errorMessage);
  console.log("Sport Length:", sports.length);


  let teamState: any = useTeamsState();
  
  const { teams, isLoading2, isError2, errorMessage2 } = teamState;
  // console.log("Teams:", teams, isLoading2, isError2, errorMessage2);
  // console.log("Teams Length:", teams.length);
  
  
  if (sports.length === 0 && isLoading) {
    return <span>Sports News Loading...</span>;
  }

  if (sports.length === 0) {
    return <span>Wait Sports News Loading...</span>;
  }

  if (isError) {
    return <span>Sports News Item Page -{errorMessage}</span>;
  }

  console.log("Sport Items:", (sports));


  if (teams.length === 0 && isLoading2) {
    return <span>Teams Loading...</span>;
  }

  if (teams.length === 0) {
    return <span>Wait Teams Loading...</span>;
  }

  if (isError) {
    return <span>Teams Item Page -{errorMessage}</span>;
  }

  console.log("Teams Items:", (teams));

  return (
    <>
      <div className="border-2">
        <div className="flex justify-start p-2">
          <h2 className="text-2xl font-medium tracking-tight text-slate-700">
            Favorites
          </h2>
        </div>
        <ErrorBoundary>
          <Suspense fallback={<div className="suspense-loading">Loading...</div>}>

            <div className="m-2">
            <DropdownSport options={sports} placeHolder="Select Sport" labelName="My Favorite Sport"
            />
            </div>
            <div className="m-2">
            <DropdownTeam options={teams} placeHolder="Select Team" labelName="My Favorite Team"
            />
            </div>
            <FavoritesList />

          </Suspense>
        </ErrorBoundary>
      </div>
    </>
  );
};


export default Favorites;
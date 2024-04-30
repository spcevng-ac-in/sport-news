import { Link, useParams } from "react-router-dom";
import { useMatcheDetailDispatch, useMatcheDetailState, useMatchesState } from "../../context/matches/context";
import { fetchMatcheDetail } from "../../context/matches/actions";
import { MatchDetail, Matches } from "../../context/matches/types";
import { useEffect, useState } from "react";
import { API_ENDPOINT } from "../../config/constants";


export default function MatchListItems(props: Matches) {
    const [scoreDict, setScoreDict] = useState<{}>({});
    
    const { id, name, location, sportName, endsAt, isRunning, teams} = props;
    // const [matchDetailData, setmatchDetailData] = useState<MatchDetail | null>(null);
    const fetchMatchDetailData = async (id: any) => {
        try {
          const response = await fetch(`${API_ENDPOINT}/matches/${id}`, {
            method: "GET",
            headers: {
              "Content-Type": "application/json",
            },
          });
          const data: MatchDetail = await response.json();
          if (data.isRunning) {
            // setmatchDetailData(data);
            console.log("data 2:", data);
          }

        } catch (error) {
          throw new Error(`Failed To Fetch Match Deatils ${id}`);
        }
      };
      useEffect(() => {
        if(matchID)
        void fetchMatchDetailData(matchID);
      }, [id]);


    const matchDetailState = useMatcheDetailState();
    const matchDetailDispatch = useMatcheDetailDispatch();
    let state: any = useMatchesState();
    const { matches, isLoading, isError, errorMessage } = state
    if (matches.length === 0 && isLoading) {
        return <span>Matches Loading...</span>;
    }

    if (isError) {
        return <span>{errorMessage}</span>;
    }


    console.log("Matches:", matches)
    let { matchID } = useParams();
    useEffect(() => {
        if (matchID) fetchMatcheDetail(matchDetailDispatch, matchID);
        console.log(matchDetailState);
    }, [matchDetailDispatch]);

    return (
        <>
            {matches.map((match: any) => {
                return (
                    <div>
                        <Link
                            key={match.id}
                            to={`${match.id}`}
                            className="min-w-40 m-1 block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                        >
                            <h5 className="tracking-tight text-gray-900 dark:text-white text-left">
                                {match.sportName}
                            </h5>
                            <div className="text-nowrap text-xs text-gray-600 text-left">
                                {match.location}
                            </div>
                            <br />

                            {
                            
                            match.teams.map((team: any) => {
                                let scoreDict: { [key: string]: any } = {};
                                let map = new Map();
                                let keys: string[] =[];
                                let values: string[] = [];
                                fetchMatchDetailData(match.id)
                                // console.log("match data", matchDetailData?.score);
                                let result: Promise<MatchDetail> = fetchMatcheDetail(matchDetailDispatch, match.id);
                                const data = result.then((resultData) =>
                                 { let scores: any =  resultData.score;
                                    //  console.log("Promise:",scores);
                                    //  let {key : value} = scores[0]; 
                                    // let scoreDict = {};
                                    let i=0;
                                     for (const key in scores) {
                                        // console.log(`${key}: ${scores[key]}`);
                                        scoreDict[`${key}`] = `${scores[key]}`;
                                        map.set(key, scores[key]);
                                        keys[i] = key;
                                        values[i] = scores[key];
                                        i++;

                                    } 
                                        //  (resultData.score).map((score: any) =>{
                                    //     console.log("Score:", score);
                                    //     return score;
                                    //  });
                                 });
                                // const matchDetailState = useMatcheDetailState();
                                // console.log("matchDetailState:", matchDetailState);
                                // console.log("Keys:", keys);
                                // console.log("Values:", values);
                                // console.log("Map:", map);
                                // console.log("Score:", scoreDict);
                                // console.log("Map value:", map.get('Thunderbolts'));
                                // console.log("Data:", scoreDict[team.name]);
                                // console.log("Team name: '" +  team.name + "'");
                                return (
                                    <div>
                                        <div className="text-purple-950 text-left text-sm" >{team.name}</div>
                                        <div>{scoreDict[team.name]}</div>
                                        <div>{keys}</div>
                                    </div>
                                )
                            }
                            )}
                        </Link>
                    </div>
                )
            }
            )}



        </>
    );
}


import { useMatchesState } from "../../context/matches/context";
import { Matches } from "../../context/matches/types";
import { useEffect } from "react";
import { useMatcheDetailDispatch, useMatcheDetailState } from "../../context/matchdetail/context";
import { fetchMatcheDetail } from "../../context/matchdetail/actions";
import { MatchDetail } from "../../context/matchdetail/types";


export default function MatchListItems() {

    const matchDetailState: any = useMatcheDetailState();
    const matchDetailDispatch = useMatcheDetailDispatch();

    let state: any = useMatchesState();
    const { matches, isLoading, isError, errorMessage } = state
    if (matches.length === 0 && isLoading) {
        return <span>Matches Loading...</span>;
    }

    if (isError) {
        return <span>{errorMessage}</span>;
    }

    // console.log("Matches:", matches);
    const { matchDetail, isLoading2, isError2, errorMessage2 } = matchDetailState;
    // console.log("All Match Detail:", matchDetail);

    let selectedMatchs = matches.filter(
        (match: Matches) => {
            return (match.isRunning === true)
        }
    );
const updateScore = async (matchID: number) => {
    // const matchDetailDispatch = useMatcheDetailDispatch();
    console.log("Update score for:", matchID);
    fetchMatcheDetail(matchDetailDispatch, matchID);
    let targetedMatchDetail: MatchDetail = matchDetail.filter((matchDetail:MatchDetail) =>{
        return (matchDetail.id === matchID) 
    })[0];
    console.log(targetedMatchDetail.score);
}
    return (
        <>
            {
                selectedMatchs.map((match: any) => {
                    let keys: string[] = []
                    let values: number[] = []

                    useEffect(() => {
                        if (match.id) fetchMatcheDetail(matchDetailDispatch, match.id);
                    }, [match.id, matchDetailDispatch]);

                    // console.log("Match Details --->", matchDetail);
                    let matchScore: MatchDetail[] = matchDetail.filter((r: MatchDetail) => {
                        return r.id == match.id;
                    });
                    // console.log("matchScore->", matchScore[0]);

                    Object.keys(matchScore[0] || {}).map((key) => {
                        if (matchScore[0]) {
                            let md: MatchDetail = matchScore[0];
                            if (key === 'score') {

                                let currentMatchScore = md.score;
                                // console.log("Value for ", key, " -> ", currentMatchScore);

                                Object.keys(currentMatchScore || {}).map((keyScore, valueScore) => {
                                    if (currentMatchScore) {
                                        console.log("Team Name:", keyScore);
                                        keys.push(keyScore);
                                        console.log("Team Score:", currentMatchScore[keyScore]);
                                        values.push(currentMatchScore[keyScore]);
                                    }
                                });
                            }
                        }
                    });
                    return (
                        <div>
                            <div
                                key={match.id}
                                // to={`${match.id}`}
                                className="min-w-60 m-1 block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700" >
                                <h5 className="flex justify-between tracking-tight text-gray-900 dark:text-white text-left">
                                    {match.sportName}
                                    <div 
                                    // to={match.id} 
                                    key={match.id} className="hover:text-red-600"
                                    onClick={() => updateScore(match.id)}
                                    >
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="w-6 h-6">
                                            <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                        </svg>
                                    </div>

                                </h5>
                                <div className="text-nowrap text-xs text-gray-600 text-left">
                                    {match.location}
                                </div>
                                <br />

                                <div className="flex justify-between space-y-0">
                                    <div className="justify-self-auto text-purple-950 text-left text-sm" >{keys[0]}</div>
                                    <div className="justify-self-auto mr-1">{values[0]}</div>
                                </div>

                                <div className="flex justify-between space-y-0">
                                    <div className="text-purple-950 text-left text-sm" >{keys[1]}</div>
                                    <div className="justify-self-auto mr-1">{values[1]}</div>
                                </div>
                            </div>

                        </div >
                    )
                }
                )}
        </>
    );
}


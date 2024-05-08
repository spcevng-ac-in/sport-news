import { Link } from "react-router-dom";
import { useMatchesState } from "../../context/matches/context";
import { Matches } from "../../context/matches/types";
import { useEffect } from "react";
import { useMatcheDetailDispatch, useMatcheDetailState } from "../../context/matchdetail/context";
import { fetchMatcheDetail } from "../../context/matchdetail/actions";
import { MatchDetail } from "../../context/matchdetail/types";

export default function MatchListItems(props: Matches) {

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
    return (
        <> 
            {
                matches.map((match: any) => {
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
                                        // console.log("Team Name:", keyScore);
                                        keys.push(keyScore);
                                        // console.log("Team Score:", valueScore);
                                        values.push(valueScore);
                                    }


                                });
                            }
                        }
                    });


                    return (
                        <div>
                            <Link
                                key={match.id}
                                to={`${match.id}`}
                                className="min-w-60 m-1 block p-2 bg-white border border-gray-200 rounded-lg shadow hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700"
                            >
                                <h5 className="tracking-tight text-gray-900 dark:text-white text-left">
                                    {match.sportName}
                                </h5>
                                <div className="text-nowrap text-xs text-gray-600 text-left">
                                    {match.location}
                                </div>
                                <br />
                                <div className="flex justify-between">
                                    <div className="justify-self-auto text-purple-950 text-left text-sm" >{keys[0]}</div>
                                    <div className="justify-self-auto mr-0">{values[0]}</div>
                                </div>
                                <br />
                                <div className="flex justify-between">
                                    <div className="text-purple-950 text-left text-sm" >{keys[1]}</div>
                                    <div>{values[1]}</div>
                                </div>

                            </Link >
                        </div >
                    )
                }
                )}
        
        </>
    );
}


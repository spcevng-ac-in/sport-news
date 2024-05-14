import { useMatchesState } from "../../context/matches/context";
import { Matches } from "../../context/matches/types";
import { useEffect, useState } from "react";
import { useMatcheDetailDispatch, useMatcheDetailState } from "../../context/matchdetail/context";
import { fetchMatcheDetail } from "../../context/matchdetail/actions";
import { MatchDetail, Score } from "../../context/matchdetail/types";
import { useNavigate } from "react-router-dom";


export default function MatchListItems() {
    let navigate = useNavigate();
    let [favoriteMatches, SetFavoriteMatches] = useState<number[]>([]);
    const matchDetailState: any = useMatcheDetailState();
    const { matchDetail, isLoading2, isError2, errorMessage2 } = matchDetailState;
    console.log("Match Detail:", matchDetail, isLoading2, isError2, errorMessage2);

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

    let selectedMatchs = matches.filter(
        (match: Matches) => {
            return (match.isRunning === true)
        }
    );
    const updateScore = async (matchID: number) => {
        // const matchDetailDispatch = useMatcheDetailDispatch();
        console.log("Update score for:", matchID);
        fetchMatcheDetail(matchDetailDispatch, matchID);
        let targetedMatchDetail: MatchDetail = matchDetail.filter((matchDetail: MatchDetail) => {
            return (matchDetail.id === matchID)
        })[0];
        console.log(targetedMatchDetail.score);
    };

    let tempFavoriteMatches = localStorage.getItem("favoriteMatches");
    if (tempFavoriteMatches) {
        favoriteMatches = JSON.parse(tempFavoriteMatches);
    }

    const updateFavorites = (matchID: number) => {
        console.log("Before Favorite Matches State", favoriteMatches);
        if (favoriteMatches) {
            // const updateFavoriteMatches = JSON.parse(favoriteMatches);
            // console.log("Before Favorite Matches", updateFavoriteMatches);
            if (favoriteMatches.includes(matchID)) {
                const index = favoriteMatches.indexOf(matchID);
                index > -1 ? favoriteMatches.splice(index, 1) : "";
            } else {
                favoriteMatches.push(matchID);
            }
            localStorage.setItem("favoriteMatches", JSON.stringify(favoriteMatches));
            SetFavoriteMatches(favoriteMatches);
            console.log("After Favorite Matches", favoriteMatches);
        } else {
            console.log("First Match ID: ", matchID);
            localStorage.setItem("favoriteMatches", JSON.stringify([matchID]));
            SetFavoriteMatches([matchID]);
        }
        console.log("Favorite Matches State", favoriteMatches);
    }
    return (
        <>
            {
                selectedMatchs.map((match: any) => {
                    let keys: string[] = []
                    let values: string[] = []
                    // console.log("All Match Detail:", matchDetail);
                    try {
                        useEffect(() => {
                            if (match.id) fetchMatcheDetail(matchDetailDispatch, match.id);
                        }, [match.id, matchDetailDispatch]);
                    } catch (error) {
                        navigate("/logout");
                    }
                    // console.log("Match Details --->", matchDetail);
                    let matchScore: MatchDetail[] = matchDetail.filter((r: MatchDetail) => {
                        return r.id == match.id;
                    });
                    // console.log("matchScore->", matchScore[0]);

                    Object.keys(matchScore[0] || {}).map((key) => {
                        if (matchScore[0]) {
                            let md: MatchDetail = matchScore[0];
                            if (key === 'score') {

                                let currentMatchScore: Score = md.score;
                                // console.log("Value for ", key, " -> ", currentMatchScore);

                                Object.keys(currentMatchScore || {}).map((keyScore: string) => {
                                    if (currentMatchScore) {
                                        // console.log("Team Name:", keyScore);
                                        keys.push(keyScore);
                                        // console.log("Team Score:", currentMatchScore[keyScore]);
                                        values.push((currentMatchScore[keyScore as keyof Score]));
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
                                    <div className="flex">
                                        <div
                                            // to={match.id} 
                                            key={match.id} className="hover:text-red-600 mr-2"
                                            onClick={() => updateScore(match.id)}
                                        >
                                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                <path stroke-linecap="round" stroke-linejoin="round" d="M16.023 9.348h4.992v-.001M2.985 19.644v-4.992m0 0h4.992m-4.993 0 3.181 3.183a8.25 8.25 0 0 0 13.803-3.7M4.031 9.865a8.25 8.25 0 0 1 13.803-3.7l3.181 3.182m0-4.991v4.99" />
                                            </svg>
                                        </div>

                                        <div
                                            // to={match.id} 
                                            key={match.id} className="hover:text-red-600"
                                            onClick={() => updateFavorites(match.id)}
                                        >
                                            {
                                                favoriteMatches.includes(match.id) ? (
                                                    <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="red" className="w-6 h-6">
                                                        <path d="m11.645 20.91-.007-.003-.022-.012a15.247 15.247 0 0 1-.383-.218 25.18 25.18 0 0 1-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0 1 12 5.052 5.5 5.5 0 0 1 16.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 0 1-4.244 3.17 15.247 15.247 0 0 1-.383.219l-.022.012-.007.004-.003.001a.752.752 0 0 1-.704 0l-.003-.001Z" />
                                                    </svg>
                                                ) : (
                                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="w-6 h-6">
                                                        <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                                                    </svg>
                                                )
                                            }

                                        </div>
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
                            </div >

                        </div >
                    )
                }
                )}
        </>
    );
}


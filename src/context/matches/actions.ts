import { MatchDetailDispatch, MatchDispatch, MatcheAvailableAction, MatcheDetail, Matches } from "./types";
import { API_ENDPOINT } from "../../config/constants";
import { Console } from "console";

export const fetchMatches = async (
    dispatch: MatchDispatch,
) => {
    try {
        dispatch({ type: MatcheAvailableAction.FETCH_MATCH_REQUEST })
        const res = await fetch(`${API_ENDPOINT}/matches`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!res.ok) {
            throw new Error("Failed to Fetch Matches")
        }
        const data = await res.json();
        
//         data.matches.forEach((match: Matches, index: number) => {
//             console.log("Match:::", match);
//             let matchDetail  = fetchDirectMatcheDetail(match.id);
//                 data.matches[index].matchDetail = matchDetail;
// console.log("data.matches[index].matchDetail", data.matches[index].matchDetail);
//            }); 

        dispatch({
            type: MatcheAvailableAction.FETCH_MATCH_SUCCESS,
            payload: data.matches
        })
           
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        dispatch({
            type: MatcheAvailableAction.FETCH_MATCH_FAILURE,
            payload: "Unable to Load Matches"
        })
    }
}

export const fetchMatcheDetail : any = async (
    dispatch: MatchDetailDispatch,
    matchID: string
)=> {
    try {
        dispatch({ type: MatcheAvailableAction.FETCH_MATCH_DETAIL_REQUEST })
        const res = await fetch(`${API_ENDPOINT}/matches/${matchID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
        if (!res.ok) {
            throw new Error("Failed to Fetch Matche Detail")
        }
        const data = await res.json();
        dispatch({
            type: MatcheAvailableAction.FETCH_MATCH_DETAIL_SUCCESS,
            payload: data.MatcheDetail
        })
        return data;
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        dispatch({
            type: MatcheAvailableAction.FETCH_MATCH_DETAIL_FAILURE,
            payload: "Unable to Load Matche Detail"
        })
    }
}



const fetchDirectMatcheDetail : any =  (matchID: string)=> {
    try {
        const res : Promise<any> = fetch(`${API_ENDPOINT}/matches/${matchID}`, {
            method: "GET",
            headers: {
                "Content-Type": "application/json",
            }
        })
       
        const data = res.then((resultData) => resultData);
            // { 
            //     // console.log("Result Data:", resultData);
            // });
        
        return data;
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        
    }
}
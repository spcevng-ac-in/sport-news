

import { useFavoriteSportState } from "./context";
import { FavoritesAction, FavoritesDispatch } from "./types";

export const updateSportSelection = async (
    dispatch: FavoritesDispatch, sport: any
) => {
    const favoritesState = useFavoriteSportState();
	console.log("Favorite State:->", favoritesState);
	// let navigate = useNavigate();
    try {
        
        dispatch({
            type: FavoritesAction.FETCH_FAVORITES_SUCCESS,
            payload: sport
        })
        console.log("Action: Favorite:",favoritesState );
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        // navigate("/signin");
        
    }
}


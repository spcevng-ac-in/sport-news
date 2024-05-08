
import { useFavoritesState } from "./context";
import { FavoritesAction, FavoritesDispatch } from "./types";

export const updateSportSelection = async (
    dispatch: FavoritesDispatch, id: any, name:any
) => {
    const favoritesState = useFavoritesState();
	console.log("Favorite State:->", favoritesState);
	
    try {
        
        dispatch({
            type: FavoritesAction.FETCH_FAVORITES_SUCCESS,
            payload: {id, name}
        })
        console.log("Action: Favorite:",favoritesState );
    } catch (error) {
        console.log(`Operation Failed:${error}`)
        
    }
}

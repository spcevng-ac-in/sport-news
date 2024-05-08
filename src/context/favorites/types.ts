export interface IDropdownOption {
    id: string | number;
    name: string | number;
}

export interface IDropdownProps {
    name?: string;
    options: IDropdownOption[];
    required?: boolean;
    tabIndex?: number;
    className?: string;
    type?: string;
    placeHolder?: string;
    labelName?: string;
}

export interface FavoriteSportState {
    sports: IDropdownOption[]
}

export const initialFavoriteSportState: FavoriteSportState = {
    sports: []
};



export enum FavoritesAction {
    FETCH_FAVORITES_REQUEST = "FETCH_FAVORITES_REQUEST",
    FETCH_FAVORITES_SUCCESS = "FETCH_FAVORITES_SUCCESS",
    FETCH_FAVORITES_FAILURE = "FETCH_FAVORITES_FAILURE",
};


export type FavoritesActions =
    | { type: FavoritesAction.FETCH_FAVORITES_REQUEST }
    | { type: FavoritesAction.FETCH_FAVORITES_SUCCESS, payload: IDropdownOption }
    | { type: FavoritesAction.FETCH_FAVORITES_FAILURE, payload: string }

export type FavoritesDispatch = React.Dispatch<FavoritesActions>

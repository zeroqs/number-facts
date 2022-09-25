import { createSlice} from '@reduxjs/toolkit'


export interface FavoriteI {
    isFavorite: boolean;
    favorites: string[],

}

const initialState: FavoriteI = {
    isFavorite: false,
    favorites : [],
}

function addFavorites({state,action}:any) {
    state.favorites.push(action.payload)
}
function removeFavorites({state,action}:any) {
    state.favorites = state.favorites.filter((item:any) => item !== action.payload)
}

export const favoriteSlice = createSlice({
    name: 'favorite',
    initialState,
    reducers: {
        setIsFavorite(state) {
            state.isFavorite = !state.isFavorite
        },
        favorite(state,action) {
            if (state.isFavorite){
                addFavorites({state,action})
            } else {
                removeFavorites({state,action})
            }
        }

    },

})

export const { setIsFavorite,favorite } = favoriteSlice.actions

export default favoriteSlice.reducer




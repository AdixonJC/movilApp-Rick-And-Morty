import { createSlice } from "@reduxjs/toolkit";
import getCharacters from "../../../utils/apis/getCharacters";



export const characterSlices = createSlice({
    name: 'characters',
    initialState: {
        characters: []
    },
    reducers: {
       setCharacters: (state, actions) => {
        state.characters = actions.payload
       }
    }
})

export const { setCharacters } = characterSlices.actions

export default characterSlices.reducer

export const getAllCharacters = () => (dispatch) => {
  getCharacters()
  .then(response => {
       dispatch(setCharacters(response));
    })
  .catch(err => console.log(err))
}
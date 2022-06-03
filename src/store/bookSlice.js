import { createSlice } from "@reduxjs/toolkit";

const initState = {
    books: []
}

const bookSlice = createSlice({
    name: 'books',
    initialState: initState,
    reducers: {
        createBook(state, action) {

        }
    }
})

export const bookActions = bookSlice.actions
export default bookSlice
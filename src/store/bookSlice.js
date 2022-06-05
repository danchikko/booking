import { createSlice } from "@reduxjs/toolkit";

const initState = {
    books: [],
    addBook: false
}

const bookSlice = createSlice({
    name: 'books',
    initialState: initState,
    reducers: {
        createBook(state, action) {
            state.books.push(action.payload)
        }
    }
})

export const bookActions = bookSlice.actions
export default bookSlice
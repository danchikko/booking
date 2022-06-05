import { createSlice } from "@reduxjs/toolkit";

const initState = {
    books: []
}

const bookSlice = createSlice({
    name: 'books',
    initialState: initState,
    reducers: {
        createBook(state, action) {
            state.books.push({
                book: action.payload.name,
                id: new Date().toLocaleString(),
                complete: false,
                text: action.payload.text,
                avtor: action.payload.avtour,
                img: action.payload.img,
            })
        }
    }
})

export const bookActions = bookSlice.actions
export default bookSlice
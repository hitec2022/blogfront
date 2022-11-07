import { configureStore } from '@reduxjs/toolkit'
import boardSlice from '../features/board/boardSlice'

export default configureStore({
    reducer: {
        board: boardSlice
    }
})
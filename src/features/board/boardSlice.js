import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const initialState = {
    boardList: [],
    listStat: 'idle',
    currentBoard: null,
    error: null
}

export const fetchBoardList = createAsyncThunk('board/boardList', async () => {
    const response = await axios.get('http://localhost:8899/boards');
    return response.data;
})

export const fetchBoard = createAsyncThunk('board/board', async (id) => {
    const response = await axios.get('http://localhost:8899/board/'.concat(id));
    return response.data;
})

export const addBoard = createAsyncThunk('board/addBoard', async (boardObj) => {
    const token = boardObj.token;
    const board = { title: boardObj.title, content: boardObj.content}
    const response = await axios.post('http://localhost:8899/board', board, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    
    return response.data;
})

export const editBoard = createAsyncThunk('board/editBoard', async (boardObj) => {
    const token = boardObj.token;
    const board = { id: boardObj.id, title: boardObj.title, content: boardObj.content}
    const response = await axios.put('http://localhost:8899/board', board, {
        headers: {
            'Authorization': `Bearer ${token}`
        }
    });
    return response.data;
})

const boardSlice = createSlice({
    name: 'board',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchBoardList.fulfilled, (state, action) => {
                state.boardList = action.payload;
                state.listStat = 'successed';
            })
            .addCase(fetchBoard.fulfilled, (state, action) => {
                state.currentBoard = action.payload;
            })
            .addCase(addBoard.fulfilled, (state, action) => {
                state.currentBoard = action.payload;
                state.listStat = 'idle';
            })
            .addCase(editBoard.fulfilled, (state, action) => {
                state.currentBoard = action.payload;
                state.listStat = 'idle';
            })
    }
})

export const { postUpdated } = boardSlice.actions;

export default boardSlice.reducer
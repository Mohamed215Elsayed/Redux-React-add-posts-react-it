import { createSlice } from "@reduxjs/toolkit";

const initialState = [
    { id: '0', name: 'Mohamed' },
    { id: '1', name: 'rana' },
    { id: '2', name: 'wafaa' }
];

const usersSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {}
});

export const selectAllUsers = (state) => state.users;
export default usersSlice.reducer;
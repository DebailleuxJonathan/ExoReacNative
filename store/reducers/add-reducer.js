import {createSlice} from '@reduxjs/toolkit';

export const addTodoSlice = createSlice({
  name: 'addTodo',
  initialState: {
    user: {},
  },
  reducers: {
    setUser: (state, action) => {
      state.user = action.payload;
    },
  },
});

export const {setUser, test} = addTodoSlice.actions;

export default addTodoSlice.reducer;

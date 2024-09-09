import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

/**
 * 2초 지연을 시키는 함수입니다 (비동기 작업).
 */
import { waitTwoSeconds } from '../../utils';

export const __addToDo = createAsyncThunk(
  "__addToDo",
  async (todo, thunkAPI) => {
    await waitTwoSeconds();
    return todo;
  }
);

export const __deleteTodo = createAsyncThunk(
  "__deleteToDo",
  async (id, thunkAPI) => {
    await waitTwoSeconds();
    return id;
  }
);

const initialState = {
  list: [],
};


const todosSlice = createSlice({
  name: "todos",
  initialState,
  reducers: {
    // 여기 일반 리듀서는 사실상 공백으로 둬도 됨 없어도 됨..
    addTodo: (state, action) => {},
    deleteTodo: (state, action) => {},
  },
  extraReducers: {
    [__addToDo.fulfilled]: (state, { payload }) => {
      state.list.push(payload);
    },
    [__deleteTodo.fulfilled]: (state, { payload }) => {
      state.list = state.list.filter((todo) => todo.id !== payload);
    },
  },
});

export const { addTodo, deleteTodo } = todosSlice.actions;
export default todosSlice.reducer;

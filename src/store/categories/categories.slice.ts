import { createSlice } from '@reduxjs/toolkit';
import { CategoriesName } from './categories.type';

const initialState = CategoriesName.All;

export const categoriesSlice = createSlice({
  name: 'category',
  initialState,
  reducers: {
    // PayloadAction은 Redux Toolkit에서 사용되는 TypeScript 타입으로
    // 액션 객체의 타입을 정의할 때 사용된다.
    //action 객체가 CategoriesName 타입의 payload를 가질 것이라는 것을 나타낸다.
    setActiveCategory: (_, action) => action.payload,
  },
});

export const { setActiveCategory } = categoriesSlice.actions;
export default categoriesSlice.reducer;

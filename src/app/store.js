import { configureStore } from '@reduxjs/toolkit';
import counterReducer from '../features/counter/counterSlice';
import searchReducer from '../features/search/searchSlice';
import { postsApi } from '../features/posts/postsSlice';

export const store = configureStore({
  reducer: {
    counter: counterReducer,
    search: searchReducer,
    [postsApi.reducerPath]: postsApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware().concat(postsApi.middleware),
});

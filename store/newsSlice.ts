import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchNewsData } from '@/utils/api';

export const getNews = createAsyncThunk('news/getNews', async () => {
  return await fetchNewsData();
});

const newsSlice = createSlice({
  name: 'news',
  initialState: { headlines: [], status: 'idle', error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getNews.pending, (state) => { state.status = 'loading'; })
      .addCase(getNews.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.headlines = action.payload;
      })
      .addCase(getNews.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An unknown error occurred';
      });
  },
});

export default newsSlice.reducer;
import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchWeatherData } from '@/utils/api';

export const getWeather = createAsyncThunk('weather/getWeather', async () => {
  return await fetchWeatherData(['New York', 'London', 'Tokyo']);
});

const weatherSlice = createSlice({
  name: 'weather',
  initialState: { data: {}, status: 'idle', error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getWeather.pending, (state) => { state.status = 'loading'; })
      .addCase(getWeather.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getWeather.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message || null;
      });
  },
});

export default weatherSlice.reducer;
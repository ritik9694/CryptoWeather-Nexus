import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import { fetchCryptoData } from '@/utils/api';

export const getCryptos = createAsyncThunk('crypto/getCryptos', async () => {
  return await fetchCryptoData(['bitcoin', 'ethereum', 'solana']);
});

const cryptoSlice = createSlice({
  name: 'crypto',
  initialState: { data: {}, status: 'idle', error: null as string | null },
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(getCryptos.pending, (state) => { state.status = 'loading'; })
      .addCase(getCryptos.fulfilled, (state, action) => {
        state.status = 'succeeded';
        state.data = action.payload;
      })
      .addCase(getCryptos.rejected, (state, action) => {
        state.status = 'failed';
        state.error = action.error.message ?? 'An unknown error occurred';
      });
  },
});

export default cryptoSlice.reducer;
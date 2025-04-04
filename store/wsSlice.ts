import { createSlice } from '@reduxjs/toolkit';

const wsSlice = createSlice({
  name: 'websocket',
  initialState: { alerts: [] } as { alerts: any[] },
  reducers: {
    receiveAlert(state, action) {
      state.alerts.push(action.payload);
    },
  },
});

export const { receiveAlert } = wsSlice.actions;
export default wsSlice.reducer;
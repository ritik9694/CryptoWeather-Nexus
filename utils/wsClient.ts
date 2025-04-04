import { store } from '@/store/store';
import { receiveAlert } from '@/store/wsSlice';

export function initWebSocket() {
  const ws = new WebSocket('wss://ws.coincap.io/prices?assets=bitcoin,ethereum');

  ws.onmessage = (msg) => {
    const data = JSON.parse(msg.data);
    for (const [key, value] of Object.entries(data)) {
      store.dispatch(receiveAlert({ type: 'price_alert', asset: key, price: value }));
    }
  };

  return ws;
}
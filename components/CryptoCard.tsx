'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getCryptos } from '@/store/cryptoSlice';

export default function CryptoSection() {
  const dispatch = useAppDispatch();
  const crypto = useAppSelector((state) => state.crypto);

  useEffect(() => {
    dispatch(getCryptos());
  }, [dispatch]);

  return (
    <div className="p-4 border rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Cryptocurrencies</h2>
      {Object.entries(crypto.data).map(([coin, data]: any) => (
        <div key={coin} className="mb-2">
          <p className="font-medium capitalize">{coin}</p>
          <p>${data.usd} USD ({data.usd_24h_change?.toFixed(2)}%)</p>
        </div>
      ))}
    </div>
  );
}
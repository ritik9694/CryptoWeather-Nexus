'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getWeather } from '@/store/weatherSlice';

export default function WeatherSection() {
  const dispatch = useAppDispatch();
  const weather = useAppSelector((state) => state.weather);

  useEffect(() => {
    dispatch(getWeather());
  }, [dispatch]);

  if (weather.status === 'failed') {
    return <div className="text-red-600 p-4">⚠️ Failed to load weather data.</div>;
  }

  return (
    <div className="p-4 border rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Weather</h2>
      {Object.entries(weather.data).map(([city, data]: any) => (
        <div key={city} className="mb-2">
          <p className="font-medium">{city}</p>
          {data?.main && data?.weather ? (
            <p>{data.main.temp}°C, {data.weather[0].description}</p>
          ) : (
            <p>Loading...</p>
          )}
        </div>
      ))}
    </div>
  );
}

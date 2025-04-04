'use client';
import { useEffect } from 'react';
import { useAppDispatch, useAppSelector } from '@/store/hooks';
import { getNews } from '@/store/newsSlice';

export default function NewsSection() {
  const dispatch = useAppDispatch();
  const news = useAppSelector((state) => state.news);

  useEffect(() => {
    dispatch(getNews());
  }, [dispatch]);

  return (
    <div className="p-4 border rounded-xl shadow">
      <h2 className="text-lg font-semibold mb-2">Crypto News</h2>
      {news.headlines.map((item: any, idx: number) => (
        <div key={idx} className="mb-2">
          <a href={item.link} target="_blank" rel="noopener noreferrer" className="text-blue-600 hover:underline">
            {item.title}
          </a>
        </div>
      ))}
    </div>
  );
}
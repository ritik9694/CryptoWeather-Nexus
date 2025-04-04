'use client';
import { Toaster as Sonner } from 'sonner';
export function Toaster() {
  return <Sonner richColors position="top-right" />;
}

// File: components/NavBar.tsx
export default function NavBar() {
  return (
    <nav className="w-full bg-gray-900 text-white p-4">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <h1 className="text-xl font-bold">CryptoWeather</h1>
      </div>
    </nav>
  );
}

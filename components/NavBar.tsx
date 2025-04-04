'use client';
import Link from 'next/link';

export default function NavBar() {
  return (
    <nav className="w-full bg-gray-800 text-white py-4 px-6 shadow-md">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/dashboard">
          <span className="text-xl font-bold hover:text-blue-300">CryptoWeather Nexus</span>
        </Link>
        <div className="space-x-4">
          <Link href="/dashboard" className="hover:underline">Dashboard</Link>
        </div>
      </div>
    </nav>
  );
}
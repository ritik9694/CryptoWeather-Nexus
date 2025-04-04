import WeatherSection from '@/components/WeatherCard';
import CryptoSection from '@/components/CryptoCard';
import NewsSection from '@/components/NewsItem';

export default function DashboardPage() {
  return (
    <div className="p-4 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
      <WeatherSection />
      <CryptoSection />
      <NewsSection />
    </div>
  );
}
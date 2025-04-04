export default function CityDetailPage({ params }: { params: { city: string } }) {
    return <div className="p-4">Weather details for: <strong>{params.city}</strong></div>;
  }
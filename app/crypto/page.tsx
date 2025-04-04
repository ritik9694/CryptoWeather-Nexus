export default function CoinDetailPage({ params }: { params: { coin: string } }) {
    return <div className="p-4">Crypto details for: <strong>{params.coin}</strong></div>;
  }
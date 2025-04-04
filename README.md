# 🌐 CryptoWeather Nexus

A modern, multi-page dashboard displaying live **weather**, **cryptocurrency prices**, and **real-time notifications** using WebSocket. Built with **Next.js 13 App Router**, **Redux Toolkit**, **Tailwind CSS**, and real-world API integrations.

---

## 📦 Tech Stack

- **Next.js 13+** (App Router)
- **React** with Hooks
- **Redux Toolkit** with Thunk
- **Tailwind CSS**
- **WebSocket (CoinCap)**
- **OpenWeatherMap, CoinGecko, NewsData.io**

---

## 🧩 Features

### 📊 Dashboard `/dashboard`
- **Weather Section**: Shows temperature, humidity, and condition for New York, London, and Tokyo.
- **Crypto Section**: Displays BTC, ETH, and SOL prices with 24h changes and market cap.
- **News Section**: Latest 5 crypto-related headlines from NewsData.io.

### 📈 Detail Pages
- `/crypto/[coin]`: Extended price metrics (WIP)
- `/weather/[city]`: Historical trends and charts (WIP)

### 🔔 Real-Time Notifications
- Live crypto price updates via **CoinCap WebSocket**
- Simulated weather alerts using in-app mock dispatch
- Toast notifications with clear labels (`price_alert`, `weather_alert`)

### ⭐ Favorites (Planned)
- Save favorite cities or coins
- Highlight them in dashboard

---

## 🌐 API Integrations

| Feature      | API Used                 | Auth Required |
|--------------|---------------------------|----------------|
| Weather      | [OpenWeatherMap](https://openweathermap.org/) | ✅ Yes |
| Crypto       | [CoinGecko](https://www.coingecko.com/)       | ❌ No |
| News         | [NewsData.io](https://newsdata.io/)           | ✅ Yes |
| Real-Time    | [CoinCap WS](https://docs.coincap.io/)        | ❌ No |

---

## 🛠 Installation

```bash
git clone (https://github.com/ritik9694/CryptoWeather-Nexus)
cd CryptoWeather-Nexus

npm install

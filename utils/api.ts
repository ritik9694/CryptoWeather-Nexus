export async function fetchWeatherData(cities: string[]) {
    const apiKey = process.env.NEXT_PUBLIC_WEATHER_API;
    const results: Record<string, any> = {};
  
    for (const city of cities) {
      try {
        const res = await fetch(
          `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
        );
        results[city] = await res.json();
      } catch (error) {
        console.error(`Failed to fetch weather for ${city}`, error);
        results[city] = null;
      }
    }
  
    return results;
  }
  
const WINDY_API_KEY = 'IE9u5jPHqXedtHCZHoRHwWhad03TSPTx';

export const getWeatherData = async (latitude, longitude) => {
  const requestBody = {
    lat: latitude,
    lon: longitude,
    model: 'gfs',
    parameters: ['wind', 'dewpoint', 'rh', 'pressure', 'precip'],
    levels: ['surface'],
    key: WINDY_API_KEY
  };

  try {
    const response = await fetch('https://api.windy.com/api/point-forecast/v2', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(requestBody)
    });

    if (!response.ok) {
      console.error('Failed to fetch weather data', response.statusText);
      throw new Error('Failed to fetch weather data');
    }

    const data = await response.json();
    return data;
  } catch (error) {
    console.error('Error fetching weather data', error);
    throw error;
  }
};

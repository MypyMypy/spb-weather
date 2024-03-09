import type { ApiConfigI, CityObjectI } from './types';

export async function getDataWeatherByCity(
  config: ApiConfigI,
  cityObject: CityObjectI
) {
  const cityName = cityObject.cityName;
  const cityWeatherData = await fetch(
    `${config.baseUrl}?lat=${cityObject.lat}&lon=${cityObject.lon}&appid=${config.apiKey}`
  ).then((data) => data.json());

  return { cityName, cityWeatherData };
}

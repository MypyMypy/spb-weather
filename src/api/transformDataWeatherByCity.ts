import { constantsMap } from './constants';
import { weatherItemI } from './types';

export function transformDataWeatherByCity(data: weatherItemI) {
  const date = new Date(data.dt * 1000);
  const hours = date.getHours();
  const day = date.getDate();
  const month = date.getMonth() + 1;
  const cDegrees = Math.round(data.main.temp - constantsMap.tKelvins);
  return { hours, day, month, cDegrees };
}

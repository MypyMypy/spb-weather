export interface CityObjectI {
  cityName: string;
  lat: string | number;
  lon: string | number;
}

export interface ApiConfigI {
  apiKey: string;
  baseUrl: string;
}

export interface WeatherItemI {
  dt: number;
  main: {
    temp: number;
  };
}

export interface TransformedWeatherItemI {
  hours: number;
  day: number;
  month: number;
  cDegrees: number;
}

export interface DayDegrees {
  day: TransformedWeatherItemI['day'];
  cDegrees: TransformedWeatherItemI['cDegrees'];
}

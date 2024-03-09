import { useWeatherStore } from '@/store/store';
import { useEffect, useState } from 'react';
import WeatherNow from './weatherNow/WeatherNow';
import WeatherByHours from './weatherByHours/WeatherByHours';
import WeatherCubeWrapper from './weatherCube/WeatherCubeWrapper';
import './weather.scss';

export const Weather: React.FC = () => {
  const weatherStore = useWeatherStore();

  const [isLoading, setIsLoading] = useState(weatherStore.isLoading);

  useEffect(() => {
    weatherStore.loadData().then(() => {
      setIsLoading(weatherStore.isLoading);
    });
  }, [weatherStore]);

  return (
    <section className="weather">
      <div className="container">
        {!isLoading ? (
          <div className="weather__wrapper">
            <div className="weather__today">
              <WeatherNow
                cityName={weatherStore.cityName}
                cDegrees={weatherStore.cityWeather[0].cDegrees}
              />
              <WeatherByHours array={weatherStore.cityWeather} />
            </div>
            <div className="weather__week">
              <WeatherCubeWrapper array={weatherStore.citiesWeather} />
            </div>
          </div>
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </section>
  );
};

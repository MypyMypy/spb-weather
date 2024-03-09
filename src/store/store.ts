import { createContext, useContext } from 'react';
import WeatherStore from './weatherStore/WeatherStore';

const WeatherStoreContext = createContext(new WeatherStore());

export const useWeatherStore = () => useContext(WeatherStoreContext);

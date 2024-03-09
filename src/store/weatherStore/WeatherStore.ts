import { makeAutoObservable } from 'mobx';
import { getDataWeatherByCity } from '@/api/getDataWeatherByCity';
import { transformDataWeatherByCity } from '@/api/transformDataWeatherByCity';
import { transformDataWeatherByCities } from '@/api/transformDataWeatherByCities';
import { constantsMap } from '@/api/constants';
import type {
  WeatherItemI,
  TransformedWeatherItemI,
  DayDegrees,
} from '@/api/types';

class WeatherStore {
  data: WeatherItemI[] = [];
  cityName: string = '';
  cityWeather: TransformedWeatherItemI[] = [];
  citiesWeather: DayDegrees[] = [];
  isLoading = true;

  constructor() {
    makeAutoObservable(this);
  }

  loadData = async () => {
    this.isLoading = true;
    try {
      const data = await getDataWeatherByCity(
        constantsMap.api.config,
        constantsMap.cities.sbp
      );
      this.data = data.cityWeatherData.list;
      const transformedData: TransformedWeatherItemI[] =
        data.cityWeatherData.list.map((item: WeatherItemI) =>
          transformDataWeatherByCity(item)
        );
      this.cityName = data.cityName;
      this.cityWeather = [...transformedData];
      this.citiesWeather = transformDataWeatherByCities([...transformedData]);
    } catch (error) {
      console.error('Failed to load data', error);
    } finally {
      this.isLoading = false;
    }
  };
}

export default WeatherStore;

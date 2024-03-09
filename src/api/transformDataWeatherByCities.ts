import type { TransformedWeatherItemI, DayDegrees } from './types';

export function transformDataWeatherByCities(
  data: TransformedWeatherItemI[]
): DayDegrees[] {
  const dataSet = new Set<DayDegrees>();
  let day = 0;
  for (const weatherByHour of data) {
    if (day !== weatherByHour.day) {
      dataSet.add({
        day: weatherByHour.day,
        cDegrees: weatherByHour.cDegrees,
      } as TransformedWeatherItemI);
      day = weatherByHour.day;
    }
  }

  return Array.from(dataSet);
}

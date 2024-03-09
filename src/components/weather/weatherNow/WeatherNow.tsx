import './weatherNow.scss';

interface WeatherNowProps {
  cityName: string | null;
  cDegrees: string | number | null;
}

const WeatherNow: React.FC<WeatherNowProps> = ({ cityName, cDegrees }) => {
  return (
    <div className="weather-now">
      <h1 className="weather-now__header">{cityName}</h1>
      <p>Now is {cDegrees} °C</p>
    </div>
  );
};

export default WeatherNow;

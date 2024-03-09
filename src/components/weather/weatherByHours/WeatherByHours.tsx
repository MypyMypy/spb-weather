interface WeatherHourI {
  hours: number | string;
  cDegrees: number | string;
}

interface WeatherByHoursPropsI {
  array: WeatherHourI[];
}

const WeatherByHours: React.FC<WeatherByHoursPropsI> = ({ array }) => {
  const elements = array.map((item, index) => {
    if (index > 5) return;
    return (
      <li key={item.hours} className="weather__by-hours-item">
        <div className="weather__by-hours-item-card">
          <span>{item.hours}:00</span>
          <span>{item.cDegrees}°C</span>
        </div>
      </li>
    );
  });

  return (
    <>
      {array.length ? <ul className="weather__by-hours">{elements}</ul> : null}
    </>
  );
};

export default WeatherByHours;

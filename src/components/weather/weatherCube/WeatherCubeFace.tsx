interface WeatherCubeFacePropsI {
  day: number;
  cDegrees: number;
}

const WeatherCubeFace: React.FC<WeatherCubeFacePropsI> = ({
  day,
  cDegrees,
}) => {
  return (
    <div className="weather__face-content">
      <span>Day: {day}</span>
      <span>{cDegrees}°C</span>
    </div>
  );
};

export default WeatherCubeFace;

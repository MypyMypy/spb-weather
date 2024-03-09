import { Canvas } from '@react-three/fiber';
import { OrbitControls } from '@react-three/drei';
import WeatherCube from './WeatherCube';
import type { DayDegrees } from '@/api/types';

interface WeatherCubeWrapperPropsI {
  array: DayDegrees[];
}

const WeatherCubeWrapper: React.FC<WeatherCubeWrapperPropsI> = ({ array }) => {
  return (
    <div className="weather__cube">
      <Canvas>
        <OrbitControls enableZoom={false} enablePan={false} />
        <WeatherCube array={array} />
      </Canvas>
    </div>
  );
};

export default WeatherCubeWrapper;

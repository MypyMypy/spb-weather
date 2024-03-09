import { useFrame } from '@react-three/fiber';
import { Html } from '@react-three/drei';
import { Mesh } from 'three';
import { useRef } from 'react';
import WeatherCubeFace from './WeatherCubeFace';
import type { DayDegrees } from '@/api/types';

interface WeatherCubePropsI {
  array: DayDegrees[];
}

const WeatherCube: React.FC<WeatherCubePropsI> = ({ array }) => {
  const meshRef = useRef<Mesh>(null!);

  useFrame((_state, delta) => {
    if (meshRef.current) {
      meshRef.current.rotation.x += delta * 0.05;
      meshRef.current.rotation.y += delta * 0.05;
      meshRef.current.rotation.z += delta * 0.05;
    }
  });

  const rotations: [number, number, number][] = [
    [0, Math.PI / 2, 0], // Правая грань
    [0, -Math.PI / 2, 0], // Левая грань
    [-Math.PI / 2, 0, 0], // Верхняя грань
    [Math.PI / 2, 0, 0], // Нижняя грань
    [0, 0, 0], // Передняя грань
    [0, Math.PI, 0],
  ];

  const positions: [number, number, number][] = [
    [1, 0, 0], // Правая грань
    [-1, 0, 0], // Левая грань
    [0, 1, 0], // Верхняя грань
    [0, -1, 0], // Нижняя грань
    [0, 0, 1], // Передняя грань
    [0, 0, -1], // Задняя грань
  ];

  const faces = array.map((item, index) => {
    if (index > 5) return;
    return (
      <Html
        position={positions[index]}
        rotation={rotations[index]}
        transform
        occlude
        className="weather__cube-face"
        key={index}
      >
        <WeatherCubeFace day={item.day} cDegrees={item.cDegrees} />
      </Html>
    );
  });

  return <mesh ref={meshRef}>{faces}</mesh>;
};

export default WeatherCube;

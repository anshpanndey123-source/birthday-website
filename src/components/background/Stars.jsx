import { Stars as DreiStars } from "@react-three/drei";

const Stars = () => {
  return (
    <DreiStars
      radius={250}
      depth={80}
      count={6000}
      factor={6}
      saturation={0}
      fade
      speed={0.35}
    />
  );
};

export default Stars;
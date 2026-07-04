import Stars from "./Stars";

const Scene = () => {
  return (
    <>
      <color attach="background" args={["#070312"]} />

      <ambientLight intensity={1.2} />

      <directionalLight
        position={[4, 5, 4]}
        intensity={1.5}
        color="#ffffff"
      />

      <pointLight
        position={[-5, 2, 2]}
        intensity={5}
        color="#8B5CF6"
      />

      <pointLight
        position={[5, -2, 3]}
        intensity={4}
        color="#ff4fd8"
      />

      <Stars />
    </>
  );
};

export default Scene;
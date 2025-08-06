import { Suspense, useEffect, useRef } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Preload, useAnimations, useFBX, useGLTF } from "@react-three/drei";
import type { Group } from "three";

import CanvasLoader from "../Loader";
import PlayerModel from "./models/PlayerModel";
import type { PlayerProps } from "@/types/global";

function Player({ isMobile }: PlayerProps) {
  const playerRef = useRef<Group>(null);
  const { nodes, materials } = useGLTF("/models/player/player.glb");
  const { animations } = useFBX("/animations/standing-greeting.fbx");
  const { actions } = useAnimations(animations, playerRef);

  useEffect(() => {
    if (animations[0]) {
      actions[animations[0].name]?.play();
    }
  }, [actions, animations]);

  return (
    <>
      <ambientLight intensity={0.25} />
      <directionalLight position={[0, 0, 0.05]} />
      <PlayerModel
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
        nodes={nodes as any}
        materials={materials}
        scale={isMobile ? 2.4 : 2.6}
        position={isMobile ? [0, -2, -3] : [0, -2, -3]}
        rotation={[-Math.PI / 2, 0, 0]}
        group={playerRef}
      />
      <OrbitControls
        autoRotate={false}
        enableZoom={false}
        maxPolarAngle={Math.PI / 2}
        minPolarAngle={Math.PI / 2}
      />
    </>
  );
}

function PlayerCanvas({ isMobile }: PlayerProps) {
  return (
    <Canvas
      shadows
      frameloop="demand"
      dpr={[1, 2]}
      gl={{ preserveDrawingBuffer: true }}
      camera={{
        fov: 45,
        near: 0.1,
        far: 200,
        position: [-4, 3, 6],
      }}
    >
      <Suspense fallback={<CanvasLoader />}>
        <Player isMobile={isMobile} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
}

export default PlayerCanvas;

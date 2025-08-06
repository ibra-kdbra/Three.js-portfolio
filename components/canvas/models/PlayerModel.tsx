import { PlayerModelProps } from "@/types/global";
import { SkinnedMesh } from "three";

function PlayerModel({
  nodes,
  materials,
  scale,
  position,
  rotation,
  group,
}: PlayerModelProps) {
  return (
    <group
      dispose={null}
      scale={scale}
      position={position}
      ref={group}
      rotation={rotation}
    >
      <group>
        <primitive object={nodes.Hips} />
        <skinnedMesh
          frustumCulled={false}
          geometry={(nodes.Wolf3D_Body as SkinnedMesh).geometry}
          material={materials.Wolf3D_Body}
          skeleton={(nodes.Wolf3D_Body as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).geometry}
          material={materials.Wolf3D_Outfit_Bottom}
          skeleton={(nodes.Wolf3D_Outfit_Bottom as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).geometry}
          material={materials.Wolf3D_Outfit_Footwear}
          skeleton={(nodes.Wolf3D_Outfit_Footwear as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).geometry}
          material={materials.Wolf3D_Outfit_Top}
          skeleton={(nodes.Wolf3D_Outfit_Top as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          geometry={(nodes.Wolf3D_Hair as SkinnedMesh).geometry}
          material={materials.Wolf3D_Hair}
          skeleton={(nodes.Wolf3D_Hair as SkinnedMesh).skeleton}
        />
        <skinnedMesh
          frustumCulled={false}
          name="EyeLeft"
          geometry={(nodes.EyeLeft as SkinnedMesh).geometry}
          material={materials.Wolf3D_Eye}
          skeleton={(nodes.EyeLeft as SkinnedMesh).skeleton}
          morphTargetDictionary={(nodes.EyeLeft as SkinnedMesh).morphTargetDictionary}
          morphTargetInfluences={(nodes.EyeLeft as SkinnedMesh).morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="EyeRight"
          geometry={(nodes.EyeRight as SkinnedMesh).geometry}
          material={materials.Wolf3D_Eye}
          skeleton={(nodes.EyeRight as SkinnedMesh).skeleton}
          morphTargetDictionary={(nodes.EyeRight as SkinnedMesh).morphTargetDictionary}
          morphTargetInfluences={(nodes.EyeRight as SkinnedMesh).morphTargetInfluences}
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Head"
          geometry={(nodes.Wolf3D_Head as SkinnedMesh).geometry}
          material={materials.Wolf3D_Skin}
          skeleton={(nodes.Wolf3D_Head as SkinnedMesh).skeleton}
          morphTargetDictionary={
            (nodes.Wolf3D_Head as SkinnedMesh).morphTargetDictionary
          }
          morphTargetInfluences={
            (nodes.Wolf3D_Head as SkinnedMesh).morphTargetInfluences
          }
        />
        <skinnedMesh
          frustumCulled={false}
          name="Wolf3D_Teeth"
          geometry={(nodes.Wolf3D_Teeth as SkinnedMesh).geometry}
          material={materials.Wolf3D_Teeth}
          skeleton={(nodes.Wolf3D_Teeth as SkinnedMesh).skeleton}
          morphTargetDictionary={
            (nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetDictionary
          }
          morphTargetInfluences={
            (nodes.Wolf3D_Teeth as SkinnedMesh).morphTargetInfluences
          }
        />
      </group>
    </group>
  );
}

export default PlayerModel;

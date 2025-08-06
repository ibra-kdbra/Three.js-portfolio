import { ReactNode } from 'react';


export interface NavLink {
  id: string;
  title: string;
}

export interface Service {
  title: string;
  icon: string;
}

export interface Technology {
  name: string;
  icon: string;
}

export interface Experience {
  title: string;
  company_name: string;
  icon: string;
  iconBg: string;
  date: string;
  points: string[];
}

export interface Project {
  name: string;
  description: string;
  tags: ProjectTag[];
  image: string;
  source_code_link: string;
  deployed_link?: string;
}

export interface ProjectTag {
  name: string;
  color: string;
}

export interface Testimonial {
  testimonial: string;
  name: string;
  designation: string;
  company: string;
  image: string;
}

export interface TechnologyCategory {
  name: string;
  icon: string;
  link: string;
}

export interface Technologies {
  languages: TechnologyCategory[];
  frameworks: TechnologyCategory[];
  libraries: TechnologyCategory[];
  tools: TechnologyCategory[];
  environments: TechnologyCategory[];
  databases: TechnologyCategory[];
}

export interface Social {
  id: string;
  icon: React.ReactElement;
  link: string;
}

export interface ServiceWithIcon {
  title: string;
  icon: React.ReactElement;
}

export interface SectionWrapperProps {
  children: ReactNode;
  idName: string;
}

export interface MotionValue {
  x: number;
  y: number;
}

// Three.js related types
export interface ComputerProps {
  isMobile: boolean;
}

export interface EarthProps {
  isMobile?: boolean;
}

export interface PlayerProps {
  isMobile: boolean;
}

// Form types
export interface ContactFormData {
  name: string;
  email: string;
  message: string;
}

// Theme types
export type Theme = 'light' | 'dark';

// Animation types
export interface AnimationVariants {
  [key: string]: {
    x?: number | string;
    y?: number | string;
    opacity?: number;
    scale?: number;
    transition?: {
      type?: string;
      delay?: number;
      duration?: number;
      ease?: string;
      staggerChildren?: number;
      delayChildren?: number;
    };
  };
}

// SVG component props
export interface PlayerModelProps {
  nodes: {
    [key: string]: THREE.Mesh | THREE.SkinnedMesh;
  };
  materials: {
    [key: string]: THREE.Material;
  };
  scale: number;
  position: [number, number, number];
  rotation: [number, number, number];
  group: React.Ref<THREE.Group>;
}

export interface SVGProps {
  className?: string;
  width?: number;
  height?: number;
  fill?: string;
}

declare module '*.svg' {
  import React from 'react';
  const SVG: React.FC<SVGProps>;
  export default SVG;
}

declare module '*.fbx' {
  const src: string;
  export default src;
}

declare module '*.glb' {
  const src: string;
  export default src;
}

declare module '*.gltf' {
  const src: string;
  export default src;
}

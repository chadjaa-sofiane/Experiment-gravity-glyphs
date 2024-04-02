import { useMemo } from "react";
import "./App.css";
import { getRandomCoordinates } from "./libs/utils";

const technologies = [
  "React",
  "Tailwind",
  "Vite",
  "TypeScript",
  "Node.js",
  "Express.js",
  "MongoDB",
  "PostgreSQL",
  "Prisma",
];

const App = () => {
  return (
    <div className="cantainer min-h-screen grid place-items-center bg-black">
      <div className="space w-[60em] h-[60em] border border-[#333] text-white">
        <div className="gravity-center">
          {technologies.map((technology, index) => (
            <FloatingItem key={index}>{technology}</FloatingItem>
          ))}
        </div>
      </div>
    </div>
  );
};

interface FloatingItemProps {
  children: React.ReactNode;
}

const FloatingItem = ({ children }: FloatingItemProps) => {
  const { x, y, z } = useMemo(() => getRandomCoordinates(), []);
  const style = {
    "--x": `${x}px`,
    "--y": `${y}px`,
    "--z": `${z}px`,
  } as React.CSSProperties;
  return (
    <div className="floating-item" style={style}>
      {children}
    </div>
  );
};

export default App;

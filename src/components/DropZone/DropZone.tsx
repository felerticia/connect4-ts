import { useState } from "react";
import "./DropZone.css";
import { Dropped } from "./type";
import { size } from "../../constants/constants";

const DropZone = () => {
  const [dropped, setDropped] = useState<Dropped[]>([
    { x: 3, y: 4, player: 1 },
  ]);

  return (
    <div className="drop-zone">
      {dropped.map((m, i) => (
        <div
          key={i}
          className={`p${m.player}`}
          style={{
            transform: `translate(${m.y * size}px,${m.x * size + 150}px)`,
          }}
        ></div>
      ))}
      <div className="p2" />
    </div>
  );
};

export default DropZone;

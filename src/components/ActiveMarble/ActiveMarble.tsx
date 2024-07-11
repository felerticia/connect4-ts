import { useEffect, useState } from "react";
import { cols, size } from "../../constants/constants";

type ActiveMarbleProps = {
  turn: number;
};

const ActiveMarble = ({ turn }: ActiveMarbleProps) => {
  const [column, setColumn] = useState(0);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowLeft" && column > 0) {
        setColumn(column - 1);
      }
      if (e.key === "ArrowRight" && column <= cols) {
        setColumn(column + 1);
      }
    };
    document.addEventListener("keyup", handleKeyDown);
    return () => document.removeEventListener("keyup", handleKeyDown);
  }, [column]);

  return (
    <div
      className={`p${turn}`}
      style={{
        marginLeft: column * 100 + "px",
      }}
    ></div>
  );
};

export default ActiveMarble;

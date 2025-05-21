import { useState } from "react";
import { Button } from "./components/Button";
import "./App.css";

function App() {
  const clr = [
    "blue",
    "green",
    "yellow",
    "slate",
    "orange",
    "lime",
    "cyan",
    "red",
    'olive'
  ];
  const colorClasses = {
    blue: "bg-blue-500",
    green: "bg-green-500",
    yellow: "bg-yellow-500",
    slate: "bg-slate-500",
    orange: "bg-orange-500",
    lime: "bg-lime-500",
    cyan: "bg-cyan-500",
    red: "bg-red-500",
    olive : "bg-emerald-300"
  };

  const [color, setColor] = useState('olive');
  const handleColor = (color) => {
    return setColor(color);
  };
  return (
    <div className={`h-screen w-full ${colorClasses[color]} flex gap-10 relative`}>
      <div className="h-fit w-fit flex gap-10 -translate-x-[50%] translate-y-[50%] absolute top-[90%] left-1/2">
        {clr.map((c, i) => (
          <Button key={i} color={clr[i]} handleColor={handleColor} />
        ))}
      </div>
    </div>
  );
}

export default App;

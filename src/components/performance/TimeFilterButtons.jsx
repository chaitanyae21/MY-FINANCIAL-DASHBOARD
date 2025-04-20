import React from "react";
import clsx from "clsx";
import usePerformanceStore from "../../store/performanceStore";

const TimeFilterButtons = () => {
  const { range, setRange } = usePerformanceStore();
  const ranges = ["7D", "1M", "3M", "1Y", "5Y"];
  
  return (
    <div className="flex gap-2 mb-4">
      {ranges.map((r) => (
        <button
          key={r}
          onClick={() => setRange(r)}
          className={clsx(
            "px-3 py-1 rounded-md text-sm",
            range === r 
              ? "bg-teal-600 text-white" 
              : "bg-gray-700 text-gray-300 hover:bg-gray-600"
          )}
        >
          {r}
        </button>
      ))}
    </div>
  );
};

export default TimeFilterButtons;

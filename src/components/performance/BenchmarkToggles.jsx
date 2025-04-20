import React from "react";
import usePerformanceStore from "../../store/performanceStore";

const BenchmarkToggles = () => {
  const { benchmarks, toggleBenchmark } = usePerformanceStore();
  
  return (
    <div className="flex gap-4 items-center mb-2">
      {(["sp500", "nasdaq"]).map((key) => (
        <label 
          key={key} 
          className="inline-flex items-center gap-1 cursor-pointer select-none text-sm"
        >
          <input
            type="checkbox"
            checked={benchmarks[key]}
            onChange={() => toggleBenchmark(key)}
            className="accent-teal-500"
          />
          {key === "sp500" ? "S&P 500" : "Nasdaq"}
        </label>
      ))}
    </div>
  );
};

export default BenchmarkToggles;

import React, { useMemo } from "react";
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer, BarChart, Bar } from "recharts";
import clsx from "clsx";

// Import components
import TimeFilterButtons from "../../components/performance/TimeFilterButtons";
import BenchmarkToggles from "../../components/performance/BenchmarkToggles";
import Layout from "../../components/layout/Layout";

// Import store
import usePerformanceStore from "../../store/performanceStore";

// Import mock data
import { performanceData, analysisTable, monthlyReturns } from "../../data/mockPerformanceData";

/******************************
 * Main Page Component
 ******************************/
const PerformancePage = () => {
  const { benchmarks, sortKey, sortAsc, setSortKey } = usePerformanceStore();

  const sortedTable = useMemo(() => {
    const sorted = [...analysisTable].sort((a, b) => {
      const valA = a[sortKey];
      const valB = b[sortKey];
      if (typeof valA === "string") {
        return sortAsc ? valA.localeCompare(valB) : valB.localeCompare(valA);
      }
      return sortAsc ? valA - valB : valB - valA;
    });
    return sorted;
  }, [sortKey, sortAsc]);

  return (
    <Layout>
      <div className="flex-1 max-w-7xl mx-auto w-full px-4 md:px-6 py-8 space-y-12">
        {/* Interactive Line Chart */}
        <section>
          <h2 className="text-lg font-semibold mb-2">Portfolio vs Benchmarks</h2>
          <BenchmarkToggles />
          <TimeFilterButtons />
          <div className="w-full h-72 bg-gray-800 rounded-lg shadow-inner">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={performanceData} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="date" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" domain={[90000, 120000]} tickFormatter={(v) => `$${v / 1000}k`} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1F2937", border: "none", borderRadius: "0.375rem" }}
                  labelStyle={{ color: "#D1D5DB" }}
                  formatter={(value) => [`$${value.toLocaleString()}`, "Value"]}
                />
                <Legend verticalAlign="top" wrapperStyle={{ color: "#D1D5DB" }} />
                <Line type="monotone" dataKey="portfolio" stroke="#14B8A6" strokeWidth={2} dot={false} name="Portfolio" />
                {benchmarks.sp500 && <Line type="monotone" dataKey="sp500" stroke="#4F46E5" strokeWidth={1.5} dot={false} name="S&P 500" />}
                {benchmarks.nasdaq && <Line type="monotone" dataKey="nasdaq" stroke="#DB2777" strokeWidth={1.5} dot={false} name="Nasdaq" />}
              </LineChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Performance Analysis Table */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Performance Analysis</h2>
          <div className="overflow-x-auto bg-gray-800 rounded-lg shadow-inner">
            <table className="min-w-full text-sm">
              <thead className="bg-gray-700 text-gray-300">
                <tr>
                  {[
                    { key: "ticker", label: "Ticker" },
                    { key: "assetName", label: "Asset Name" },
                    { key: "assetClass", label: "Asset Class" },
                    { key: "dailyChange", label: "Daily Change" },
                    { key: "ytd", label: "YTD Return" },
                    { key: "total", label: "Total Return" },
                  ].map(({ key, label }) => (
                    <th
                      key={key}
                      className="px-4 py-2 font-medium cursor-pointer select-none"
                      onClick={() => setSortKey(key)}
                    >
                      <span className="flex items-center gap-1">
                        {label}
                        {sortKey === key && (sortAsc ? "▲" : "▼")}
                      </span>
                    </th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {sortedTable.map((row) => (
                  <tr
                    key={row.ticker}
                    className="border-b border-gray-700 hover:bg-gray-700/40 transition-colors"
                  >
                    <td className="px-4 py-2 font-semibold text-gray-100">{row.ticker}</td>
                    <td className="px-4 py-2 whitespace-nowrap">{row.assetName}</td>
                    <td className="px-4 py-2">{row.assetClass}</td>
                    <td
                      className={clsx(
                        "px-4 py-2",
                        row.dailyChange >= 0 ? "text-teal-400" : "text-rose-400"
                      )}
                    >
                      {row.dailyChange >= 0 ? "▲" : "▼"} {Math.abs(row.dailyChange).toFixed(1)}%
                    </td>
                    <td className="px-4 py-2 text-teal-400">{row.ytd.toFixed(1)}%</td>
                    <td className="px-4 py-2 text-teal-400">{row.total.toFixed(1)}%</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </section>

        {/* Monthly Returns Chart */}
        <section>
          <h2 className="text-lg font-semibold mb-4">Monthly Returns</h2>
          <div className="w-full h-64 bg-gray-800 rounded-lg shadow-inner">
            <ResponsiveContainer width="100%" height="100%">
              <BarChart data={monthlyReturns} margin={{ top: 20, right: 30, left: 0, bottom: 0 }}>
                <CartesianGrid strokeDasharray="3 3" stroke="#374151" />
                <XAxis dataKey="month" stroke="#9CA3AF" />
                <YAxis stroke="#9CA3AF" tickFormatter={(v) => `${v}%`} />
                <Tooltip
                  contentStyle={{ backgroundColor: "#1F2937", border: "none", borderRadius: "0.375rem" }}
                  labelStyle={{ color: "#D1D5DB" }}
                  formatter={(value) => [`${value}%`, "Return"]}
                />
                <Bar dataKey="return" name="Return" fill="#14B8A6" radius={[4, 4, 0, 0]} />
              </BarChart>
            </ResponsiveContainer>
          </div>
        </section>
      </div>
    </Layout>
  );
};

export default PerformancePage;

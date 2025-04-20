import React, { useMemo } from "react";
import clsx from "clsx";
import useHoldingsStore from "../../store/holdingsStore";

/**
 * Asset table component for the holdings page
 */
function AssetTable() {
  const { filtered, sort, setSort } = useHoldingsStore();

  // Define columns
  const columns = [
    { id: "ticker", Header: "Ticker", accessor: (row) => row.ticker },
    { id: "name", Header: "Asset", accessor: (row) => row.name },
    { id: "class", Header: "Class", accessor: (row) => row.class },
    { id: "quantity", Header: "Qty", accessor: (row) => row.quantity },
    { 
      id: "currentPrice", 
      Header: "Price", 
      accessor: (row) => row.currentPrice,
      Cell: (value) => `$${value.toLocaleString()}`
    },
    { 
      id: "marketValue", 
      Header: "Market Value", 
      accessor: (row) => row.marketValue,
      Cell: (value) => `$${value.toLocaleString()}`
    },
    { 
      id: "dailyChangePct", 
      Header: "Daily %", 
      accessor: (row) => row.dailyChangePct,
      Cell: (value) => (
        <span className={value >= 0 ? "text-green-500" : "text-red-500"}>
          {value.toFixed(2)}%
        </span>
      )
    },
    { 
      id: "totalGain", 
      Header: "Total Gain/Loss", 
      accessor: (row) => row.totalGain,
      Cell: (value, row) => {
        const pct = row.totalGainPct;
        return (
          <span className={value >= 0 ? "text-green-500" : "text-red-500"}>
            {value >= 0 ? "+" : "-"}${Math.abs(value).toLocaleString(undefined, {
              maximumFractionDigits: 2,
            })}
            ({pct.toFixed(1)}%)
          </span>
        );
      }
    },
  ];

  // Derive runtime metrics per row
  const data = useMemo(
    () =>
      filtered.map((r) => {
        const marketValue = r.quantity * r.currentPrice;
        const costBasis = r.quantity * r.purchasePrice;
        const totalGain = marketValue - costBasis;
        const totalGainPct = (totalGain / costBasis) * 100;
        const dailyChangePct = ((r.currentPrice - r.purchasePrice) / r.purchasePrice) * 100;
        return {
          ...r,
          marketValue,
          totalGain,
          totalGainPct,
          dailyChangePct,
        };
      }),
    [filtered],
  );

  // Sort data based on current sort state
  const sortedData = useMemo(() => {
    if (!sort.id) return data;
    
    return [...data].sort((a, b) => {
      const valueA = columns.find(col => col.id === sort.id).accessor(a);
      const valueB = columns.find(col => col.id === sort.id).accessor(b);
      
      if (valueA < valueB) return sort.desc ? 1 : -1;
      if (valueA > valueB) return sort.desc ? -1 : 1;
      return 0;
    });
  }, [data, sort, columns]);

  // Handle sort click
  const handleSortClick = (columnId) => {
    setSort(
      columnId,
      sort.id === columnId ? !sort.desc : false
    );
  };

  return (
    <div className="w-full overflow-x-auto bg-slate-900/40 rounded-lg shadow">
      <table className="min-w-full text-sm text-left">
        <thead className="bg-slate-800 text-slate-300">
          <tr>
            {columns.map((column) => (
              <th
                key={column.id}
                onClick={() => handleSortClick(column.id)}
                className={clsx(
                  "px-4 py-3 cursor-pointer select-none",
                  sort.id === column.id && "text-emerald-400",
                )}
              >
                {column.Header}
                {sort.id === column.id ? (sort.desc ? " ↓" : " ↑") : null}
              </th>
            ))}
          </tr>
        </thead>
        <tbody className="divide-y divide-slate-700">
          {sortedData.map((row) => (
            <tr key={row.id} className="hover:bg-slate-800/60 transition">
              {columns.map((column) => {
                const value = column.accessor(row);
                return (
                  <td key={column.id} className="px-4 py-2 whitespace-nowrap">
                    {column.Cell ? column.Cell(value, row) : value}
                  </td>
                );
              })}
            </tr>
          ))}
        </tbody>
      </table>
      {sortedData.length === 0 && (
        <div className="py-8 text-center text-slate-500">No holdings match your filters.</div>
      )}
    </div>
  );
}

export default AssetTable;

import React from "react";
import useHoldingsStore from "../../store/holdingsStore";

/**
 * Filters bar component for the holdings page
 */
function FiltersBar() {
  const { filters, setFilter, setSearch } = useHoldingsStore();
  const sel = "border bg-transparent px-3 py-2 rounded-md text-sm";

  return (
    <div className="flex flex-wrap items-center gap-3 mb-4">
      <select
        className={sel}
        value={filters.assetClass}
        onChange={(e) => setFilter("assetClass", e.target.value)}
      >
        {["All", "Stock", "ETF", "Crypto"].map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      <select
        className={sel}
        value={filters.accountType}
        onChange={(e) => setFilter("accountType", e.target.value)}
      >
        {["All", "Brokerage", "Retirement", "Crypto Wallet"].map((opt) => (
          <option key={opt}>{opt}</option>
        ))}
      </select>

      <input
        type="text"
        placeholder="Search by ticker or name…"
        className="border bg-transparent px-3 py-2 rounded-md text-sm flex-1 min-w-[12rem]"
        value={filters.search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
}

export default FiltersBar;

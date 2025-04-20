import React, { useEffect } from "react";
import useHoldingsStore from "../../store/holdingsStore";
import FiltersBar from "../../components/holdings/FiltersBar";
import AssetTable from "../../components/holdings/AssetTable";
import Layout from "../../components/layout/Layout";

/**
 * Holdings page component
 */
export default function HoldingsPage() {
  const tickPrices = useHoldingsStore((s) => s.tickPrices);

  // Simulate live price updates every 10 seconds
  useEffect(() => {
    const id = setInterval(tickPrices, 10_000);
    return () => clearInterval(id);
  }, [tickPrices]);

  return (
    <Layout>
      <section className="container mx-auto px-4 pt-6 pb-12 text-slate-100">
        <h1 className="text-2xl font-semibold mb-6">Holdings</h1>
        <FiltersBar />
        <AssetTable />
      </section>
    </Layout>
  );
}

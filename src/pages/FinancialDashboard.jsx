import React, { useState } from "react";
import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
  PieChart,
  Pie,
  Cell,
  Legend,
} from "recharts";
import { motion } from "framer-motion";
import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Home,
  PieChart as PieChartIcon,
  Bell,
  Settings,
  TrendingUp,
  Briefcase,
  Newspaper,
} from "lucide-react";

// Mock data
const kpiCards = [
  {
    title: "Total Portfolio Value",
    value: "$124,532.10",
    trend: 2.5,
    sparkData: [
      { value: 31 },
      { value: 40 },
      { value: 28 },
      { value: 51 },
      { value: 42 },
      { value: 45 },
      { value: 55 },
    ],
  },
  {
    title: "Day Change",
    value: "+$1,530.25",
    trend: 1.2,
    sparkData: [
      { value: 31 },
      { value: 40 },
      { value: 28 },
      { value: 51 },
      { value: 42 },
      { value: 45 },
      { value: 55 },
    ],
  },
  {
    title: "Total Gain/Loss",
    value: "+$34,125.10",
    trend: 27.5,
    sparkData: [
      { value: 21 },
      { value: 25 },
      { value: 30 },
      { value: 35 },
      { value: 40 },
      { value: 45 },
      { value: 55 },
    ],
  },
  {
    title: "Available Cash",
    value: "$12,234.50",
    trend: 0,
    sparkData: [
      { value: 50 },
      { value: 50 },
      { value: 50 },
      { value: 50 },
      { value: 50 },
      { value: 50 },
      { value: 50 },
    ],
  },
];

const portfolioHistoryData = {
  "1D": [
    { time: "9:30 AM", value: 122500 },
    { time: "10:30 AM", value: 123000 },
    { time: "11:30 AM", value: 123250 },
    { time: "12:30 PM", value: 122750 },
    { time: "1:30 PM", value: 123500 },
    { time: "2:30 PM", value: 124000 },
    { time: "3:30 PM", value: 124250 },
    { time: "4:00 PM", value: 124532 },
  ],
  "1W": [
    { time: "Mon", value: 120000 },
    { time: "Tue", value: 121500 },
    { time: "Wed", value: 122300 },
    { time: "Thu", value: 123100 },
    { time: "Fri", value: 124532 },
  ],
  "1M": [
    { time: "Week 1", value: 118000 },
    { time: "Week 2", value: 120000 },
    { time: "Week 3", value: 122000 },
    { time: "Week 4", value: 124532 },
  ],
  "YTD": [
    { time: "Jan", value: 110000 },
    { time: "Feb", value: 115000 },
    { time: "Mar", value: 120000 },
    { time: "Apr", value: 124532 },
  ],
  "1Y": [
    { time: "Q2 2024", value: 105000 },
    { time: "Q3 2024", value: 110000 },
    { time: "Q4 2024", value: 118000 },
    { time: "Q1 2025", value: 124532 },
  ],
  "ALL": [
    { time: "2022", value: 80000 },
    { time: "2023", value: 95000 },
    { time: "2024", value: 115000 },
    { time: "2025", value: 124532 },
  ],
};

const assetAllocationData = [
  { name: "Stocks", value: 65, color: "#22c55e" },
  { name: "Bonds", value: 15, color: "#3b82f6" },
  { name: "Cash", value: 10, color: "#eab308" },
  { name: "Crypto", value: 5, color: "#ec4899" },
  { name: "Real Estate", value: 5, color: "#8b5cf6" },
];

const topMovers = {
  gainers: [
    { name: "Apple Inc.", ticker: "AAPL", change: 2.5 },
    { name: "Microsoft", ticker: "MSFT", change: 1.8 },
    { name: "Tesla", ticker: "TSLA", change: 4.2 },
  ],
  losers: [
    { name: "Amazon", ticker: "AMZN", change: -1.2 },
    { name: "Meta", ticker: "META", change: -0.8 },
    { name: "Netflix", ticker: "NFLX", change: -2.1 },
  ],
};

export default function FinancialDashboard() {
  const [timeRange, setTimeRange] = useState("1D");

  return (
    <div className="min-h-screen bg-gray-900 text-white flex flex-col">
      {/* Header Navigation */}
      <header className="flex items-center justify-between px-6 py-4 border-b border-gray-800 bg-gray-950">
        <div className="flex items-center space-x-3">
          <h1 className="text-2xl font-bold">My Portfolio</h1>
        </div>
      </header>

      <div className="p-6 flex-1">
        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4 mb-6">
          {kpiCards.map((card, index) => (
            <motion.div
              key={index}
              whileHover={{ scale: 1.02 }}
              className="bg-gray-800 rounded-2xl p-4 shadow-md"
            >
              <div className="flex justify-between items-start">
                <div>
                  <h2 className="text-sm font-medium text-gray-400 mb-1">
                    {card.title}
                  </h2>
                  <p className="text-xl font-semibold text-white">
                    {card.value}
                  </p>
                </div>
                <span
                  className={`text-sm font-semibold ${
                    card.trend >= 0 ? "text-green-400" : "text-red-400"
                  }`}
                >
                  {card.trend >= 0 ? `+${card.trend}%` : `${card.trend}%`}
                </span>
              </div>
              <ResponsiveContainer width="100%" height={40}>
                <AreaChart data={card.sparkData}>
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke={card.trend >= 0 ? "#22c55e" : "#ef4444"}
                    fill={card.trend >= 0 ? "#22c55e33" : "#ef444433"}
                  />
                </AreaChart>
              </ResponsiveContainer>
            </motion.div>
          ))}
        </div>

        {/* Portfolio Value Chart */}
        <Card className="bg-gray-800 text-white mb-6">
          <CardHeader>
            <CardTitle className="text-xl">Portfolio Value</CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex flex-col md:flex-row md:items-center md:justify-between">
              <div className="flex space-x-2 mb-4 md:mb-0">
                {["1D", "1W", "1M", "YTD", "1Y", "ALL"].map(range => (
                  <Button
                    key={range}
                    variant={range === timeRange ? "default" : "outline"}
                    onClick={() => setTimeRange(range)}
                    className="text-xs"
                  >
                    {range}
                  </Button>
                ))}
              </div>
            </div>
            <div className="w-full h-64">
              <ResponsiveContainer>
                <AreaChart data={portfolioHistoryData[timeRange]}>
                  <defs>
                    <linearGradient id="colorValue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#82ca9d" stopOpacity={0.8} />
                      <stop offset="95%" stopColor="#82ca9d" stopOpacity={0} />
                    </linearGradient>
                  </defs>
                  <XAxis dataKey="time" stroke="#ccc" />
                  <YAxis stroke="#ccc" />
                  <Tooltip
                    contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
                    labelStyle={{ color: "#fff" }}
                    itemStyle={{ color: "#fff" }}
                  />
                  <Area
                    type="monotone"
                    dataKey="value"
                    stroke="#82ca9d"
                    strokeWidth={2}
                    fillOpacity={1}
                    fill="url(#colorValue)"
                  />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </CardContent>
        </Card>

        {/* Allocation and Top Movers */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {/* Donut Chart */}
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-xl">Asset Allocation</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="flex justify-center items-center h-64">
                <ResponsiveContainer width="100%" height="100%">
                  <PieChart>
                    <Pie
                      data={assetAllocationData}
                      dataKey="value"
                      nameKey="name"
                      innerRadius={60}
                      outerRadius={80}
                      fill="#8884d8"
                      paddingAngle={2}
                      label={false}
                    >
                      {assetAllocationData.map((entry, index) => (
                        <Cell key={`cell-${index}`} fill={entry.color} />
                      ))}
                    </Pie>
                    <Tooltip
                      contentStyle={{ backgroundColor: "#1f2937", border: "none" }}
                      labelStyle={{ color: "#fff" }}
                      itemStyle={{ color: "#fff" }}
                    />
                    <Legend
                      formatter={(value) => (
                        <span className="text-sm text-gray-200">{value}</span>
                      )}
                    />
                  </PieChart>
                </ResponsiveContainer>
              </div>
            </CardContent>
          </Card>

          {/* Top Movers */}
          <Card className="bg-gray-800 text-white">
            <CardHeader>
              <CardTitle className="text-xl">Top Movers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Gainers */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Gainers</h3>
                  <div className="bg-gray-900 rounded-2xl">
                    {topMovers.gainers.map((stock, idx) => (
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        key={idx}
                        className="flex justify-between items-center p-2 border-b border-gray-700 last:border-none hover:bg-gray-800 rounded-xl transition-all"
                      >
                        <div>
                          <p className="text-sm font-medium">{stock.name}</p>
                          <p className="text-xs text-gray-400">{stock.ticker}</p>
                        </div>
                        <p className="text-green-400 font-medium">+{stock.change}%</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
                {/* Losers */}
                <div>
                  <h3 className="text-lg font-semibold mb-2">Losers</h3>
                  <div className="bg-gray-900 rounded-2xl">
                    {topMovers.losers.map((stock, idx) => (
                      <motion.div
                        whileHover={{ scale: 1.01 }}
                        key={idx}
                        className="flex justify-between items-center p-2 border-b border-gray-700 last:border-none hover:bg-gray-800 rounded-xl transition-all"
                      >
                        <div>
                          <p className="text-sm font-medium">{stock.name}</p>
                          <p className="text-xs text-gray-400">{stock.ticker}</p>
                        </div>
                        <p className="text-red-400 font-medium">{stock.change}%</p>
                      </motion.div>
                    ))}
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </div>
  );
}

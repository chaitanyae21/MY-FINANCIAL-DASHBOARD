// Mock data for the Performance page

// Chart data for portfolio vs benchmarks
export const performanceData = [
  { date: "2024-05", portfolio: 100000, sp500: 100000, nasdaq: 100000 },
  { date: "2024-06", portfolio: 101500, sp500: 100800, nasdaq: 101200 },
  { date: "2024-07", portfolio: 103200, sp500: 102000, nasdaq: 102700 },
  { date: "2024-08", portfolio: 102100, sp500: 101500, nasdaq: 103500 },
  { date: "2024-09", portfolio: 104600, sp500: 103200, nasdaq: 105100 },
  { date: "2024-10", portfolio: 105300, sp500: 104700, nasdaq: 106400 },
  { date: "2024-11", portfolio: 107800, sp500: 106100, nasdaq: 108900 },
  { date: "2024-12", portfolio: 109000, sp500: 107400, nasdaq: 109800 },
  { date: "2025-01", portfolio: 108400, sp500: 107000, nasdaq: 110100 },
  { date: "2025-02", portfolio: 111200, sp500: 109500, nasdaq: 112600 },
  { date: "2025-03", portfolio: 113000, sp500: 111000, nasdaq: 113800 },
  { date: "2025-04", portfolio: 115500, sp500: 113400, nasdaq: 116900 },
];

// Table data for performance analysis
export const analysisTable = [
  {
    ticker: "AAPL",
    assetName: "Apple Inc.",
    assetClass: "Stock",
    dailyChange: -1.8,
    ytd: 20.5,
    total: 35.2,
  },
  {
    ticker: "BTC",
    assetName: "Bitcoin",
    assetClass: "Crypto",
    dailyChange: 2.3,
    ytd: 45.8,
    total: 120.4,
  },
  {
    ticker: "NVDA",
    assetName: "Nvidia Corp.",
    assetClass: "Stock",
    dailyChange: -0.6,
    ytd: 30.2,
    total: 65.8,
  },
  {
    ticker: "VTI",
    assetName: "Vanguard Total Market ETF",
    assetClass: "ETF",
    dailyChange: 0.4,
    ytd: 11.2,
    total: 24.6,
  },
];

// Monthly returns data for bar chart
export const monthlyReturns = [
  { month: "Jan", return: 2.1 },
  { month: "Feb", return: -1.4 },
  { month: "Mar", return: 3.8 },
  { month: "Apr", return: 1.2 },
  { month: "May", return: 0.5 },
  { month: "Jun", return: 4.2 },
  { month: "Jul", return: 1.9 },
  { month: "Aug", return: -0.8 },
  { month: "Sep", return: 2.6 },
  { month: "Oct", return: 1.3 },
  { month: "Nov", return: 2.9 },
  { month: "Dec", return: 1.7 },
];

// Mock holdings data
export const mockHoldings = [
  {
    id: 1,
    ticker: "AAPL",
    name: "Apple Inc.",
    class: "Stock",
    accountType: "Brokerage",
    quantity: 35,
    purchasePrice: 134.07,
    purchaseDate: "2023‑09‑14",
    currentPrice: 174.55,
  },
  {
    id: 2,
    ticker: "VOO",
    name: "Vanguard S&P 500 ETF",
    class: "ETF",
    accountType: "Retirement",
    quantity: 12,
    purchasePrice: 358.2,
    purchaseDate: "2022‑05‑10",
    currentPrice: 432.1,
  },
  {
    id: 3,
    ticker: "BTC",
    name: "Bitcoin",
    class: "Crypto",
    accountType: "Crypto Wallet",
    quantity: 0.45,
    purchasePrice: 28950,
    purchaseDate: "2023‑11‑21",
    currentPrice: 64750,
  },
  {
    id: 4,
    ticker: "MSFT",
    name: "Microsoft Corporation",
    class: "Stock",
    accountType: "Brokerage",
    quantity: 15,
    purchasePrice: 220.45,
    purchaseDate: "2023-08-05",
    currentPrice: 332.18,
  },
  {
    id: 5,
    ticker: "AMZN",
    name: "Amazon.com Inc.",
    class: "Stock",
    accountType: "Retirement",
    quantity: 10,
    purchasePrice: 2950.12,
    purchaseDate: "2023-07-12",
    currentPrice: 3320.45,
  },
  {
    id: 6,
    ticker: "ETH",
    name: "Ethereum",
    class: "Crypto",
    accountType: "Crypto Wallet",
    quantity: 1.5,
    purchasePrice: 1850.75,
    purchaseDate: "2023-10-30",
    currentPrice: 3456.78,
  },
  {
    id: 7,
    ticker: "VTI",
    name: "Vanguard Total Stock Market ETF",
    class: "ETF",
    accountType: "Retirement",
    quantity: 45,
    purchasePrice: 195.32,
    purchaseDate: "2022-11-15",
    currentPrice: 242.15,
  }
];

// Mutates prices in place to simulate live market drift (±0.25 %)
export const mutatePricesInPlace = (rows) => {
  rows.forEach((r) => {
    const drift = 1 + (Math.random() - 0.5) * 0.005;
    r.currentPrice = +(r.currentPrice * drift).toFixed(2);
  });
};

// Asset classes for filtering
export const assetClasses = [
  { id: "stock", name: "Stock" },
  { id: "etf", name: "ETF" },
  { id: "crypto", name: "Crypto" },
  { id: "bond", name: "Bond" },
  { id: "cash", name: "Cash" }
];

// Account types for filtering
export const accountTypes = [
  { id: "brokerage", name: "Brokerage" },
  { id: "retirement", name: "Retirement" },
  { id: "crypto-wallet", name: "Crypto Wallet" },
  { id: "savings", name: "Savings" }
];

// Portfolio summary data
export const portfolioSummary = {
  totalValue: 112950.50,
  totalGainLoss: 24387.23,
  totalGainLossPercent: 27.52,
  assetAllocation: [
    { name: "Stocks", value: 43.9 },
    { name: "ETFs", value: 45.6 },
    { name: "Crypto", value: 6.1 },
    { name: "Cash", value: 4.4 }
  ]
};

import React from 'react';
import clsx from 'clsx';

/**
 * Individual asset row component for the holdings table
 */
const AssetRow = ({ asset }) => {
  const isPositive = asset.gainLoss > 0;
  const formattedGainLoss = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(asset.gainLoss);
  
  const formattedMarketValue = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(asset.marketValue);
  
  const formattedCurrentPrice = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
    minimumFractionDigits: 2
  }).format(asset.currentPrice);
  
  return (
    <tr className="border-b border-gray-700 hover:bg-gray-800/50">
      <td className="py-4 px-4">
        <div className="flex flex-col">
          <span className="font-medium text-white">{asset.ticker}</span>
          <span className="text-sm text-gray-400">{asset.name}</span>
        </div>
      </td>
      <td className="py-4 px-4 text-gray-300">{asset.assetClass}</td>
      <td className="py-4 px-4 text-gray-300">{asset.sector}</td>
      <td className="py-4 px-4 text-right text-gray-300">{asset.shares}</td>
      <td className="py-4 px-4 text-right text-gray-300">{formattedCurrentPrice}</td>
      <td className="py-4 px-4 text-right font-medium text-white">{formattedMarketValue}</td>
      <td className="py-4 px-4 text-right">
        <div className="flex flex-col items-end">
          <span className={clsx(
            "font-medium",
            isPositive ? "text-green-400" : "text-red-400"
          )}>
            {formattedGainLoss}
          </span>
          <span className={clsx(
            "text-sm",
            isPositive ? "text-green-400" : "text-red-400"
          )}>
            {isPositive ? "+" : ""}{asset.gainLossPercent.toFixed(2)}%
          </span>
        </div>
      </td>
      <td className="py-4 px-4 text-right text-gray-300">{asset.allocation.toFixed(1)}%</td>
    </tr>
  );
};

export default AssetRow;

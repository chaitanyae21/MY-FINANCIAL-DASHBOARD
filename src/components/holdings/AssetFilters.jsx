import React, { useState } from 'react';
import clsx from 'clsx';
import { ChevronDown, ChevronUp, Filter, X } from 'lucide-react';
import { assetClasses, sectors } from '../../data/mockHoldingsData';

/**
 * Dropdown filter component for asset classes and sectors
 */
const AssetFilters = ({ 
  selectedAssetClasses, 
  selectedSectors, 
  showGainers,
  showLosers,
  onAssetClassChange, 
  onSectorChange,
  onToggleGainers,
  onToggleLosers,
  onResetFilters
}) => {
  const [assetClassOpen, setAssetClassOpen] = useState(false);
  const [sectorOpen, setSectorOpen] = useState(false);
  
  const hasActiveFilters = selectedAssetClasses.length > 0 || 
                          selectedSectors.length > 0 ||
                          showGainers ||
                          showLosers;
  
  return (
    <div className="flex flex-wrap gap-2 items-center">
      {/* Asset Class Filter */}
      <div className="relative">
        <button
          onClick={() => {
            setAssetClassOpen(!assetClassOpen);
            setSectorOpen(false);
          }}
          className={clsx(
            "flex items-center gap-1 px-3 py-2 text-sm rounded-lg border",
            assetClassOpen || selectedAssetClasses.length > 0
              ? "bg-teal-900/30 border-teal-700 text-teal-400"
              : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
          )}
        >
          <span>Asset Class</span>
          {selectedAssetClasses.length > 0 && (
            <span className="bg-teal-700 text-white text-xs rounded-full px-1.5 py-0.5 ml-1">
              {selectedAssetClasses.length}
            </span>
          )}
          {assetClassOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {assetClassOpen && (
          <div className="absolute z-10 mt-1 w-48 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
            <div className="p-2 space-y-1">
              {assetClasses.map((assetClass) => (
                <label key={assetClass.id} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedAssetClasses.includes(assetClass.name)}
                    onChange={() => onAssetClassChange(assetClass.name)}
                    className="accent-teal-500"
                  />
                  <span className="text-sm text-gray-200">{assetClass.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Sector Filter */}
      <div className="relative">
        <button
          onClick={() => {
            setSectorOpen(!sectorOpen);
            setAssetClassOpen(false);
          }}
          className={clsx(
            "flex items-center gap-1 px-3 py-2 text-sm rounded-lg border",
            sectorOpen || selectedSectors.length > 0
              ? "bg-teal-900/30 border-teal-700 text-teal-400"
              : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
          )}
        >
          <span>Sector</span>
          {selectedSectors.length > 0 && (
            <span className="bg-teal-700 text-white text-xs rounded-full px-1.5 py-0.5 ml-1">
              {selectedSectors.length}
            </span>
          )}
          {sectorOpen ? <ChevronUp size={16} /> : <ChevronDown size={16} />}
        </button>
        
        {sectorOpen && (
          <div className="absolute z-10 mt-1 w-56 bg-gray-800 border border-gray-700 rounded-lg shadow-lg">
            <div className="p-2 space-y-1 max-h-60 overflow-y-auto">
              {sectors.map((sector) => (
                <label key={sector.id} className="flex items-center space-x-2 p-2 hover:bg-gray-700 rounded cursor-pointer">
                  <input
                    type="checkbox"
                    checked={selectedSectors.includes(sector.name)}
                    onChange={() => onSectorChange(sector.name)}
                    className="accent-teal-500"
                  />
                  <span className="text-sm text-gray-200">{sector.name}</span>
                </label>
              ))}
            </div>
          </div>
        )}
      </div>
      
      {/* Gainers/Losers Toggle */}
      <button
        onClick={onToggleGainers}
        className={clsx(
          "flex items-center gap-1 px-3 py-2 text-sm rounded-lg border",
          showGainers
            ? "bg-green-900/30 border-green-700 text-green-400"
            : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
        )}
      >
        <span>Gainers</span>
      </button>
      
      <button
        onClick={onToggleLosers}
        className={clsx(
          "flex items-center gap-1 px-3 py-2 text-sm rounded-lg border",
          showLosers
            ? "bg-red-900/30 border-red-700 text-red-400"
            : "bg-gray-800 border-gray-700 text-gray-300 hover:bg-gray-700"
        )}
      >
        <span>Losers</span>
      </button>
      
      {/* Reset Filters */}
      {hasActiveFilters && (
        <button
          onClick={onResetFilters}
          className="flex items-center gap-1 px-3 py-2 text-sm rounded-lg bg-gray-800 border border-gray-700 text-gray-300 hover:bg-gray-700"
        >
          <X size={14} />
          <span>Reset</span>
        </button>
      )}
    </div>
  );
};

export default AssetFilters;

import React, { useState, useEffect } from 'react';
import { Search } from 'lucide-react';
import useDebounce from '../../hooks/useDebounce';

/**
 * Debounced search input component for filtering holdings
 */
const SearchInput = ({ onSearch, placeholder = "Search assets..." }) => {
  const [searchTerm, setSearchTerm] = useState('');
  const debouncedSearchTerm = useDebounce(searchTerm, 300);
  
  // Effect to trigger the search when the debounced value changes
  useEffect(() => {
    onSearch(debouncedSearchTerm);
  }, [debouncedSearchTerm, onSearch]);
  
  return (
    <div className="relative">
      <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none text-gray-400">
        <Search size={18} />
      </div>
      <input
        type="text"
        value={searchTerm}
        onChange={(e) => setSearchTerm(e.target.value)}
        className="bg-gray-700 border border-gray-600 text-white text-sm rounded-lg block w-full pl-10 p-2.5 focus:ring-teal-500 focus:border-teal-500"
        placeholder={placeholder}
      />
      {searchTerm && (
        <button
          onClick={() => setSearchTerm('')}
          className="absolute inset-y-0 right-0 flex items-center pr-3 text-gray-400 hover:text-white"
        >
          <span className="text-xs">✕</span>
        </button>
      )}
    </div>
  );
};

export default SearchInput;

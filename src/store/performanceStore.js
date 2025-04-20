import { create } from 'zustand';

// Performance page state management with Zustand
const usePerformanceStore = create((set) => ({
  range: "1Y",
  benchmarks: { sp500: true, nasdaq: true },
  sortKey: "assetName",
  sortAsc: true,
  
  setRange: (r) => set({ range: r }),
  
  toggleBenchmark: (key) =>
    set((state) => ({ 
      benchmarks: { 
        ...state.benchmarks, 
        [key]: !state.benchmarks[key] 
      } 
    })),
    
  setSortKey: (key) =>
    set((state) => ({ 
      sortKey: key, 
      sortAsc: state.sortKey === key ? !state.sortAsc : true 
    })),
}));

export default usePerformanceStore;

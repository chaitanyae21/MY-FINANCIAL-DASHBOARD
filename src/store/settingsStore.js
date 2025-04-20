import { create } from 'zustand';

/**
 * Zustand Store – Global Preferences & Manual Assets
 */
const useSettingsStore = create((set, get) => ({
  // UI Preferences
  theme: localStorage.getItem("theme") || "dark", // "dark" | "light"
  currency: localStorage.getItem("currency") || "USD", // "USD" | "EUR" | "OTHER"
  widgetVisibility: JSON.parse(localStorage.getItem("widgetVisibility") || "{}") || {
    kpi: true,
    donut: true,
    line: true,
  },

  // Manual Assets
  manualAssets: JSON.parse(localStorage.getItem("manualAssets") || "[]"),

  // Actions
  setTheme: (theme) => {
    set({ theme });
    localStorage.setItem("theme", theme);
    // Apply to <html> for tailwind dark mode classes
    document.documentElement.classList.toggle("dark", theme === "dark");
  },
  setCurrency: (currency) => {
    set({ currency });
    localStorage.setItem("currency", currency);
  },
  toggleWidget: (key) => {
    const updated = { ...get().widgetVisibility, [key]: !get().widgetVisibility[key] };
    set({ widgetVisibility: updated });
    localStorage.setItem("widgetVisibility", JSON.stringify(updated));
  },
  addAsset: (asset) => {
    const list = [...get().manualAssets, asset];
    set({ manualAssets: list });
    localStorage.setItem("manualAssets", JSON.stringify(list));
  },
  updateAsset: (id, updatedAsset) => {
    const list = get().manualAssets.map((a) => (a.id === id ? { ...a, ...updatedAsset } : a));
    set({ manualAssets: list });
    localStorage.setItem("manualAssets", JSON.stringify(list));
  },
  deleteAsset: (id) => {
    const list = get().manualAssets.filter((a) => a.id !== id);
    set({ manualAssets: list });
    localStorage.setItem("manualAssets", JSON.stringify(list));
  },
  resetDashboard: () => {
    // Clear prefs & manual assets
    localStorage.removeItem("theme");
    localStorage.removeItem("currency");
    localStorage.removeItem("widgetVisibility");
    localStorage.removeItem("manualAssets");
    set({
      theme: "dark",
      currency: "USD",
      widgetVisibility: { kpi: true, donut: true, line: true },
      manualAssets: [],
    });
    document.documentElement.classList.add("dark");
  },
  importData: (jsonString) => {
    try {
      const data = JSON.parse(jsonString);
      if (data.theme) get().setTheme(data.theme);
      if (data.currency) get().setCurrency(data.currency);
      if (data.widgetVisibility) set({ widgetVisibility: data.widgetVisibility });
      if (Array.isArray(data.manualAssets)) set({ manualAssets: data.manualAssets });
      // Persist
      localStorage.setItem("widgetVisibility", JSON.stringify(get().widgetVisibility));
      localStorage.setItem("manualAssets", JSON.stringify(get().manualAssets));
    } catch (e) {
      console.error("Invalid JSON import", e);
    }
  },
  exportData: () => {
    const data = {
      theme: get().theme,
      currency: get().currency,
      widgetVisibility: get().widgetVisibility,
      manualAssets: get().manualAssets,
    };
    const blob = new Blob([JSON.stringify(data, null, 2)], { type: "application/json" });
    const url = URL.createObjectURL(blob);
    const link = document.createElement("a");
    link.href = url;
    link.download = "dashboard-settings.json";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  },
}));

export default useSettingsStore;

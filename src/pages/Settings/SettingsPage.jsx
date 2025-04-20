import React, { useEffect } from "react";
import { UploadCloud, DownloadCloud } from "lucide-react";
import { Card, CardTitle } from "../../components/ui/card";
import { Button } from "../../components/ui/button";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "../../components/ui/select";
import useSettingsStore from "../../store/settingsStore";
import PreferenceSwitch from "../../components/settings/PreferenceSwitch";
import CollapsibleSection from "../../components/settings/CollapsibleSection";
import AssetForm from "../../components/settings/AssetForm";
import Layout from "../../components/layout/Layout";

/**
 * Settings Page Component
 */
export default function SettingsPage() {
  const {
    theme,
    currency,
    widgetVisibility,
    setTheme,
    setCurrency,
    toggleWidget,
    resetDashboard,
    importData,
    exportData,
  } = useSettingsStore();

  // Auto apply theme on mount
  useEffect(() => {
    document.documentElement.classList.toggle("dark", theme === "dark");
  }, [theme]);

  // Import handler
  const handleImport = (e) => {
    const file = e.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = (evt) => {
      importData(evt.target.result);
    };
    reader.readAsText(file);
  };

  return (
    <Layout>
      <main
        className="container mx-auto px-4 py-6 space-y-6"
      >
        <h1 className="text-2xl font-semibold mb-6 text-white">Settings</h1>

      {/* Display Preferences */}
      <CollapsibleSection title="Display Preferences">
        <div className="grid md:grid-cols-2 gap-6">
          {/* Theme Toggle */}
          <Card className="p-4">
            <CardTitle className="text-sm font-medium mb-2">Theme</CardTitle>
            <PreferenceSwitch 
              label="Dark Mode" 
              value={theme === "dark"} 
              onChange={(v) => setTheme(v ? "dark" : "light")} 
            />
          </Card>

          {/* Currency Selector */}
          <Card className="p-4">
            <CardTitle className="text-sm font-medium mb-2">Currency</CardTitle>
            <Select value={currency} onValueChange={setCurrency}>
              <SelectTrigger className="w-full">
                <SelectValue placeholder="Select a currency" />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value="USD">USD – U.S. Dollar</SelectItem>
                <SelectItem value="EUR">EUR – Euro</SelectItem>
                <SelectItem value="OTHER">Other</SelectItem>
              </SelectContent>
            </Select>
          </Card>
        </div>

        {/* Widget Visibility */}
        <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-4">
          <Card className="p-4">
            <CardTitle className="text-sm font-medium mb-2">Dashboard Widgets</CardTitle>
            {Object.keys(widgetVisibility).map((key) => (
              <PreferenceSwitch
                key={key}
                label={key.toUpperCase()}
                value={widgetVisibility[key]}
                onChange={() => toggleWidget(key)}
              />
            ))}
          </Card>
        </div>
      </CollapsibleSection>

      {/* Manual Asset Management */}
      <CollapsibleSection title="Manual Asset Management">
        <AssetForm />
      </CollapsibleSection>

      {/* Advanced Settings */}
      <CollapsibleSection title="Advanced" defaultOpen={false}>
        <div className="flex flex-col md:flex-row gap-4">
          <Button variant="destructive" onClick={resetDashboard}>
            Reset Dashboard
          </Button>

          <label htmlFor="importFile" className="cursor-pointer inline-flex items-center gap-2 px-4 py-2 rounded-md bg-teal-600 text-white hover:bg-teal-700">
            <UploadCloud size={16} /> Import JSON
            <input id="importFile" type="file" accept="application/json" className="hidden" onChange={handleImport} />
          </label>

          <Button variant="secondary" onClick={exportData} className="inline-flex items-center gap-2">
            <DownloadCloud size={16} /> Export JSON
          </Button>
        </div>
      </CollapsibleSection>
      </main>
    </Layout>
  );
}

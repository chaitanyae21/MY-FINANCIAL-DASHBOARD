# Financial Dashboard Project Structure

This project has been organized according to the following structure:

```
my-financial-dashboard/
├─ package.json
├─ postcss.config.js
├─ tailwind.config.js
├─ public/
│  └─ index.html
└─ src/
   ├─ index.js
   ├─ App.jsx
   ├─ routes/
   │  └─ routes.js                  # Centralized route config with routes
   ├─ pages/
   │  ├─ FinancialDashboard.jsx
   │  ├─ Performance/
   │  │  └─ PerformancePage.jsx     # Performance Page
   │  ├─ Holdings/
   │  │  └─ HoldingsPage.jsx        # Holdings Page implementation
   │  └─ Settings/
   │     └─ SettingsPage.jsx        # NEW – Settings Page implementation
   ├─ store/
   │  ├─ performanceStore.js        # Zustand state for performance page
   │  ├─ holdingsStore.js           # Zustand store for holdings filters/sort
   │  └─ settingsStore.js           # NEW – Zustand store for settings
   ├─ data/
   │  ├─ mockPerformanceData.js     # Contains mock chart, table, and returns data
   │  └─ mockHoldingsData.js        # Mock holdings table data
   ├─ components/
   │  ├─ ui/
   │  │  ├─ button.jsx              # NEW – Reusable button component
   │  │  ├─ card.jsx                # NEW – Card component for layout
   │  │  ├─ input.jsx               # NEW – Input component
   │  │  ├─ select.jsx              # NEW – Select dropdown component
   │  │  ├─ switch.jsx              # NEW – Toggle switch component
   │  │  └─ table.jsx               # NEW – Table components
   │  ├─ performance/
   │  │  ├─ TimeFilterButtons.jsx
   │  │  └─ BenchmarkToggles.jsx
   │  ├─ holdings/
   │  │  ├─ AssetTable.jsx
   │  │  ├─ AssetRow.jsx
   │  │  ├─ AssetFilters.jsx
   │  │  ├─ FiltersBar.jsx
   │  │  └─ SearchInput.jsx
   │  └─ settings/                  # NEW – Settings components
   │     ├─ PreferenceSwitch.jsx    # NEW – Toggle switch with label
   │     ├─ CollapsibleSection.jsx  # NEW – Collapsible card section
   │     ├─ AssetForm.jsx           # NEW – Form for manual assets
   │     └─ AssetListTable.jsx      # NEW – Table for manual assets
   └─ hooks/
      └─ useDebounce.js             # Shared hook for search input
```

## Key Features Added

1. **Settings Page**
   - Complete implementation with theme switching
   - Currency selection
   - Widget visibility toggles
   - Manual asset management
   - Import/export functionality

2. **UI Components**
   - Reusable UI components following a design system approach
   - Button, Card, Input, Select, Switch, and Table components
   - Collapsible sections for organizing settings

3. **State Management**
   - Zustand store for managing settings state
   - Persistent storage using localStorage
   - Theme switching with real-time updates

4. **Manual Asset Management**
   - Add, edit, and delete manual assets
   - Form validation and data persistence
   - Tabular display of assets

## Next Steps

- Add more pages following the same pattern
- Implement proper navigation between pages
- Add more reusable UI components as needed
- Consider adding TypeScript for better type safety

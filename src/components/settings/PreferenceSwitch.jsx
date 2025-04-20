import React from "react";
import { Switch } from "../ui/switch";

/**
 * Reusable preference switch component
 */
const PreferenceSwitch = ({ label, value, onChange }) => (
  <div className="flex items-center justify-between py-2">
    <span className="text-sm font-medium text-white">{label}</span>
    <Switch checked={value} onCheckedChange={onChange} />
  </div>
);

export default PreferenceSwitch;

import React, { useState } from "react";
import { ChevronDown, Settings } from "lucide-react";
import { Card, CardHeader, CardTitle, CardContent } from "../ui/card";

/**
 * Collapsible section component for settings page
 */
const CollapsibleSection = ({ title, children, defaultOpen = true }) => {
  const [open, setOpen] = useState(defaultOpen);
  return (
    <Card className="w-full">
      <CardHeader
        onClick={() => setOpen(!open)}
        className="flex flex-row items-center justify-between cursor-pointer select-none hover:bg-gray-700/20 transition-colors p-4"
      >
        <CardTitle className="text-base font-semibold flex items-center gap-2">
          <Settings size={18} /> {title}
        </CardTitle>
        <ChevronDown
          size={18}
          className={`transition-transform ${open ? "rotate-180" : "rotate-0"}`}
        />
      </CardHeader>
      {open && <CardContent className="p-4 space-y-4">{children}</CardContent>}
    </Card>
  );
};

export default CollapsibleSection;

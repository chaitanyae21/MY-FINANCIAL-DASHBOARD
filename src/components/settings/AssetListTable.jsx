import React from "react";
import { Edit, Trash2 } from "lucide-react";
import { Button } from "../ui/button";
import { Table, TableHeader, TableBody, TableRow, TableHead, TableCell } from "../ui/table";
import useSettingsStore from "../../store/settingsStore";

/**
 * Table for displaying and managing manual assets
 */
const AssetListTable = ({ onEdit }) => {
  const { manualAssets, deleteAsset } = useSettingsStore();
  
  if (!manualAssets.length) {
    return <p className="text-sm text-gray-400">No manual assets yet.</p>;
  }
  
  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Name</TableHead>
          <TableHead>Ticker</TableHead>
          <TableHead className="text-right">Qty</TableHead>
          <TableHead className="text-right">Price ($)</TableHead>
          <TableHead>Date</TableHead>
          <TableHead className="text-right">Actions</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {manualAssets.map((asset) => (
          <TableRow key={asset.id} className="hover:bg-gray-700/40">
            <TableCell>{asset.name}</TableCell>
            <TableCell>{asset.ticker}</TableCell>
            <TableCell className="text-right">{asset.quantity}</TableCell>
            <TableCell className="text-right">{asset.price.toLocaleString()}</TableCell>
            <TableCell>{asset.date}</TableCell>
            <TableCell className="text-right flex gap-2 justify-end">
              <Button size="icon" variant="ghost" onClick={() => onEdit(asset)}>
                <Edit size={16} />
              </Button>
              <Button size="icon" variant="destructive" onClick={() => deleteAsset(asset.id)}>
                <Trash2 size={16} />
              </Button>
            </TableCell>
          </TableRow>
        ))}
      </TableBody>
    </Table>
  );
};

export default AssetListTable;

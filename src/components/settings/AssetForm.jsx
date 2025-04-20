import React, { useState } from "react";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import useSettingsStore from "../../store/settingsStore";
import AssetListTable from "./AssetListTable";

/**
 * Form for adding and editing manual assets
 */
const emptyForm = {
  id: "",
  name: "",
  ticker: "",
  quantity: "",
  price: "",
  date: "",
};

const AssetForm = () => {
  const { addAsset, updateAsset } = useSettingsStore();
  const [form, setForm] = useState(emptyForm);
  const [editing, setEditing] = useState(false);

  const handleChange = (e) => {
    setForm({ ...form, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.ticker || !form.quantity || !form.price || !form.date) return;
    if (editing) {
      updateAsset(form.id, {
        name: form.name,
        ticker: form.ticker,
        quantity: Number(form.quantity),
        price: Number(form.price),
        date: form.date,
      });
    } else {
      addAsset({
        ...form,
        id: crypto.randomUUID ? crypto.randomUUID() : Date.now().toString(),
        quantity: Number(form.quantity),
        price: Number(form.price),
      });
    }
    setForm(emptyForm);
    setEditing(false);
  };

  // Load record into form when editing
  const startEdit = (asset) => {
    setForm({ ...asset });
    setEditing(true);
  };

  const cancelEdit = () => {
    setForm(emptyForm);
    setEditing(false);
  };

  return (
    <>
      <form onSubmit={handleSubmit} className="grid grid-cols-6 gap-4">
        <Input
          name="name"
          placeholder="Asset Name"
          value={form.name}
          onChange={handleChange}
          className="col-span-2"
        />
        <Input
          name="ticker"
          placeholder="Ticker"
          value={form.ticker}
          onChange={handleChange}
          className="col-span-1"
        />
        <Input
          name="quantity"
          placeholder="Qty"
          type="number"
          value={form.quantity}
          onChange={handleChange}
          className="col-span-1"
        />
        <Input
          name="price"
          placeholder="Purchase Price"
          type="number"
          value={form.price}
          onChange={handleChange}
          className="col-span-1"
        />
        <Input
          name="date"
          placeholder="Date"
          type="date"
          value={form.date}
          onChange={handleChange}
          className="col-span-1"
        />
        <div className="col-span-6 flex gap-2 justify-end">
          {editing && (
            <Button type="button" variant="secondary" onClick={cancelEdit}>
              Cancel
            </Button>
          )}
          <Button type="submit" variant="default">
            {editing ? "Update" : "Add"}
          </Button>
        </div>
      </form>

      <AssetListTable onEdit={startEdit} />
    </>
  );
};

export default AssetForm;

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, Package } from "lucide-react";

interface InventoryFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function InventoryForm({ onClose, onSubmit }: InventoryFormProps) {
  const [formData, setFormData] = useState({
    itemName: "",
    itemCode: "",
    category: "",
    currentStock: "",
    minimumStock: "",
    purchasePrice: "",
    sellingPrice: "",
    supplier: "",
    description: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onSubmit(formData);
    onClose();
  };

  const handleChange = (field: string, value: string) => {
    setFormData(prev => ({ ...prev, [field]: value }));
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <Card className="w-full max-w-4xl max-h-[90vh] overflow-y-auto bg-white">
        <CardHeader className="flex flex-row items-center justify-between">
          <CardTitle className="flex items-center gap-2">
            <Package className="h-5 w-5 text-blue-600" />
            Form Tambah Barang
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Basic Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Informasi Dasar
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="itemName">Nama Barang *</Label>
                  <Input
                    id="itemName"
                    value={formData.itemName}
                    onChange={(e) => handleChange("itemName", e.target.value)}
                    placeholder="Oli Mesin SAE 10W-40"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="itemCode">Kode Barang *</Label>
                  <Input
                    id="itemCode"
                    value={formData.itemCode}
                    onChange={(e) => handleChange("itemCode", e.target.value)}
                    placeholder="OLI-001"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="category">Kategori *</Label>
                  <Select onValueChange={(value) => handleChange("category", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih kategori" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="oli-pelumas">Oli & Pelumas</SelectItem>
                      <SelectItem value="suku-cadang">Suku Cadang</SelectItem>
                      <SelectItem value="filter">Filter</SelectItem>
                      <SelectItem value="ban">Ban & Velg</SelectItem>
                      <SelectItem value="aki">Aki & Kelistrikan</SelectItem>
                      <SelectItem value="aksesoris">Aksesoris</SelectItem>
                      <SelectItem value="other">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="supplier">Supplier</Label>
                  <Input
                    id="supplier"
                    value={formData.supplier}
                    onChange={(e) => handleChange("supplier", e.target.value)}
                    placeholder="PT. Supplier Motor"
                  />
                </div>
              </div>
            </div>

            {/* Stock Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Informasi Stok
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="currentStock">Stok Awal *</Label>
                  <Input
                    id="currentStock"
                    type="number"
                    value={formData.currentStock}
                    onChange={(e) => handleChange("currentStock", e.target.value)}
                    placeholder="50"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="minimumStock">Minimum Stok *</Label>
                  <Input
                    id="minimumStock"
                    type="number"
                    value={formData.minimumStock}
                    onChange={(e) => handleChange("minimumStock", e.target.value)}
                    placeholder="10"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Price Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Informasi Harga
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="purchasePrice">Harga Beli *</Label>
                  <Input
                    id="purchasePrice"
                    type="number"
                    value={formData.purchasePrice}
                    onChange={(e) => handleChange("purchasePrice", e.target.value)}
                    placeholder="45000"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="sellingPrice">Harga Jual *</Label>
                  <Input
                    id="sellingPrice"
                    type="number"
                    value={formData.sellingPrice}
                    onChange={(e) => handleChange("sellingPrice", e.target.value)}
                    placeholder="65000"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Description */}
            <div>
              <Label htmlFor="description">Deskripsi</Label>
              <Textarea
                id="description"
                value={formData.description}
                onChange={(e) => handleChange("description", e.target.value)}
                placeholder="Deskripsi detail barang, spesifikasi, atau catatan khusus..."
                rows={4}
              />
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4 border-t">
              <Button type="button" variant="outline" onClick={onClose}>
                Batal
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Simpan Barang
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
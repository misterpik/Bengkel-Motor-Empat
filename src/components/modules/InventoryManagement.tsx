import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import {
  Package,
  Plus,
  Search,
  AlertTriangle,
  TrendingDown,
  Edit,
  Trash2,
} from "lucide-react";
import InventoryForm from "../forms/InventoryForm";
import { useState } from "react";

export default function InventoryManagement() {
  const [showForm, setShowForm] = useState(false);

  // Handler functions for buttons
  const handleTambahBarang = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (data: any) => {
    console.log("Inventory data submitted:", data);
    alert(`Barang baru berhasil ditambahkan!\n\nNama: ${data.itemName}\nKode: ${data.itemCode}\nKategori: ${data.category}\nStok: ${data.currentStock}`);
  };

  const handleEditBarang = (itemId: string) => {
    alert(
      `Mengedit barang ${itemId}...\n\nFitur ini akan membuka form edit untuk mengubah data barang.`,
    );
    console.log(`Editing item ${itemId}`);
  };

  const handleHapusBarang = (itemId: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus barang ${itemId}?`)) {
      alert(`Barang ${itemId} berhasil dihapus!`);
      console.log(`Deleting item ${itemId}`);
    }
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Manajemen Inventori
            </h1>
            <p className="text-gray-600">Kelola stok suku cadang dan barang</p>
          </div>
          <Button
            onClick={handleTambahBarang}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Tambah Barang
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Barang
              </CardTitle>
              <Package className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-gray-900">156</div>
              <p className="text-xs text-gray-500 mt-1">Jenis barang</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Stok Menipis
              </CardTitle>
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-red-600">5</div>
              <p className="text-xs text-red-600 mt-1">
                Perlu segera diisi ulang
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Nilai Inventori
              </CardTitle>
              <TrendingDown className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-gray-900">
                Rp 45.2M
              </div>
              <p className="text-xs text-gray-500 mt-1">Total nilai stok</p>
            </CardContent>
          </Card>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6 bg-white">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Cari barang berdasarkan nama, kode, atau kategori..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">Filter</Button>
            </div>
          </CardContent>
        </Card>

        {/* Inventory List */}
        <div className="grid gap-4">
          {/* Low Stock Item */}
          <Card className="bg-white border-l-4 border-l-red-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      Oli Mesin SAE 10W-40
                    </h3>
                    <Badge className="bg-red-100 text-red-800">
                      Stok Menipis
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Kode: OLI-001 | Kategori: Oli & Pelumas
                  </p>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Stok Saat Ini</p>
                      <p className="font-medium text-red-600">3 liter</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Minimum Stok</p>
                      <p className="font-medium">10 liter</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Harga Beli</p>
                      <p className="font-medium">Rp 45,000</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Harga Jual</p>
                      <p className="font-medium">Rp 65,000</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditBarang("OLI-001")}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleHapusBarang("OLI-001")}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Normal Stock Item */}
          <Card className="bg-white border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      Kampas Rem Depan Honda Beat
                    </h3>
                    <Badge className="bg-green-100 text-green-800">
                      Stok Aman
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Kode: KRM-001 | Kategori: Suku Cadang
                  </p>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Stok Saat Ini</p>
                      <p className="font-medium text-green-600">25 set</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Minimum Stok</p>
                      <p className="font-medium">5 set</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Harga Beli</p>
                      <p className="font-medium">Rp 85,000</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Harga Jual</p>
                      <p className="font-medium">Rp 125,000</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditBarang("KRM-001")}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleHapusBarang("KRM-001")}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Another Normal Stock Item */}
          <Card className="bg-white border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-2">
                    <h3 className="font-semibold text-gray-900">
                      Filter Udara Yamaha Mio
                    </h3>
                    <Badge className="bg-blue-100 text-blue-800">
                      Stok Cukup
                    </Badge>
                  </div>
                  <p className="text-sm text-gray-600 mb-2">
                    Kode: FLT-002 | Kategori: Filter
                  </p>
                  <div className="grid grid-cols-4 gap-4 text-sm">
                    <div>
                      <p className="text-gray-500">Stok Saat Ini</p>
                      <p className="font-medium text-blue-600">15 pcs</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Minimum Stok</p>
                      <p className="font-medium">8 pcs</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Harga Beli</p>
                      <p className="font-medium">Rp 25,000</p>
                    </div>
                    <div>
                      <p className="text-gray-500">Harga Jual</p>
                      <p className="font-medium">Rp 40,000</p>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditBarang("FLT-002")}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleHapusBarang("FLT-002")}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Inventory Form Modal */}
        {showForm && (
          <InventoryForm
            onClose={() => setShowForm(false)}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
}
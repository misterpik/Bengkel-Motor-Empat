import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Wrench, User, Car, Plus, Search, FileText } from "lucide-react";
import ServiceForm from "../forms/ServiceForm";
import { useState } from "react";

export default function ServiceManagement() {
  const [showForm, setShowForm] = useState(false);

  // Handler functions for buttons
  const handleServisBaru = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (data: any) => {
    console.log("Service data submitted:", data);
    alert(`Servis baru berhasil dibuat!\n\nPelanggan: ${data.customerName}\nKendaraan: ${data.vehicleBrand} ${data.vehicleModel}\nNomor Polisi: ${data.licensePlate}`);
  };

  const handleDetail = (serviceId: string) => {
    alert(`Membuka detail servis ${serviceId}...\n\nFitur ini akan menampilkan detail lengkap servis termasuk riwayat perbaikan dan pembayaran.`);
    console.log(`Opening service detail for ${serviceId}`);
  };

  const handleSelesai = (serviceId: string) => {
    alert(`Menyelesaikan servis ${serviceId}...\n\nFitur ini akan menandai servis sebagai selesai dan membuat invoice final.`);
    console.log(`Completing service ${serviceId}`);
  };

  const handleLanjutkan = (serviceId: string) => {
    alert(`Melanjutkan servis ${serviceId}...\n\nFitur ini akan melanjutkan servis yang tertunda karena menunggu suku cadang.`);
    console.log(`Continuing service ${serviceId}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Manajemen Servis
            </h1>
            <p className="text-gray-600">
              Kelola servis kendaraan dan transaksi
            </p>
          </div>
          <Button 
            onClick={handleServisBaru}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Servis Baru
          </Button>
        </div>

        {/* Search and Filter */}
        <Card className="mb-6 bg-white">
          <CardContent className="pt-6">
            <div className="flex gap-4">
              <div className="flex-1">
                <div className="relative">
                  <Search className="absolute left-3 top-3 h-4 w-4 text-gray-400" />
                  <Input
                    placeholder="Cari berdasarkan nomor polisi, nama pelanggan..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">Filter</Button>
            </div>
          </CardContent>
        </Card>

        {/* Service List */}
        <div className="grid gap-6">
          {/* Active Service */}
          <Card className="bg-white border-l-4 border-l-blue-500">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Wrench className="h-5 w-5 text-blue-600" />
                    Servis #SRV-001
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    Dibuat: 15 Jan 2025, 09:00
                  </p>
                </div>
                <Badge className="bg-blue-100 text-blue-800">
                  Sedang Dikerjakan
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Data Pelanggan
                  </h4>
                  <p className="text-sm text-gray-600">Budi Santoso</p>
                  <p className="text-sm text-gray-600">0812-3456-7890</p>
                  <p className="text-sm text-gray-600">budi@email.com</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Data Kendaraan
                  </h4>
                  <p className="text-sm text-gray-600">Honda Beat 2020</p>
                  <p className="text-sm text-gray-600">B 1234 ABC</p>
                  <p className="text-sm text-gray-600">Mesin: 110cc</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Jenis Servis
                  </h4>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">• Ganti oli mesin</p>
                    <p className="text-sm text-gray-600">• Servis rutin</p>
                    <p className="text-sm text-gray-600">• Cek rem</p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Total Estimasi</p>
                    <p className="text-lg font-semibold text-gray-900">
                      Rp 150,000
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDetail("SRV-001")}
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      Detail
                    </Button>
                    <Button
                      size="sm"
                      className="bg-green-600 hover:bg-green-700"
                      onClick={() => handleSelesai("SRV-001")}
                    >
                      Selesai
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Waiting Service */}
          <Card className="bg-white border-l-4 border-l-orange-500">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Wrench className="h-5 w-5 text-orange-600" />
                    Servis #SRV-002
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    Dibuat: 15 Jan 2025, 11:30
                  </p>
                </div>
                <Badge className="bg-orange-100 text-orange-800">
                  Menunggu Suku Cadang
                </Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Data Pelanggan
                  </h4>
                  <p className="text-sm text-gray-600">Siti Aminah</p>
                  <p className="text-sm text-gray-600">0813-7890-1234</p>
                  <p className="text-sm text-gray-600">siti@email.com</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Data Kendaraan
                  </h4>
                  <p className="text-sm text-gray-600">Yamaha Mio 2019</p>
                  <p className="text-sm text-gray-600">B 5678 DEF</p>
                  <p className="text-sm text-gray-600">Mesin: 125cc</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Jenis Servis
                  </h4>
                  <div className="space-y-1">
                    <p className="text-sm text-gray-600">• Ganti kampas rem</p>
                    <p className="text-sm text-gray-600">
                      • Perbaikan sistem rem
                    </p>
                    <p className="text-sm text-orange-600">
                      • Menunggu: Kampas rem depan
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-6 pt-4 border-t border-gray-200">
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-600">Total Estimasi</p>
                    <p className="text-lg font-semibold text-gray-900">
                      Rp 275,000
                    </p>
                  </div>
                  <div className="flex gap-2">
                    <Button 
                      variant="outline" 
                      size="sm"
                      onClick={() => handleDetail("SRV-002")}
                    >
                      <FileText className="h-4 w-4 mr-1" />
                      Detail
                    </Button>
                    <Button 
                      size="sm" 
                      className="bg-blue-600 hover:bg-blue-700"
                      onClick={() => handleLanjutkan("SRV-002")}
                    >
                      Lanjutkan
                    </Button>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Completed Service */}
          <Card className="bg-white border-l-4 border-l-green-500">
            <CardHeader>
              <div className="flex justify-between items-start">
                <div>
                  <CardTitle className="flex items-center gap-2 text-lg">
                    <Wrench className="h-5 w-5 text-green-600" />
                    Servis #SRV-003
                  </CardTitle>
                  <p className="text-sm text-gray-600 mt-1">
                    Selesai: 14 Jan 2025, 16:00
                  </p>
                </div>
                <Badge className="bg-green-100 text-green-800">Selesai</Badge>
              </div>
            </CardHeader>
            <CardContent>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <User className="h-4 w-4" />
                    Data Pelanggan
                  </h4>
                  <p className="text-sm text-gray-600">Ahmad Rizki</p>
                  <p className="text-sm text-gray-600">0814-5678-9012</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2 flex items-center gap-2">
                    <Car className="h-4 w-4" />
                    Data Kendaraan
                  </h4>
                  <p className="text-sm text-gray-600">Suzuki Satria 2021</p>
                  <p className="text-sm text-gray-600">B 9012 GHI</p>
                </div>

                <div>
                  <h4 className="font-medium text-gray-900 mb-2">
                    Total Pembayaran
                  </h4>
                  <p className="text-lg font-semibold text-green-600">
                    Rp 320,000
                  </p>
                  <p className="text-sm text-gray-600">Tunai</p>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Service Form Modal */}
        {showForm && (
          <ServiceForm
            onClose={() => setShowForm(false)}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
}
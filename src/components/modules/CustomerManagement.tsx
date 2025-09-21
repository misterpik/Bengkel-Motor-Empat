import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Input } from "@/components/ui/input";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  Users,
  Plus,
  Search,
  Phone,
  Mail,
  MapPin,
  Car,
  Edit,
  Trash2,
  History,
} from "lucide-react";
import CustomerForm from "../forms/CustomerForm";
import { useState } from "react";

export default function CustomerManagement() {
  const [showForm, setShowForm] = useState(false);

  // Handler functions for buttons
  const handleTambahPelanggan = () => {
    setShowForm(true);
  };

  const handleFormSubmit = (data: any) => {
    console.log("Customer data submitted:", data);
    alert(`Pelanggan baru berhasil ditambahkan!\n\nNama: ${data.customerName}\nTelepon: ${data.customerPhone}\nKendaraan: ${data.vehicleBrand} ${data.vehicleModel}\nNomor Polisi: ${data.licensePlate}`);
  };

  const handleEditPelanggan = (customerId: string) => {
    alert(
      `Mengedit data pelanggan ${customerId}...\n\nFitur ini akan membuka form edit untuk mengubah data pelanggan.`,
    );
    console.log(`Editing customer ${customerId}`);
  };

  const handleHapusPelanggan = (customerId: string) => {
    if (confirm(`Apakah Anda yakin ingin menghapus pelanggan ${customerId}?`)) {
      alert(`Pelanggan ${customerId} berhasil dihapus!`);
      console.log(`Deleting customer ${customerId}`);
    }
  };

  const handleRiwayatServis = (customerId: string) => {
    alert(
      `Membuka riwayat servis pelanggan ${customerId}...\n\nFitur ini akan menampilkan semua riwayat servis kendaraan pelanggan.`,
    );
    console.log(`Opening service history for customer ${customerId}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Data Pelanggan
            </h1>
            <p className="text-gray-600">
              Kelola data pelanggan dan riwayat servis
            </p>
          </div>
          <Button
            onClick={handleTambahPelanggan}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <Plus className="h-4 w-4 mr-2" />
            Tambah Pelanggan
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-3 mb-8">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Total Pelanggan
              </CardTitle>
              <Users className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-gray-900">248</div>
              <p className="text-xs text-gray-500 mt-1">Pelanggan terdaftar</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Pelanggan Baru
              </CardTitle>
              <Plus className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-gray-900">12</div>
              <p className="text-xs text-green-600 mt-1">Bulan ini</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Pelanggan Aktif
              </CardTitle>
              <Car className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-gray-900">89</div>
              <p className="text-xs text-gray-500 mt-1">Servis dalam 30 hari</p>
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
                    placeholder="Cari pelanggan berdasarkan nama, nomor telepon, atau nomor polisi..."
                    className="pl-10"
                  />
                </div>
              </div>
              <Button variant="outline">Filter</Button>
            </div>
          </CardContent>
        </Card>

        {/* Customer List */}
        <div className="grid gap-4">
          {/* Active Customer */}
          <Card className="bg-white border-l-4 border-l-green-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 flex-1">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=budi" />
                    <AvatarFallback>BS</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">
                        Budi Santoso
                      </h3>
                      <Badge className="bg-green-100 text-green-800">
                        Pelanggan Setia
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <p className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-4 w-4" />
                          0812-3456-7890
                        </p>
                        <p className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-4 w-4" />
                          budi@email.com
                        </p>
                        <p className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          Jakarta Selatan
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="flex items-center gap-2 text-gray-600">
                          <Car className="h-4 w-4" />
                          Honda Beat 2020 - B 1234 ABC
                        </p>
                        <p className="text-gray-600">Total Servis: 8 kali</p>
                        <p className="text-gray-600">Terakhir: 15 Jan 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRiwayatServis("CUST-001")}
                  >
                    <History className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditPelanggan("CUST-001")}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleHapusPelanggan("CUST-001")}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Regular Customer */}
          <Card className="bg-white border-l-4 border-l-blue-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 flex-1">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=siti" />
                    <AvatarFallback>SA</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">
                        Siti Aminah
                      </h3>
                      <Badge className="bg-blue-100 text-blue-800">
                        Pelanggan Reguler
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <p className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-4 w-4" />
                          0813-7890-1234
                        </p>
                        <p className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-4 w-4" />
                          siti@email.com
                        </p>
                        <p className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          Jakarta Timur
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="flex items-center gap-2 text-gray-600">
                          <Car className="h-4 w-4" />
                          Yamaha Mio 2019 - B 5678 DEF
                        </p>
                        <p className="text-gray-600">Total Servis: 4 kali</p>
                        <p className="text-gray-600">Terakhir: 10 Jan 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRiwayatServis("CUST-002")}
                  >
                    <History className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditPelanggan("CUST-002")}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleHapusPelanggan("CUST-002")}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* New Customer */}
          <Card className="bg-white border-l-4 border-l-purple-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 flex-1">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=ahmad" />
                    <AvatarFallback>AR</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">
                        Ahmad Rizki
                      </h3>
                      <Badge className="bg-purple-100 text-purple-800">
                        Pelanggan Baru
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <p className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-4 w-4" />
                          0814-5678-9012
                        </p>
                        <p className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-4 w-4" />
                          ahmad@email.com
                        </p>
                        <p className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          Jakarta Barat
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="flex items-center gap-2 text-gray-600">
                          <Car className="h-4 w-4" />
                          Suzuki Satria 2021 - B 9012 GHI
                        </p>
                        <p className="text-gray-600">Total Servis: 1 kali</p>
                        <p className="text-gray-600">Terakhir: 14 Jan 2025</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRiwayatServis("CUST-003")}
                  >
                    <History className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditPelanggan("CUST-003")}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleHapusPelanggan("CUST-003")}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>

          {/* Another Customer */}
          <Card className="bg-white border-l-4 border-l-gray-500">
            <CardContent className="pt-6">
              <div className="flex justify-between items-start">
                <div className="flex gap-4 flex-1">
                  <Avatar className="h-12 w-12">
                    <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=dewi" />
                    <AvatarFallback>DL</AvatarFallback>
                  </Avatar>
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-2">
                      <h3 className="font-semibold text-gray-900">
                        Dewi Lestari
                      </h3>
                      <Badge className="bg-gray-100 text-gray-800">
                        Tidak Aktif
                      </Badge>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-sm">
                      <div className="space-y-1">
                        <p className="flex items-center gap-2 text-gray-600">
                          <Phone className="h-4 w-4" />
                          0815-2345-6789
                        </p>
                        <p className="flex items-center gap-2 text-gray-600">
                          <Mail className="h-4 w-4" />
                          dewi@email.com
                        </p>
                        <p className="flex items-center gap-2 text-gray-600">
                          <MapPin className="h-4 w-4" />
                          Jakarta Utara
                        </p>
                      </div>
                      <div className="space-y-1">
                        <p className="flex items-center gap-2 text-gray-600">
                          <Car className="h-4 w-4" />
                          Honda Vario 2018 - B 3456 JKL
                        </p>
                        <p className="text-gray-600">Total Servis: 6 kali</p>
                        <p className="text-gray-600">Terakhir: 15 Nov 2024</p>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="flex gap-2">
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleRiwayatServis("CUST-004")}
                  >
                    <History className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleEditPelanggan("CUST-004")}
                  >
                    <Edit className="h-4 w-4" />
                  </Button>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleHapusPelanggan("CUST-004")}
                  >
                    <Trash2 className="h-4 w-4" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>

        {/* Customer Form Modal */}
        {showForm && (
          <CustomerForm
            onClose={() => setShowForm(false)}
            onSubmit={handleFormSubmit}
          />
        )}
      </div>
    </div>
  );
}
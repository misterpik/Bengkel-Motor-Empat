import React, { useState, useEffect } from "react";
import TopNavigation from "../dashboard/layout/TopNavigation";
import Sidebar from "../dashboard/layout/Sidebar";
import DashboardGrid from "../dashboard/DashboardGrid";
import { Button } from "@/components/ui/button";
import { RefreshCw, Plus, FileText, Package, Users } from "lucide-react";
import { cn } from "@/lib/utils";

const Home = () => {
  const [loading, setLoading] = useState(false);
  const [activeSection, setActiveSection] = useState("Dashboard");
  
  // Function to trigger loading state for demonstration
  const handleRefresh = () => {
    setLoading(true);
    // Reset loading after 2 seconds
    setTimeout(() => {
      setLoading(false);
    }, 2000);
  };

  const handleSidebarClick = (section: string) => {
    setActiveSection(section);
    // Here you would typically navigate to different sections
    console.log(`Navigating to: ${section}`);
  };

  // Handler functions for buttons
  const handleServisBaru = () => {
    alert("Membuka form Servis Baru...\n\nFitur ini akan mengarahkan ke halaman pembuatan servis baru dengan form input data pelanggan dan kendaraan.");
    console.log("Opening new service form");
  };

  const handleTambahBarang = () => {
    alert("Membuka form Tambah Barang...\n\nFitur ini akan mengarahkan ke halaman penambahan barang/suku cadang baru ke inventori.");
    console.log("Opening add item form");
  };

  const handleLihatLaporan = () => {
    alert("Membuka halaman Laporan Keuangan...\n\nFitur ini akan menampilkan berbagai laporan seperti laba-rugi, arus kas, dan laporan penjualan.");
    console.log("Opening financial reports");
  };

  const handleTambahPelanggan = () => {
    alert("Membuka form Tambah Pelanggan...\n\nFitur ini akan mengarahkan ke halaman pendaftaran pelanggan baru dengan data lengkap.");
    console.log("Opening add customer form");
  };

  const renderMainContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <DashboardGrid isLoading={loading} />;
      case "Servis & Transaksi":
        return (
          <div className="p-6">
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Modul Servis & Transaksi</h2>
              <p className="text-gray-600 mb-6">Kelola servis kendaraan dan transaksi pelanggan</p>
              <Button 
                onClick={handleServisBaru}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Servis Baru
              </Button>
            </div>
          </div>
        );
      case "Manajemen Inventori":
        return (
          <div className="p-6">
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Manajemen Inventori</h2>
              <p className="text-gray-600 mb-6">Kelola stok suku cadang dan barang</p>
              <Button 
                onClick={handleTambahBarang}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Tambah Barang
              </Button>
            </div>
          </div>
        );
      case "Laporan Keuangan":
        return (
          <div className="p-6">
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Laporan Keuangan</h2>
              <p className="text-gray-600 mb-6">Analisis keuangan dan laporan bisnis</p>
              <Button 
                onClick={handleLihatLaporan}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <FileText className="h-4 w-4 mr-2" />
                Lihat Laporan
              </Button>
            </div>
          </div>
        );
      case "Pelanggan":
        return (
          <div className="p-6">
            <div className="text-center py-20">
              <h2 className="text-2xl font-semibold text-gray-900 mb-4">Data Pelanggan</h2>
              <p className="text-gray-600 mb-6">Kelola data pelanggan dan riwayat servis</p>
              <Button 
                onClick={handleTambahPelanggan}
                className="bg-blue-600 hover:bg-blue-700 text-white"
              >
                <Plus className="h-4 w-4 mr-2" />
                Tambah Pelanggan
              </Button>
            </div>
          </div>
        );
      default:
        return <DashboardGrid isLoading={loading} />;
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <TopNavigation />
      <div className="flex h-[calc(100vh-64px)] mt-16">
        <Sidebar activeItem={activeSection} onItemClick={handleSidebarClick} />
        <main className="flex-1 overflow-auto">
          <div className="container mx-auto px-6 pt-4 pb-2 flex justify-between items-center">
            <div>
              <h1 className="text-2xl font-bold text-gray-900">{activeSection}</h1>
              <p className="text-gray-600 text-sm">
                {activeSection === "Dashboard" && "Ringkasan aktivitas bengkel hari ini"}
                {activeSection === "Servis & Transaksi" && "Kelola servis kendaraan dan transaksi"}
                {activeSection === "Manajemen Inventori" && "Kelola stok suku cadang dan barang"}
                {activeSection === "Laporan Keuangan" && "Analisis keuangan dan laporan bisnis"}
                {activeSection === "Pelanggan" && "Kelola data pelanggan dan riwayat servis"}
              </p>
            </div>
            <Button 
              onClick={handleRefresh} 
              className="bg-blue-600 hover:bg-blue-700 text-white rounded-full px-4 h-9 shadow-sm transition-colors flex items-center gap-2"
            >
              <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
              {loading ? "Loading..." : "Refresh"}
            </Button>
          </div>
          <div className={cn(
            "transition-all duration-300 ease-in-out"
          )}>
            {renderMainContent()}
          </div>
        </main>
      </div>
    </div>
  );
};

export default Home;
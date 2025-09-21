import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BarChart3,
  TrendingUp,
  DollarSign,
  FileText,
  Download,
  Calendar,
  PieChart,
  TrendingDown,
} from "lucide-react";

export default function FinancialReports() {
  // Handler functions for buttons
  const handleLihatLaporan = () => {
    alert(
      "Membuka halaman Laporan Keuangan...\n\nFitur ini akan menampilkan berbagai laporan seperti laba-rugi, arus kas, dan laporan penjualan.",
    );
    console.log("Opening financial reports");
  };

  const handleDownloadLaporan = (reportType: string) => {
    alert(
      `Mengunduh laporan ${reportType}...\n\nFitur ini akan mengunduh laporan dalam format PDF atau Excel.`,
    );
    console.log(`Downloading ${reportType} report`);
  };

  const handleGenerateReport = (period: string) => {
    alert(
      `Membuat laporan periode ${period}...\n\nFitur ini akan menghasilkan laporan keuangan untuk periode yang dipilih.`,
    );
    console.log(`Generating report for ${period}`);
  };

  return (
    <div className="bg-gray-50 min-h-screen p-6">
      <div className="max-w-6xl mx-auto">
        {/* Header */}
        <div className="flex justify-between items-center mb-8">
          <div>
            <h1 className="text-3xl font-bold text-gray-900 mb-2">
              Laporan Keuangan
            </h1>
            <p className="text-gray-600">
              Analisis keuangan dan laporan bisnis
            </p>
          </div>
          <Button
            onClick={handleLihatLaporan}
            className="bg-blue-600 hover:bg-blue-700 text-white"
          >
            <FileText className="h-4 w-4 mr-2" />
            Lihat Laporan
          </Button>
        </div>

        {/* Summary Cards */}
        <div className="grid gap-6 md:grid-cols-4 mb-8">
          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Pendapatan Bulan Ini
              </CardTitle>
              <DollarSign className="h-4 w-4 text-green-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-gray-900">
                Rp 45.2M
              </div>
              <p className="text-xs text-green-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +15% dari bulan lalu
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Pengeluaran Bulan Ini
              </CardTitle>
              <TrendingDown className="h-4 w-4 text-red-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-gray-900">
                Rp 28.5M
              </div>
              <p className="text-xs text-red-600 flex items-center mt-1">
                <TrendingUp className="h-3 w-3 mr-1" />
                +8% dari bulan lalu
              </p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Laba Bersih
              </CardTitle>
              <BarChart3 className="h-4 w-4 text-blue-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-green-600">
                Rp 16.7M
              </div>
              <p className="text-xs text-green-600 mt-1">Margin: 37%</p>
            </CardContent>
          </Card>

          <Card className="bg-white">
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium text-gray-600">
                Transaksi Bulan Ini
              </CardTitle>
              <PieChart className="h-4 w-4 text-purple-500" />
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-semibold text-gray-900">342</div>
              <p className="text-xs text-gray-500 mt-1">Rata-rata Rp 132K</p>
            </CardContent>
          </Card>
        </div>

        {/* Reports Tabs */}
        <Tabs defaultValue="daily" className="space-y-6">
          <TabsList className="grid w-full grid-cols-4">
            <TabsTrigger value="daily">Harian</TabsTrigger>
            <TabsTrigger value="monthly">Bulanan</TabsTrigger>
            <TabsTrigger value="profit-loss">Laba-Rugi</TabsTrigger>
            <TabsTrigger value="cash-flow">Arus Kas</TabsTrigger>
          </TabsList>

          <TabsContent value="daily" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <Calendar className="h-5 w-5 text-blue-600" />
                    Laporan Harian
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownloadLaporan("Harian")}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      date: "15 Jan 2025",
                      revenue: 1850000,
                      transactions: 12,
                      profit: 680000,
                    },
                    {
                      date: "14 Jan 2025",
                      revenue: 2100000,
                      transactions: 15,
                      profit: 780000,
                    },
                    {
                      date: "13 Jan 2025",
                      revenue: 1650000,
                      transactions: 9,
                      profit: 590000,
                    },
                    {
                      date: "12 Jan 2025",
                      revenue: 1950000,
                      transactions: 13,
                      profit: 720000,
                    },
                    {
                      date: "11 Jan 2025",
                      revenue: 2250000,
                      transactions: 16,
                      profit: 850000,
                    },
                  ].map((day, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">{day.date}</p>
                        <p className="text-sm text-gray-600">
                          {day.transactions} transaksi
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          Rp {day.revenue.toLocaleString("id-ID")}
                        </p>
                        <p className="text-sm text-green-600">
                          Laba: Rp {day.profit.toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="monthly" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <BarChart3 className="h-5 w-5 text-blue-600" />
                    Laporan Bulanan
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownloadLaporan("Bulanan")}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  {[
                    {
                      month: "Januari 2025",
                      revenue: 45200000,
                      transactions: 342,
                      profit: 16700000,
                    },
                    {
                      month: "Desember 2024",
                      revenue: 39800000,
                      transactions: 298,
                      profit: 14200000,
                    },
                    {
                      month: "November 2024",
                      revenue: 42100000,
                      transactions: 315,
                      profit: 15800000,
                    },
                    {
                      month: "Oktober 2024",
                      revenue: 38500000,
                      transactions: 287,
                      profit: 13900000,
                    },
                  ].map((month, index) => (
                    <div
                      key={index}
                      className="flex justify-between items-center p-4 bg-gray-50 rounded-lg"
                    >
                      <div>
                        <p className="font-medium text-gray-900">
                          {month.month}
                        </p>
                        <p className="text-sm text-gray-600">
                          {month.transactions} transaksi
                        </p>
                      </div>
                      <div className="text-right">
                        <p className="font-semibold text-gray-900">
                          Rp {month.revenue.toLocaleString("id-ID")}
                        </p>
                        <p className="text-sm text-green-600">
                          Laba: Rp {month.profit.toLocaleString("id-ID")}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="profit-loss" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Laporan Laba-Rugi
                  </CardTitle>
                  <div className="flex gap-2">
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleGenerateReport("Laba-Rugi")}
                    >
                      Generate
                    </Button>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => handleDownloadLaporan("Laba-Rugi")}
                    >
                      <Download className="h-4 w-4 mr-1" />
                      Download
                    </Button>
                  </div>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Pendapatan
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Jasa Servis</span>
                        <span className="font-medium">Rp 28,500,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Penjualan Suku Cadang
                        </span>
                        <span className="font-medium">Rp 16,700,000</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold">Total Pendapatan</span>
                        <span className="font-semibold text-green-600">
                          Rp 45,200,000
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Pengeluaran
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Pembelian Suku Cadang
                        </span>
                        <span className="font-medium">Rp 18,200,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gaji Karyawan</span>
                        <span className="font-medium">Rp 6,500,000</span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Operasional</span>
                        <span className="font-medium">Rp 3,800,000</span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold">Total Pengeluaran</span>
                        <span className="font-semibold text-red-600">
                          Rp 28,500,000
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Laba Bersih</span>
                      <span className="font-bold text-green-600">
                        Rp 16,700,000
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">Margin: 37%</p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="cash-flow" className="space-y-6">
            <Card className="bg-white">
              <CardHeader>
                <div className="flex justify-between items-center">
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-blue-600" />
                    Laporan Arus Kas
                  </CardTitle>
                  <Button
                    variant="outline"
                    size="sm"
                    onClick={() => handleDownloadLaporan("Arus Kas")}
                  >
                    <Download className="h-4 w-4 mr-1" />
                    Download
                  </Button>
                </div>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Kas Masuk
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">Pembayaran Tunai</span>
                        <span className="font-medium text-green-600">
                          Rp 32,400,000
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Transfer Bank</span>
                        <span className="font-medium text-green-600">
                          Rp 12,800,000
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold">Total Kas Masuk</span>
                        <span className="font-semibold text-green-600">
                          Rp 45,200,000
                        </span>
                      </div>
                    </div>
                  </div>

                  <div>
                    <h4 className="font-semibold text-gray-900 mb-3">
                      Kas Keluar
                    </h4>
                    <div className="space-y-2">
                      <div className="flex justify-between">
                        <span className="text-gray-600">
                          Pembelian Inventory
                        </span>
                        <span className="font-medium text-red-600">
                          Rp 18,200,000
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Gaji & Tunjangan</span>
                        <span className="font-medium text-red-600">
                          Rp 6,500,000
                        </span>
                      </div>
                      <div className="flex justify-between">
                        <span className="text-gray-600">Biaya Operasional</span>
                        <span className="font-medium text-red-600">
                          Rp 3,800,000
                        </span>
                      </div>
                      <div className="flex justify-between border-t pt-2">
                        <span className="font-semibold">Total Kas Keluar</span>
                        <span className="font-semibold text-red-600">
                          Rp 28,500,000
                        </span>
                      </div>
                    </div>
                  </div>

                  <div className="border-t pt-4">
                    <div className="flex justify-between text-lg">
                      <span className="font-bold">Saldo Kas Akhir</span>
                      <span className="font-bold text-blue-600">
                        Rp 16,700,000
                      </span>
                    </div>
                    <p className="text-sm text-gray-600 mt-1">
                      Per 15 Januari 2025
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import {
  ChevronRight,
  Settings,
  User,
  Wrench,
  BarChart3,
  Package,
  FileText,
  Users,
  Shield,
  Clock,
  TrendingUp,
  CheckCircle,
} from "lucide-react";
import { Link, useNavigate } from "react-router-dom";
import { useAuth } from "../../../supabase/auth";

export default function LandingPage() {
  const { user, signOut } = useAuth();

  const navigate = useNavigate();

  return (
    <div className="min-h-screen bg-white text-black">
      {/* Navigation */}
      <header className="fixed top-0 z-50 w-full bg-[rgba(255,255,255,0.95)] backdrop-blur-md border-b border-gray-200">
        <div className="max-w-7xl mx-auto flex h-16 items-center justify-between px-6">
          <div className="flex items-center space-x-2">
            <Wrench className="h-8 w-8 text-blue-600" />
            <Link to="/" className="font-bold text-xl text-gray-900">
              BengkelKu
            </Link>
          </div>
          <div className="flex items-center space-x-6">
            {user ? (
              <div className="flex items-center gap-4">
                <Link to="/dashboard">
                  <Button
                    variant="ghost"
                    className="text-sm font-medium hover:text-blue-600"
                  >
                    Dashboard
                  </Button>
                </Link>
                <DropdownMenu>
                  <DropdownMenuTrigger asChild>
                    <Avatar className="h-9 w-9 hover:cursor-pointer border-2 border-gray-200">
                      <AvatarImage
                        src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${user.email}`}
                        alt={user.email || ""}
                      />
                      <AvatarFallback>
                        {user.email?.[0].toUpperCase()}
                      </AvatarFallback>
                    </Avatar>
                  </DropdownMenuTrigger>
                  <DropdownMenuContent
                    align="end"
                    className="rounded-xl border shadow-lg w-56"
                  >
                    <DropdownMenuLabel className="text-xs text-gray-500">
                      {user.email}
                    </DropdownMenuLabel>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem className="cursor-pointer">
                      <User className="mr-2 h-4 w-4" />
                      Profil
                    </DropdownMenuItem>
                    <DropdownMenuItem className="cursor-pointer">
                      <Settings className="mr-2 h-4 w-4" />
                      Pengaturan
                    </DropdownMenuItem>
                    <DropdownMenuSeparator />
                    <DropdownMenuItem
                      className="cursor-pointer"
                      onSelect={() => signOut()}
                    >
                      Keluar
                    </DropdownMenuItem>
                  </DropdownMenuContent>
                </DropdownMenu>
              </div>
            ) : (
              <>
                <Link to="/login">
                  <Button
                    variant="ghost"
                    className="text-sm font-medium hover:text-blue-600"
                  >
                    Masuk
                  </Button>
                </Link>
                <Link to="/signup">
                  <Button className="rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm px-6 h-10">
                    Mulai Gratis
                  </Button>
                </Link>
              </>
            )}
          </div>
        </div>
      </header>

      <main className="pt-16">
        {/* Hero section */}
        <section className="py-20 px-6 text-center bg-gradient-to-br from-blue-50 to-indigo-100">
          <div className="max-w-4xl mx-auto">
            <Badge className="mb-6 bg-blue-100 text-blue-800 border-blue-200">
              Platform Multi-Tenant
            </Badge>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6 text-gray-900">
              Kelola Bengkel Motor
              <span className="text-blue-600"> Lebih Mudah</span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 mb-8 leading-relaxed">
              Platform manajemen bengkel motor berbasis web dengan sistem
              multi-tenant. Kelola servis, inventori, dan keuangan dalam satu
              aplikasi modern.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4 mb-12">
              <Link to="/signup">
                <Button className="bg-blue-600 hover:bg-blue-700 text-white px-8 py-3 text-lg rounded-full h-12">
                  Coba Gratis Sekarang
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="px-8 py-3 text-lg rounded-full h-12 border-gray-300"
              >
                Lihat Demo
              </Button>
            </div>

            {/* Hero Image Placeholder */}
            <div className="bg-white rounded-2xl shadow-2xl p-8 max-w-4xl mx-auto">
              <div className="bg-gradient-to-r from-blue-500 to-indigo-600 rounded-xl h-64 md:h-80 flex items-center justify-center">
                <div className="text-white text-center">
                  <Wrench className="h-16 w-16 mx-auto mb-4" />
                  <p className="text-xl font-semibold">Dashboard BengkelKu</p>
                  <p className="text-blue-100">Interface Modern & Responsif</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Features section */}
        <section className="py-20 px-6">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-4xl md:text-5xl font-bold tracking-tight mb-4 text-gray-900">
                Fitur Lengkap untuk Bengkel Modern
              </h2>
              <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                Semua yang Anda butuhkan untuk mengelola bengkel motor dengan
                efisien dan profesional
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="h-14 w-14 bg-blue-100 rounded-xl flex items-center justify-center mb-6">
                  <BarChart3 className="h-7 w-7 text-blue-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Dashboard Utama
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Ringkasan transaksi harian, stok yang perlu diisi ulang,
                  jadwal servis, dan grafik pendapatan
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="h-14 w-14 bg-green-100 rounded-xl flex items-center justify-center mb-6">
                  <Wrench className="h-7 w-7 text-green-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Servis & Transaksi
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pencatatan servis kendaraan, pembuatan invoice, dan pembayaran
                  dengan riwayat pelanggan
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="h-14 w-14 bg-purple-100 rounded-xl flex items-center justify-center mb-6">
                  <Package className="h-7 w-7 text-purple-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Manajemen Inventori
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pengelolaan stok suku cadang dengan notifikasi minimum dan
                  pencatatan keluar-masuk barang
                </p>
              </div>

              <div className="bg-white p-8 rounded-2xl shadow-lg border border-gray-100 hover:shadow-xl transition-shadow">
                <div className="h-14 w-14 bg-orange-100 rounded-xl flex items-center justify-center mb-6">
                  <FileText className="h-7 w-7 text-orange-600" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-gray-900">
                  Laporan Keuangan
                </h3>
                <p className="text-gray-600 leading-relaxed">
                  Pembukuan sederhana dengan laporan laba-rugi, arus kas, dan
                  ekspor data
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits section */}
        <section className="py-20 px-6 bg-gray-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-4xl font-bold tracking-tight mb-6 text-gray-900">
                  Mengapa Memilih BengkelKu?
                </h2>
                <div className="space-y-6">
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Multi-Tenant System
                      </h3>
                      <p className="text-gray-600">
                        Banyak bengkel dapat menggunakan satu platform dengan
                        data terpisah dan aman
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Interface Modern
                      </h3>
                      <p className="text-gray-600">
                        Antarmuka yang responsif dan mudah digunakan dalam
                        Bahasa Indonesia
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Akses Berbasis Role
                      </h3>
                      <p className="text-gray-600">
                        Super Admin, Admin Bengkel, dan Mekanik/Kasir dengan hak
                        akses berbeda
                      </p>
                    </div>
                  </div>
                  <div className="flex items-start space-x-4">
                    <CheckCircle className="h-6 w-6 text-green-500 mt-1 flex-shrink-0" />
                    <div>
                      <h3 className="font-semibold text-gray-900 mb-1">
                        Laporan Lengkap
                      </h3>
                      <p className="text-gray-600">
                        Analisis bisnis dengan grafik dan laporan yang dapat
                        diekspor
                      </p>
                    </div>
                  </div>
                </div>
              </div>

              <div className="bg-white rounded-2xl shadow-xl p-8">
                <div className="grid grid-cols-2 gap-6">
                  <div className="text-center p-6 bg-blue-50 rounded-xl">
                    <TrendingUp className="h-8 w-8 text-blue-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900">95%</div>
                    <div className="text-sm text-gray-600">
                      Efisiensi Meningkat
                    </div>
                  </div>
                  <div className="text-center p-6 bg-green-50 rounded-xl">
                    <Clock className="h-8 w-8 text-green-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900">50%</div>
                    <div className="text-sm text-gray-600">Waktu Hemat</div>
                  </div>
                  <div className="text-center p-6 bg-purple-50 rounded-xl">
                    <Users className="h-8 w-8 text-purple-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900">100+</div>
                    <div className="text-sm text-gray-600">
                      Bengkel Terdaftar
                    </div>
                  </div>
                  <div className="text-center p-6 bg-orange-50 rounded-xl">
                    <Shield className="h-8 w-8 text-orange-600 mx-auto mb-3" />
                    <div className="text-2xl font-bold text-gray-900">
                      99.9%
                    </div>
                    <div className="text-sm text-gray-600">Uptime</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA section */}
        <section className="py-20 px-6 bg-gradient-to-r from-blue-600 to-indigo-700 text-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Siap Modernisasi Bengkel Anda?
            </h2>
            <p className="text-xl mb-8 text-blue-100">
              Bergabunglah dengan ratusan bengkel yang sudah merasakan kemudahan
              BengkelKu
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link to="/signup">
                <Button className="bg-white text-blue-600 hover:bg-gray-100 px-8 py-3 text-lg rounded-full h-12 font-semibold">
                  Mulai Gratis 30 Hari
                  <ChevronRight className="ml-2 h-5 w-5" />
                </Button>
              </Link>
              <Button
                variant="outline"
                className="border-white text-white hover:bg-white hover:text-blue-600 px-8 py-3 text-lg rounded-full h-12"
              >
                Hubungi Sales
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="bg-gray-900 text-gray-300 py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-8">
            <div>
              <div className="flex items-center space-x-2 mb-4">
                <Wrench className="h-6 w-6 text-blue-400" />
                <span className="font-bold text-xl text-white">BengkelKu</span>
              </div>
              <p className="text-gray-400 mb-4">
                Platform manajemen bengkel motor terdepan di Indonesia dengan
                sistem multi-tenant yang aman dan modern.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Produk</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Dashboard
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Manajemen Servis
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Inventori
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Laporan Keuangan
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Dukungan</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Panduan Pengguna
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Tutorial
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    FAQ
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Hubungi Kami
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold text-white mb-4">Perusahaan</h4>
              <ul className="space-y-2">
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Tentang Kami
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Karir
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    to="/"
                    className="hover:text-blue-400 transition-colors"
                  >
                    Kontak
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="border-t border-gray-800 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-gray-400">
              © 2025 BengkelKu. Semua hak dilindungi undang-undang.
            </p>
            <div className="flex space-x-6 mt-4 md:mt-0">
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Kebijakan Privasi
              </Link>
              <Link
                to="/"
                className="text-gray-400 hover:text-blue-400 transition-colors"
              >
                Syarat Layanan
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import { 
  BarChart3, 
  TrendingUp, 
  Package, 
  Clock, 
  Users, 
  Wrench,
  DollarSign,
  AlertTriangle,
  CheckCircle,
  Calendar
} from "lucide-react";

interface ServiceCardProps {
  id: string;
  customerName: string;
  vehicleInfo: string;
  serviceType: string;
  status: 'active' | 'waiting' | 'completed';
  estimatedCost: number;
  dueTime: string;
}

interface DashboardGridProps {
  services?: ServiceCardProps[];
  isLoading?: boolean;
}

const defaultServices: ServiceCardProps[] = [
  {
    id: "SRV-001",
    customerName: "Budi Santoso",
    vehicleInfo: "Honda Beat 2020 - B 1234 ABC",
    serviceType: "Servis rutin + ganti oli",
    status: 'active',
    estimatedCost: 150000,
    dueTime: "09:00"
  },
  {
    id: "SRV-002", 
    customerName: "Siti Aminah",
    vehicleInfo: "Yamaha Mio 2019 - B 5678 DEF",
    serviceType: "Perbaikan rem",
    status: 'waiting',
    estimatedCost: 275000,
    dueTime: "11:30"
  },
  {
    id: "SRV-003",
    customerName: "Ahmad Rizki", 
    vehicleInfo: "Suzuki Satria 2021 - B 9012 GHI",
    serviceType: "Tune up mesin",
    status: 'completed',
    estimatedCost: 320000,
    dueTime: "14:00"
  }
];

const ServiceCard = ({ id, customerName, vehicleInfo, serviceType, status, estimatedCost, dueTime }: ServiceCardProps) => {
  const getStatusColor = (status: string) => {
    switch (status) {
      case 'active': return 'bg-blue-100 text-blue-800 border-blue-200';
      case 'waiting': return 'bg-orange-100 text-orange-800 border-orange-200';
      case 'completed': return 'bg-green-100 text-green-800 border-green-200';
      default: return 'bg-gray-100 text-gray-800 border-gray-200';
    }
  };

  const getStatusText = (status: string) => {
    switch (status) {
      case 'active': return 'Sedang Dikerjakan';
      case 'waiting': return 'Menunggu Suku Cadang';
      case 'completed': return 'Selesai';
      default: return 'Unknown';
    }
  };

  return (
    <Card className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm hover:shadow-md transition-all duration-200 overflow-hidden">
      <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
        <div className="flex items-center gap-2">
          <Wrench className="h-4 w-4 text-blue-600" />
          <CardTitle className="text-base font-medium text-gray-900">{id}</CardTitle>
        </div>
        <Badge className={`${getStatusColor(status)} text-xs`}>
          {getStatusText(status)}
        </Badge>
      </CardHeader>
      <CardContent>
        <div className="space-y-3">
          <div>
            <p className="font-medium text-gray-900">{customerName}</p>
            <p className="text-sm text-gray-600">{vehicleInfo}</p>
            <p className="text-sm text-gray-600">{serviceType}</p>
          </div>
          <div className="flex justify-between items-center text-sm">
            <div className="flex items-center gap-1 text-gray-500">
              <Clock className="h-4 w-4" />
              <span>{dueTime}</span>
            </div>
            <div className="font-semibold text-gray-900">
              Rp {estimatedCost.toLocaleString('id-ID')}
            </div>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};

const DashboardGrid = ({ services = defaultServices, isLoading = false }: DashboardGridProps) => {
  const [loading, setLoading] = useState(isLoading);
  
  useEffect(() => {
    if (isLoading) {
      const timer = setTimeout(() => {
        setLoading(false);
      }, 2000);
      return () => clearTimeout(timer);
    }
  }, [isLoading]);

  if (loading) {
    return (
      <div className="p-6 h-full">
        <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
          {[...Array(8)].map((_, index) => (
            <Card key={index} className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm h-[160px] flex items-center justify-center">
              <div className="flex flex-col items-center justify-center p-6">
                <div className="relative">
                  <div className="h-8 w-8 rounded-full border-4 border-gray-100 border-t-blue-500 animate-spin" />
                </div>
                <p className="mt-3 text-sm font-medium text-gray-500">Loading...</p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    );
  }
  
  return (
    <div className="p-6 h-full">
      <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4 mb-8">
        {/* Summary Cards */}
        <Card className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Transaksi Hari Ini
            </CardTitle>
            <div className="h-8 w-8 rounded-full bg-green-50 flex items-center justify-center">
              <DollarSign className="h-4 w-4 text-green-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-gray-900">Rp 2.45M</div>
            <p className="text-xs text-green-600 flex items-center mt-1">
              <TrendingUp className="h-3 w-3 mr-1" />
              +12% dari kemarin
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Servis Aktif</CardTitle>
            <div className="h-8 w-8 rounded-full bg-blue-50 flex items-center justify-center">
              <Wrench className="h-4 w-4 text-blue-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-gray-900">8</div>
            <p className="text-xs text-gray-500 mt-1">
              3 menunggu suku cadang
            </p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">Stok Menipis</CardTitle>
            <div className="h-8 w-8 rounded-full bg-red-50 flex items-center justify-center">
              <AlertTriangle className="h-4 w-4 text-red-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-red-600">5</div>
            <p className="text-xs text-red-600 mt-1">Perlu segera diisi ulang</p>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium text-gray-600">
              Pelanggan Baru
            </CardTitle>
            <div className="h-8 w-8 rounded-full bg-purple-50 flex items-center justify-center">
              <Users className="h-4 w-4 text-purple-500" />
            </div>
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-semibold text-gray-900">12</div>
            <p className="text-xs text-gray-500 mt-1">Bulan ini</p>
          </CardContent>
        </Card>
      </div>

      {/* Recent Services Section */}
      <div className="mb-6">
        <div className="flex items-center justify-between mb-4">
          <h3 className="text-lg font-semibold text-gray-900">Servis Terbaru</h3>
          <Badge variant="outline" className="text-xs">
            {services.length} servis hari ini
          </Badge>
        </div>
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>

      {/* Quick Stats */}
      <div className="grid gap-6 md:grid-cols-2">
        <Card className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <BarChart3 className="h-5 w-5 text-blue-600" />
              Pendapatan Mingguan
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              {['Senin', 'Selasa', 'Rabu', 'Kamis', 'Jumat'].map((day, index) => {
                const values = [1200000, 900000, 1500000, 1300000, 1800000];
                const maxValue = Math.max(...values);
                const percentage = (values[index] / maxValue) * 100;
                
                return (
                  <div key={day} className="flex justify-between items-center">
                    <span className="text-sm text-gray-600 w-16">{day}</span>
                    <div className="flex items-center gap-3 flex-1">
                      <div className="w-24 h-2 bg-gray-200 rounded-full overflow-hidden">
                        <div 
                          className="h-full bg-blue-600 rounded-full transition-all duration-300"
                          style={{ width: `${percentage}%` }}
                        />
                      </div>
                      <span className="text-sm font-medium text-gray-900 w-16 text-right">
                        {(values[index] / 1000000).toFixed(1)}M
                      </span>
                    </div>
                  </div>
                );
              })}
            </div>
          </CardContent>
        </Card>

        <Card className="bg-white/90 backdrop-blur-sm border border-gray-100 rounded-2xl shadow-sm overflow-hidden">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-base">
              <Clock className="h-5 w-5 text-orange-600" />
              Jadwal Hari Ini
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-3 bg-blue-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Honda Beat - B 1234 ABC</p>
                  <p className="text-sm text-gray-600">Servis rutin + ganti oli</p>
                </div>
                <div className="text-right">
                  <Badge className="bg-blue-100 text-blue-800">09:00</Badge>
                  <p className="text-xs text-gray-500 mt-1">Budi Santoso</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-orange-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Yamaha Mio - B 5678 DEF</p>
                  <p className="text-sm text-gray-600">Perbaikan rem</p>
                </div>
                <div className="text-right">
                  <Badge className="bg-orange-100 text-orange-800">11:30</Badge>
                  <p className="text-xs text-gray-500 mt-1">Siti Aminah</p>
                </div>
              </div>
              
              <div className="flex items-center justify-between p-3 bg-green-50 rounded-lg">
                <div>
                  <p className="font-medium text-gray-900">Suzuki Satria - B 9012 GHI</p>
                  <p className="text-sm text-gray-600">Tune up mesin</p>
                </div>
                <div className="text-right">
                  <Badge className="bg-green-100 text-green-800">14:00</Badge>
                  <p className="text-xs text-gray-500 mt-1">Ahmad Rizki</p>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default DashboardGrid;
import React from "react";
import { Button } from "@/components/ui/button";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";
import {
  LayoutDashboard,
  Wrench,
  Package,
  FileText,
  Users,
  Settings,
  HelpCircle,
  BarChart3,
  Calendar,
  Clock,
  AlertTriangle,
} from "lucide-react";

interface NavItem {
  icon: React.ReactNode;
  label: string;
  href?: string;
  isActive?: boolean;
  badge?: number;
}

interface SidebarProps {
  items?: NavItem[];
  activeItem?: string;
  onItemClick?: (label: string) => void;
}

const defaultNavItems: NavItem[] = [
  { icon: <LayoutDashboard size={20} />, label: "Dashboard", isActive: true },
  { icon: <Wrench size={20} />, label: "Servis & Transaksi", badge: 8 },
  { icon: <Package size={20} />, label: "Manajemen Inventori", badge: 5 },
  { icon: <FileText size={20} />, label: "Laporan Keuangan" },
  { icon: <Users size={20} />, label: "Pelanggan" },
];

const quickAccessItems: NavItem[] = [
  { icon: <Clock size={16} />, label: "Jadwal Hari Ini" },
  { icon: <AlertTriangle size={16} />, label: "Stok Menipis" },
  { icon: <BarChart3 size={16} />, label: "Laporan Harian" },
];

const defaultBottomItems: NavItem[] = [
  { icon: <Settings size={20} />, label: "Pengaturan" },
  { icon: <HelpCircle size={20} />, label: "Bantuan" },
];

const Sidebar = ({
  items = defaultNavItems,
  activeItem = "Dashboard",
  onItemClick = () => {},
}: SidebarProps) => {
  return (
    <div className="w-[280px] h-full bg-white/80 backdrop-blur-md border-r border-gray-200 flex flex-col">
      <div className="p-6">
        <h2 className="text-xl font-semibold mb-2 text-gray-900">BengkelKu</h2>
        <p className="text-sm text-gray-500">
          Manajemen Bengkel Motor
        </p>
      </div>

      <ScrollArea className="flex-1 px-4">
        <div className="space-y-1.5">
          {items.map((item) => (
            <Button
              key={item.label}
              variant={"ghost"}
              className={`w-full justify-start gap-3 h-10 rounded-xl text-sm font-medium ${item.label === activeItem ? 'bg-blue-50 text-blue-600 hover:bg-blue-100' : 'text-gray-700 hover:bg-gray-100'}`}
              onClick={() => onItemClick(item.label)}
            >
              <span className={`${item.label === activeItem ? 'text-blue-600' : 'text-gray-500'}`}>{item.icon}</span>
              <span className="flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="bg-red-500 text-white text-xs rounded-full px-2 py-0.5 min-w-[20px] h-5 flex items-center justify-center">
                  {item.badge}
                </span>
              )}
            </Button>
          ))}
        </div>

        <Separator className="my-4 bg-gray-100" />

        <div className="space-y-3">
          <h3 className="text-xs font-medium px-4 py-1 text-gray-500 uppercase tracking-wider">Akses Cepat</h3>
          {quickAccessItems.map((item) => (
            <Button 
              key={item.label}
              variant="ghost" 
              className="w-full justify-start gap-3 h-9 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100"
              onClick={() => onItemClick(item.label)}
            >
              <span className="text-gray-500">{item.icon}</span>
              {item.label}
            </Button>
          ))}
        </div>

        <Separator className="my-4 bg-gray-100" />

        <div className="space-y-3">
          <h3 className="text-xs font-medium px-4 py-1 text-gray-500 uppercase tracking-wider">Status</h3>
          <Button variant="ghost" className="w-full justify-start gap-3 h-9 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100">
            <span className="h-2 w-2 rounded-full bg-green-500"></span>
            Servis Aktif (8)
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-9 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100">
            <span className="h-2 w-2 rounded-full bg-orange-500"></span>
            Menunggu Suku Cadang (3)
          </Button>
          <Button variant="ghost" className="w-full justify-start gap-3 h-9 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100">
            <span className="h-2 w-2 rounded-full bg-red-500"></span>
            Stok Kritis (5)
          </Button>
        </div>
      </ScrollArea>

      <div className="p-4 mt-auto border-t border-gray-200">
        {defaultBottomItems.map((item) => (
          <Button
            key={item.label}
            variant="ghost"
            className="w-full justify-start gap-3 h-10 rounded-xl text-sm font-medium text-gray-700 hover:bg-gray-100 mb-1.5"
            onClick={() => onItemClick(item.label)}
          >
            <span className="text-gray-500">{item.icon}</span>
            {item.label}
          </Button>
        ))}
      </div>
    </div>
  );
};

export default Sidebar;
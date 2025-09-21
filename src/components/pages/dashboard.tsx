import React, { useState, useEffect } from "react";
import TopNavigation from "../dashboard/layout/TopNavigation";
import Sidebar from "../dashboard/layout/Sidebar";
import DashboardGrid from "../dashboard/DashboardGrid";
import ServiceManagement from "../modules/ServiceManagement";
import InventoryManagement from "../modules/InventoryManagement";
import FinancialReports from "../modules/FinancialReports";
import CustomerManagement from "../modules/CustomerManagement";
import { Button } from "@/components/ui/button";
import { RefreshCw } from "lucide-react";
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

  const renderMainContent = () => {
    switch (activeSection) {
      case "Dashboard":
        return <DashboardGrid isLoading={loading} />;
      case "Servis & Transaksi":
        return <ServiceManagement />;
      case "Manajemen Inventori":
        return <InventoryManagement />;
      case "Laporan Keuangan":
        return <FinancialReports />;
      case "Pelanggan":
        return <CustomerManagement />;
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
          {activeSection === "Dashboard" && (
            <div className="container mx-auto px-6 pt-4 pb-2 flex justify-between items-center">
              <div>
                <h1 className="text-2xl font-bold text-gray-900">{activeSection}</h1>
                <p className="text-gray-600 text-sm">
                  Ringkasan aktivitas bengkel hari ini
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
          )}
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
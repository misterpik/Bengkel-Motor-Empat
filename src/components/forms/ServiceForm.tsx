import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { X, User, Car, Wrench } from "lucide-react";

interface ServiceFormProps {
  onClose: () => void;
  onSubmit: (data: any) => void;
}

export default function ServiceForm({ onClose, onSubmit }: ServiceFormProps) {
  const [formData, setFormData] = useState({
    customerName: "",
    customerPhone: "",
    customerEmail: "",
    vehicleBrand: "",
    vehicleModel: "",
    vehicleYear: "",
    licensePlate: "",
    serviceType: "",
    description: "",
    estimatedCost: ""
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
            <Wrench className="h-5 w-5 text-blue-600" />
            Form Servis Baru
          </CardTitle>
          <Button variant="ghost" size="sm" onClick={onClose}>
            <X className="h-4 w-4" />
          </Button>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            {/* Customer Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <User className="h-5 w-5" />
                Data Pelanggan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="customerName">Nama Pelanggan *</Label>
                  <Input
                    id="customerName"
                    value={formData.customerName}
                    onChange={(e) => handleChange("customerName", e.target.value)}
                    placeholder="Masukkan nama pelanggan"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="customerPhone">Nomor Telepon *</Label>
                  <Input
                    id="customerPhone"
                    value={formData.customerPhone}
                    onChange={(e) => handleChange("customerPhone", e.target.value)}
                    placeholder="08xx-xxxx-xxxx"
                    required
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="customerEmail">Email</Label>
                  <Input
                    id="customerEmail"
                    type="email"
                    value={formData.customerEmail}
                    onChange={(e) => handleChange("customerEmail", e.target.value)}
                    placeholder="email@example.com"
                  />
                </div>
              </div>
            </div>

            {/* Vehicle Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4 flex items-center gap-2">
                <Car className="h-5 w-5" />
                Data Kendaraan
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="vehicleBrand">Merk Kendaraan *</Label>
                  <Select onValueChange={(value) => handleChange("vehicleBrand", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih merk kendaraan" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="honda">Honda</SelectItem>
                      <SelectItem value="yamaha">Yamaha</SelectItem>
                      <SelectItem value="suzuki">Suzuki</SelectItem>
                      <SelectItem value="kawasaki">Kawasaki</SelectItem>
                      <SelectItem value="other">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="vehicleModel">Model/Tipe *</Label>
                  <Input
                    id="vehicleModel"
                    value={formData.vehicleModel}
                    onChange={(e) => handleChange("vehicleModel", e.target.value)}
                    placeholder="Beat, Mio, Satria, dll"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="vehicleYear">Tahun</Label>
                  <Input
                    id="vehicleYear"
                    value={formData.vehicleYear}
                    onChange={(e) => handleChange("vehicleYear", e.target.value)}
                    placeholder="2020"
                  />
                </div>
                <div>
                  <Label htmlFor="licensePlate">Nomor Polisi *</Label>
                  <Input
                    id="licensePlate"
                    value={formData.licensePlate}
                    onChange={(e) => handleChange("licensePlate", e.target.value)}
                    placeholder="B 1234 ABC"
                    required
                  />
                </div>
              </div>
            </div>

            {/* Service Information */}
            <div>
              <h3 className="text-lg font-semibold text-gray-900 mb-4">
                Detail Servis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="serviceType">Jenis Servis *</Label>
                  <Select onValueChange={(value) => handleChange("serviceType", value)}>
                    <SelectTrigger>
                      <SelectValue placeholder="Pilih jenis servis" />
                    </SelectTrigger>
                    <SelectContent>
                      <SelectItem value="service-rutin">Servis Rutin</SelectItem>
                      <SelectItem value="ganti-oli">Ganti Oli</SelectItem>
                      <SelectItem value="tune-up">Tune Up</SelectItem>
                      <SelectItem value="perbaikan-mesin">Perbaikan Mesin</SelectItem>
                      <SelectItem value="perbaikan-rem">Perbaikan Rem</SelectItem>
                      <SelectItem value="other">Lainnya</SelectItem>
                    </SelectContent>
                  </Select>
                </div>
                <div>
                  <Label htmlFor="estimatedCost">Estimasi Biaya</Label>
                  <Input
                    id="estimatedCost"
                    value={formData.estimatedCost}
                    onChange={(e) => handleChange("estimatedCost", e.target.value)}
                    placeholder="150000"
                    type="number"
                  />
                </div>
                <div className="md:col-span-2">
                  <Label htmlFor="description">Keluhan/Deskripsi</Label>
                  <Textarea
                    id="description"
                    value={formData.description}
                    onChange={(e) => handleChange("description", e.target.value)}
                    placeholder="Jelaskan keluhan atau detail servis yang diperlukan..."
                    rows={4}
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex justify-end gap-4 pt-4 border-t">
              <Button type="button" variant="outline" onClick={onClose}>
                Batal
              </Button>
              <Button type="submit" className="bg-blue-600 hover:bg-blue-700">
                Simpan Servis
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}
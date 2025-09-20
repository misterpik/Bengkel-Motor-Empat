import { useState } from "react";
import { useAuth } from "../../../supabase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";
import { useToast } from "@/components/ui/use-toast";

export default function SignUpForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [fullName, setFullName] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signUp } = useAuth();
  const navigate = useNavigate();
  const { toast } = useToast();

  // Client-side validation
  const validateForm = () => {
    if (!fullName.trim()) {
      setError("Nama lengkap harus diisi");
      return false;
    }
    if (!email.trim()) {
      setError("Email harus diisi");
      return false;
    }
    if (password.length < 8) {
      setError("Password harus minimal 8 karakter");
      return false;
    }
    return true;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    
    // Validate form before submitting
    if (!validateForm()) {
      return;
    }

    setIsLoading(true);
    
    try {
      await signUp(email, password, fullName);
      toast({
        title: "Akun berhasil dibuat",
        description: "Silakan cek email Anda untuk verifikasi akun.",
        duration: 5000,
      });
      navigate("/login");
    } catch (error: any) {
      console.error("Signup error:", error);
      
      // Handle specific Supabase errors
      if (error.message) {
        if (error.message.includes("Password should be at least 8 characters")) {
          setError("Password harus minimal 8 karakter");
        } else if (error.message.includes("User already registered")) {
          setError("Email sudah terdaftar. Silakan gunakan email lain atau masuk ke akun Anda.");
        } else if (error.message.includes("Invalid email")) {
          setError("Format email tidak valid");
        } else if (error.message.includes("Password should contain")) {
          setError("Password harus mengandung kombinasi huruf dan angka");
        } else {
          setError(error.message);
        }
      } else {
        setError("Terjadi kesalahan saat membuat akun. Silakan coba lagi.");
      }
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <AuthLayout>
      <div className="bg-white rounded-2xl shadow-sm p-8 w-full max-w-md mx-auto">
        <form onSubmit={handleSubmit} className="space-y-6">
          <div className="space-y-2">
            <Label htmlFor="fullName" className="text-sm font-medium text-gray-700">Nama Lengkap</Label>
            <Input
              id="fullName"
              placeholder="Masukkan nama lengkap"
              value={fullName}
              onChange={(e) => setFullName(e.target.value)}
              required
              className="h-12 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="email" className="text-sm font-medium text-gray-700">Email</Label>
            <Input
              id="email"
              type="email"
              placeholder="nama@contoh.com"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
              className="h-12 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading}
            />
          </div>
          <div className="space-y-2">
            <Label htmlFor="password" className="text-sm font-medium text-gray-700">Password</Label>
            <Input
              id="password"
              type="password"
              placeholder="Buat password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-12 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading}
            />
            <p className="text-xs text-gray-500 mt-1">Password harus minimal 8 karakter</p>
          </div>
          {error && <p className="text-sm text-red-500 bg-red-50 p-3 rounded-lg">{error}</p>}
          
          <Button 
            type="submit" 
            className="w-full h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Membuat akun..." : "Buat Akun"}
          </Button>
          
          
          <div className="text-xs text-center text-gray-500 mt-6">
            Dengan membuat akun, Anda menyetujui{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Syarat Layanan
            </Link>{" "}
            dan{" "}
            <Link to="/" className="text-blue-600 hover:underline">
              Kebijakan Privasi
            </Link>
          </div>
          
          <div className="text-sm text-center text-gray-600 mt-6">
            Sudah punya akun?{" "}
            <Link to="/login" className="text-blue-600 hover:underline font-medium">
              Masuk
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
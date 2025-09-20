import { useState } from "react";
import { useAuth } from "../../../supabase/auth";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { useNavigate, Link } from "react-router-dom";
import AuthLayout from "./AuthLayout";

export default function LoginForm() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [isLoading, setIsLoading] = useState(false);
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError("");
    setIsLoading(true);
    
    try {
      await signIn(email, password);
      navigate("/dashboard");
    } catch (error: any) {
      console.error("Login error:", error);
      
      // Handle specific Supabase errors
      if (error.message) {
        if (error.message.includes("Invalid login credentials")) {
          setError("Email atau password salah");
        } else if (error.message.includes("Email not confirmed")) {
          setError("Silakan verifikasi email Anda terlebih dahulu");
        } else if (error.message.includes("Too many requests")) {
          setError("Terlalu banyak percobaan. Silakan coba lagi nanti");
        } else {
          setError(error.message);
        }
      } else {
        setError("Terjadi kesalahan saat masuk. Silakan coba lagi.");
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
              placeholder="Masukkan password"
              value={password}
              onChange={(e) => setPassword(e.target.value)}
              required
              className="h-12 rounded-lg border-gray-300 focus:ring-blue-500 focus:border-blue-500"
              disabled={isLoading}
            />
          </div>
          {error && <p className="text-sm text-red-500 bg-red-50 p-3 rounded-lg">{error}</p>}
          
          <Button 
            type="submit" 
            className="w-full h-12 rounded-full bg-blue-600 text-white hover:bg-blue-700 text-sm font-medium"
            disabled={isLoading}
          >
            {isLoading ? "Masuk..." : "Masuk"}
          </Button>
          
          <div className="text-sm text-center text-gray-600 mt-6">
            Belum punya akun?{" "}
            <Link to="/signup" className="text-blue-600 hover:underline font-medium">
              Daftar sekarang
            </Link>
          </div>
        </form>
      </div>
    </AuthLayout>
  );
}
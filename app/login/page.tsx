
"use client";

import { useState } from "react";
import Link from "next/link";
import { motion } from "framer-motion";
import { ArrowRight, Shield, User, Lock, Mail } from "lucide-react";

export default function LoginPage() {
  const [role, setRole] = useState<"user" | "admin">("user");

  return (
    <div className="min-h-screen bg-slate-950 flex items-center justify-center p-4 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute top-0 left-0 w-full h-full overflow-hidden z-0">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-blue-600/10 rounded-full blur-[100px]" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-indigo-600/10 rounded-full blur-[100px]" />
      </div>

      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="w-full max-w-md bg-slate-900/50 border border-slate-800 rounded-2xl p-8 backdrop-blur-xl relative z-10 shadow-2xl"
      >
        <div className="text-center mb-8">
          <Link href="/" className="inline-block mb-4">
            <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-blue-400 to-indigo-400">
              Crescent
            </span>
          </Link>
          <h1 className="text-2xl font-bold text-white mb-2">Welcome Back</h1>
          <p className="text-slate-400 text-sm">Sign in to access your dashboard</p>
        </div>

        {/* Role Toggle */}
        <div className="flex bg-slate-950/50 p-1 rounded-lg mb-8 border border-slate-800">
          <button
            onClick={() => setRole("user")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${
              role === "user" 
                ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <User className="w-4 h-4" />
            Customer
          </button>
          <button
            onClick={() => setRole("admin")}
            className={`flex-1 flex items-center justify-center gap-2 py-2 rounded-md text-sm font-medium transition-all ${
              role === "admin" 
                ? "bg-indigo-600 text-white shadow-lg shadow-indigo-900/20" 
                : "text-slate-400 hover:text-white hover:bg-slate-800"
            }`}
          >
            <Shield className="w-4 h-4" />
            Admin
          </button>
        </div>

        <form className="space-y-4" onSubmit={(e) => e.preventDefault()}>
          <div className="space-y-2">
            <label className="text-sm font-medium text-slate-300">Email Address</label>
            <div className="relative">
              <Mail className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="email" 
                defaultValue={role === "admin" ? "admin@crescent.com" : "user@company.com"}
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="name@company.com"
              />
            </div>
          </div>
          
          <div className="space-y-2">
            <div className="flex justify-between">
              <label className="text-sm font-medium text-slate-300">Password</label>
              <a href="#" className="text-xs text-blue-400 hover:text-blue-300">Forgot password?</a>
            </div>
            <div className="relative">
              <Lock className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-500" />
              <input 
                type="password" 
                defaultValue="password123"
                className="w-full bg-slate-950 border border-slate-800 rounded-lg pl-10 pr-4 py-2.5 text-slate-200 focus:outline-none focus:border-blue-500 focus:ring-1 focus:ring-blue-500 transition-colors"
                placeholder="••••••••"
              />
            </div>
          </div>

          <Link 
            href={role === "admin" ? "/admin" : "/dashboard"}
            className={`w-full flex items-center justify-center gap-2 py-2.5 rounded-lg text-white font-medium transition-all shadow-lg hover:shadow-xl hover:-translate-y-0.5 ${
              role === "admin" 
                ? "bg-indigo-600 hover:bg-indigo-500 shadow-indigo-500/20" 
                : "bg-blue-600 hover:bg-blue-500 shadow-blue-500/20"
            }`}
          >
            Sign In
            <ArrowRight className="w-4 h-4" />
          </Link>
        </form>

        <div className="mt-6 text-center text-xs text-slate-500">
          Don't have an account? <a href="#" className="text-blue-400 hover:text-blue-300">Contact Sales</a>
        </div>
      </motion.div>
    </div>
  );
}

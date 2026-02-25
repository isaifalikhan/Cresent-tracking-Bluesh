
"use client";

import { motion } from "framer-motion";
import { MessageSquare, Phone, Mail, FileQuestion } from "lucide-react";

export default function UserSupportPage() {
  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-white">Support Center</h1>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Contact Us</h2>
          <div className="space-y-4">
            <div className="flex items-center gap-3 text-slate-300">
              <Phone className="w-5 h-5 text-blue-400" />
              <span>+1 (555) 123-4567</span>
            </div>
            <div className="flex items-center gap-3 text-slate-300">
              <Mail className="w-5 h-5 text-blue-400" />
              <span>support@crescent.com</span>
            </div>
          </div>
        </div>

        <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-6">
          <h2 className="text-lg font-semibold text-white mb-4">Quick Help</h2>
          <div className="space-y-2">
            <button className="w-full text-left p-3 rounded-lg bg-slate-950 hover:bg-slate-800 transition-colors text-sm text-slate-300 flex items-center gap-2">
              <FileQuestion className="w-4 h-4" />
              How to track a shipment?
            </button>
            <button className="w-full text-left p-3 rounded-lg bg-slate-950 hover:bg-slate-800 transition-colors text-sm text-slate-300 flex items-center gap-2">
              <FileQuestion className="w-4 h-4" />
              Report a vehicle issue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

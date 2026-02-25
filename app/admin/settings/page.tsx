
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { 
  User, 
  Bell, 
  Shield, 
  Globe, 
  Moon, 
  Smartphone,
  Check
} from "lucide-react";

export default function SettingsPage() {
  const [activeTab, setActiveTab] = useState("general");

  const tabs = [
    { id: "general", label: "General", icon: User },
    { id: "notifications", label: "Notifications", icon: Bell },
    { id: "security", label: "Security", icon: Shield },
  ];

  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-white">Settings</h1>
        <p className="text-slate-400 text-sm mt-1">Manage your account preferences and system configuration.</p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8">
        {/* Sidebar Tabs */}
        <div className="lg:w-64 flex-shrink-0">
          <div className="bg-slate-900/50 border border-slate-800 rounded-xl p-2 space-y-1">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-all duration-200 ${
                  activeTab === tab.id 
                    ? "bg-blue-600 text-white shadow-lg shadow-blue-900/20" 
                    : "text-slate-400 hover:text-white hover:bg-slate-800"
                }`}
              >
                <tab.icon className="w-4 h-4" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content Area */}
        <div className="flex-1 bg-slate-900/50 border border-slate-800 rounded-xl p-6 lg:p-8 backdrop-blur-sm min-h-[500px]">
          
          {activeTab === "general" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-8"
            >
              <div>
                <h2 className="text-lg font-semibold text-white mb-4">Profile Information</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Full Name</label>
                    <input type="text" defaultValue="Admin User" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-blue-500" />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-slate-400">Email Address</label>
                    <input type="email" defaultValue="admin@globallogistics.com" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-blue-500" />
                  </div>
                </div>
              </div>

              <div className="border-t border-slate-800 pt-8">
                <h2 className="text-lg font-semibold text-white mb-4">Appearance</h2>
                <div className="flex gap-4">
                  <div className="flex-1 p-4 border-2 border-blue-500 bg-slate-950 rounded-xl cursor-pointer relative overflow-hidden">
                    <div className="flex items-center gap-3 mb-2">
                      <Moon className="w-5 h-5 text-blue-400" />
                      <span className="font-medium text-white">Dark Mode</span>
                    </div>
                    <p className="text-xs text-slate-400">Optimized for low-light environments.</p>
                    <div className="absolute top-3 right-3 w-5 h-5 bg-blue-500 rounded-full flex items-center justify-center">
                      <Check className="w-3 h-3 text-white" />
                    </div>
                  </div>
                  <div className="flex-1 p-4 border border-slate-800 bg-slate-950/50 rounded-xl cursor-pointer hover:border-slate-700 transition-colors opacity-50">
                    <div className="flex items-center gap-3 mb-2">
                      <span className="w-5 h-5 rounded-full border border-slate-600 bg-white"></span>
                      <span className="font-medium text-slate-300">Light Mode</span>
                    </div>
                    <p className="text-xs text-slate-500">Classic bright interface.</p>
                  </div>
                </div>
              </div>
            </motion.div>
          )}

          {activeTab === "notifications" && (
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="space-y-6"
            >
              <h2 className="text-lg font-semibold text-white mb-4">Notification Preferences</h2>
              
              <div className="space-y-4">
                {[
                  { title: "Shipment Updates", desc: "Get notified when shipment status changes", icon: Globe },
                  { title: "System Alerts", desc: "Important system maintenance and downtime alerts", icon: Bell },
                  { title: "Mobile Push", desc: "Receive push notifications on your mobile device", icon: Smartphone }
                ].map((item, i) => (
                  <div key={i} className="flex items-center justify-between p-4 bg-slate-950/50 rounded-xl border border-slate-800">
                    <div className="flex items-center gap-4">
                      <div className="p-2 bg-slate-900 rounded-lg text-slate-400">
                        <item.icon className="w-5 h-5" />
                      </div>
                      <div>
                        <h3 className="font-medium text-slate-200">{item.title}</h3>
                        <p className="text-xs text-slate-500">{item.desc}</p>
                      </div>
                    </div>
                    <label className="relative inline-flex items-center cursor-pointer">
                      <input type="checkbox" defaultChecked className="sr-only peer" />
                      <div className="w-11 h-6 bg-slate-700 peer-focus:outline-none rounded-full peer peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-blue-600"></div>
                    </label>
                  </div>
                ))}
              </div>
            </motion.div>
          )}

          {activeTab === "security" && (
             <motion.div 
             initial={{ opacity: 0, y: 10 }}
             animate={{ opacity: 1, y: 0 }}
             className="space-y-6"
           >
             <h2 className="text-lg font-semibold text-white mb-4">Security Settings</h2>
             
             <div className="p-4 bg-yellow-500/10 border border-yellow-500/20 rounded-xl flex gap-4">
                <Shield className="w-6 h-6 text-yellow-500 flex-shrink-0" />
                <div>
                  <h3 className="text-yellow-500 font-medium">Two-Factor Authentication</h3>
                  <p className="text-sm text-yellow-500/80 mt-1">Protect your account with an extra layer of security. We recommend enabling this feature.</p>
                  <button className="mt-3 px-4 py-2 bg-yellow-500 hover:bg-yellow-600 text-black font-semibold rounded-lg text-sm transition-colors">
                    Enable 2FA
                  </button>
                </div>
             </div>

             <div className="space-y-4 pt-4">
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">Current Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-blue-500" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium text-slate-400">New Password</label>
                  <input type="password" placeholder="••••••••" className="w-full bg-slate-950 border border-slate-800 rounded-lg px-4 py-2 text-slate-200 focus:outline-none focus:border-blue-500" />
                </div>
                <button className="px-4 py-2 bg-slate-800 hover:bg-slate-700 text-white rounded-lg transition-colors border border-slate-700">
                  Update Password
                </button>
             </div>
           </motion.div>
          )}
        </div>
      </div>
    </div>
  );
}

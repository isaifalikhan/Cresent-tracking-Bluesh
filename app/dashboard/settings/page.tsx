
"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { User, Bell, Shield, Lock } from "lucide-react";

export default function UserSettingsPage() {
  const [activeTab, setActiveTab] = useState("profile");

  return (
    <div className="space-y-6">
      <h1 className="text-2xl font-bold text-foreground">Account Settings</h1>
      
      <div className="bg-card/50 border border-border rounded-xl p-6">
        <div className="flex gap-4 border-b border-border pb-4 mb-6">
          <button 
            onClick={() => setActiveTab("profile")}
            className={`text-sm font-medium pb-4 -mb-4 border-b-2 transition-colors ${activeTab === "profile" ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400" : "text-muted-foreground border-transparent hover:text-foreground"}`}
          >
            Profile
          </button>
          <button 
            onClick={() => setActiveTab("notifications")}
            className={`text-sm font-medium pb-4 -mb-4 border-b-2 transition-colors ${activeTab === "notifications" ? "text-blue-600 dark:text-blue-400 border-blue-600 dark:border-blue-400" : "text-muted-foreground border-transparent hover:text-foreground"}`}
          >
            Notifications
          </button>
        </div>

        {activeTab === "profile" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4 max-w-md">
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Full Name</label>
              <input type="text" defaultValue="John Doe" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground" />
            </div>
            <div className="space-y-2">
              <label className="text-sm text-muted-foreground">Email</label>
              <input type="email" defaultValue="user@company.com" className="w-full bg-background border border-border rounded-lg px-4 py-2 text-foreground" />
            </div>
            <button className="px-4 py-2 bg-blue-600 text-white rounded-lg text-sm hover:bg-blue-500 transition-colors">Save Changes</button>
          </motion.div>
        )}

        {activeTab === "notifications" && (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="space-y-4">
            <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
              <span className="text-foreground text-sm">Shipment Updates</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
            <div className="flex items-center justify-between p-3 bg-background rounded-lg border border-border">
              <span className="text-foreground text-sm">Vehicle Alerts</span>
              <input type="checkbox" defaultChecked className="toggle" />
            </div>
          </motion.div>
        )}
      </div>
    </div>
  );
}

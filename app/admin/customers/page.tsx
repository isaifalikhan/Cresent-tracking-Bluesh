
"use client";

import { motion } from "framer-motion";
import { 
  Users, 
  Search, 
  Mail, 
  MoreVertical, 
  ArrowUpRight,
  Building
} from "lucide-react";
import { customers } from "@/lib/dummy-data";

export default function CustomersPage() {
  return (
    <div className="space-y-6">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-foreground">Customer Management</h1>
          <p className="text-muted-foreground text-sm mt-1">View and manage client relationships.</p>
        </div>
        <div className="flex gap-3">
          <button className="bg-blue-600 hover:bg-blue-500 text-white px-4 py-2 rounded-lg transition-colors shadow-lg shadow-blue-500/20 flex items-center gap-2">
            <Users className="w-4 h-4" />
            Add Customer
          </button>
        </div>
      </div>

      <div className="bg-card border border-border rounded-xl overflow-hidden backdrop-blur-sm">
        <div className="p-4 border-b border-border flex flex-col md:flex-row md:items-center justify-between gap-4">
          <div className="relative flex-1 max-w-md">
            <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-muted-foreground" />
            <input 
              type="text" 
              placeholder="Search customers..." 
              className="w-full bg-input border border-input rounded-lg pl-9 pr-4 py-2 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-1 focus:ring-blue-500"
            />
          </div>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full text-left text-sm">
            <thead className="bg-muted/50 text-muted-foreground font-medium border-b border-border">
              <tr>
                <th className="px-6 py-4">Customer</th>
                <th className="px-6 py-4">Company</th>
                <th className="px-6 py-4">Status</th>
                <th className="px-6 py-4">Active Shipments</th>
                <th className="px-6 py-4">Total Spend</th>
                <th className="px-6 py-4 text-right">Actions</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-border">
              {customers.map((customer, index) => (
                <motion.tr 
                  key={customer.id}
                  initial={{ opacity: 0, x: -10 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: index * 0.05 }}
                  className="hover:bg-accent/50 transition-colors group"
                >
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="w-8 h-8 rounded-full bg-gradient-to-br from-blue-500 to-indigo-500 flex items-center justify-center text-white font-bold text-xs">
                        {customer.name.charAt(0)}
                      </div>
                      <div>
                        <p className="font-medium text-foreground">{customer.name}</p>
                        <div className="flex items-center gap-1 text-xs text-muted-foreground">
                          <Mail className="w-3 h-3" />
                          {customer.email}
                        </div>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground">
                    <div className="flex items-center gap-2">
                      <Building className="w-3 h-3 text-muted-foreground" />
                      {customer.company}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium border ${
                      customer.status === "Active" ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20" :
                      "bg-muted text-muted-foreground border-border"
                    }`}>
                      {customer.status}
                    </span>
                  </td>
                  <td className="px-6 py-4 text-muted-foreground font-mono text-center w-32">
                    {customer.activeShipments}
                  </td>
                  <td className="px-6 py-4 text-muted-foreground font-mono text-emerald-400">
                    {customer.totalSpend}
                  </td>
                  <td className="px-6 py-4 text-right">
                    <button className="text-muted-foreground hover:text-foreground transition-colors p-1.5 hover:bg-accent rounded-lg group-hover:bg-accent/50">
                      <MoreVertical className="w-4 h-4" />
                    </button>
                  </td>
                </motion.tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

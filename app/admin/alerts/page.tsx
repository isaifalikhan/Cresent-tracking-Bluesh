"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { dummyAlerts } from "@/lib/dummy-data";
import { AlertTriangle, Info, AlertCircle } from "lucide-react";

export default function AdminAlertsPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">System Alerts</h1>
        <Button variant="outline">Export Logs</Button>
      </div>

      <div className="space-y-4">
        {dummyAlerts.map((alert) => (
          <Card key={alert.id} className="border-l-4" style={{
            borderLeftColor: 
              alert.type === 'critical' ? '#EF4444' : 
              alert.type === 'warning' ? '#F59E0B' : '#3B82F6'
          }}>
            <CardContent className="p-4 flex items-start gap-4">
              <div className={`mt-1 p-2 rounded-full ${
                alert.type === 'critical' ? 'bg-red-100 text-red-600' : 
                alert.type === 'warning' ? 'bg-amber-100 text-amber-600' : 'bg-blue-100 text-blue-600'
              }`}>
                {alert.type === 'critical' ? <AlertCircle className="w-5 h-5" /> :
                 alert.type === 'warning' ? <AlertTriangle className="w-5 h-5" /> : <Info className="w-5 h-5" />}
              </div>
              <div className="flex-1">
                <div className="flex items-center justify-between mb-1">
                  <h3 className="font-semibold">{alert.message}</h3>
                  <span className="text-xs text-slate-500">{alert.time}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Badge variant="outline" className="capitalize">{alert.type}</Badge>
                  <span className="text-sm text-slate-500">Device ID: {alert.id + 1000}</span>
                </div>
              </div>
              <Button variant="ghost" size="sm">Dismiss</Button>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
}

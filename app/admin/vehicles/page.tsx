"use client";

import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { dummyVehicles } from "@/lib/dummy-data";
import { MapPin, MoreHorizontal, Fuel, Activity } from "lucide-react";
import Link from "next/link";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

export default function AdminVehiclesPage() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between">
        <h1 className="text-2xl font-bold tracking-tight">All Vehicles</h1>
        <Button className="bg-brand-red hover:bg-red-700">Add Vehicle</Button>
      </div>

      <div className="rounded-md border bg-white">
        <div className="relative w-full overflow-auto">
          <table className="w-full caption-bottom text-sm">
            <thead className="[&_tr]:border-b">
              <tr className="border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100">
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0">
                  Vehicle
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0">
                  Status
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0">
                  Owner
                </th>
                <th className="h-12 px-4 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0">
                  Location
                </th>
                <th className="h-12 px-4 text-right align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0">
                  Actions
                </th>
              </tr>
            </thead>
            <tbody className="[&_tr:last-child]:border-0">
              {dummyVehicles.map((vehicle) => (
                <tr
                  key={vehicle.id}
                  className="border-b transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100"
                >
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <div className="flex flex-col">
                      <span className="font-medium">{vehicle.name}</span>
                      <span className="text-xs text-slate-500">{vehicle.plate}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <Badge
                      variant={
                        vehicle.status === "moving"
                          ? "default"
                          : vehicle.status === "stopped"
                          ? "destructive"
                          : "secondary"
                      }
                      className={
                        vehicle.status === "moving"
                          ? "bg-green-500 hover:bg-green-600"
                          : vehicle.status === "stopped"
                          ? "bg-red-500 hover:bg-red-600"
                          : "bg-amber-500 hover:bg-amber-600 text-white"
                      }
                    >
                      {vehicle.status}
                    </Badge>
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    User A (dummy)
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0">
                    <div className="flex items-center gap-2 max-w-[200px] truncate" title={vehicle.location.address}>
                      <MapPin className="w-3 h-3 text-slate-400 shrink-0" />
                      <span className="truncate">{vehicle.location.address}</span>
                    </div>
                  </td>
                  <td className="p-4 align-middle [&:has([role=checkbox])]:pr-0 text-right">
                    <DropdownMenu>
                      <DropdownMenuTrigger asChild>
                        <Button variant="ghost" className="h-8 w-8 p-0">
                          <span className="sr-only">Open menu</span>
                          <MoreHorizontal className="h-4 w-4" />
                        </Button>
                      </DropdownMenuTrigger>
                      <DropdownMenuContent align="end">
                        <DropdownMenuLabel>Actions</DropdownMenuLabel>
                        <DropdownMenuItem>View details</DropdownMenuItem>
                        <DropdownMenuItem>Edit vehicle</DropdownMenuItem>
                        <DropdownMenuItem>Assign to user</DropdownMenuItem>
                        <DropdownMenuSeparator />
                        <DropdownMenuItem className="text-red-600">Delete vehicle</DropdownMenuItem>
                      </DropdownMenuContent>
                    </DropdownMenu>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

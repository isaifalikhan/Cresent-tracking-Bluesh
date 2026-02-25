
export interface Shipment {
  id: string;
  trackingNumber: string;
  origin: string;
  destination: string;
  status: "In Transit" | "Delivered" | "Delayed" | "Customs" | "Processing";
  estimatedDelivery: string;
  currentLocation: string;
  service: string;
  events: ShipmentEvent[];
}

export interface ShipmentEvent {
  id: string;
  timestamp: string;
  location: string;
  description: string;
  status: "completed" | "current" | "pending";
}

export const shipments: Shipment[] = [
  {
    id: "1",
    trackingNumber: "TRK-8829-XJ",
    origin: "New York, USA",
    destination: "Singapore",
    status: "In Transit",
    estimatedDelivery: "Oct 24, 2025 - 14:00",
    currentLocation: "Singapore Hub",
    service: "International Express",
    events: [
      { id: "e1", timestamp: "Oct 21, 09:00", location: "JFK Airport, NY", description: "Shipment Picked Up", status: "completed" },
      { id: "e2", timestamp: "Oct 22, 04:30", location: "Heathrow, UK", description: "Transiting through Hub", status: "completed" },
      { id: "e3", timestamp: "Oct 23, 11:15", location: "Singapore Changi", description: "Arrived at Destination Country", status: "current" },
      { id: "e4", timestamp: "Oct 24, 08:00", location: "Singapore Hub", description: "Out for Delivery", status: "pending" },
    ]
  },
  {
    id: "2",
    trackingNumber: "TRK-9921-AB",
    origin: "Berlin, Germany",
    destination: "Tokyo, Japan",
    status: "Delayed",
    estimatedDelivery: "Oct 26, 2025",
    currentLocation: "Dubai Int. Airport",
    service: "Standard Air",
    events: []
  },
  {
    id: "3",
    trackingNumber: "TRK-7732-CC",
    origin: "San Francisco, USA",
    destination: "London, UK",
    status: "Delivered",
    estimatedDelivery: "Oct 20, 2025",
    currentLocation: "London",
    service: "Express Saver",
    events: []
  },
  {
    id: "4",
    trackingNumber: "TRK-1122-DD",
    origin: "Shanghai, China",
    destination: "Los Angeles, USA",
    status: "In Transit",
    estimatedDelivery: "Oct 28, 2025",
    currentLocation: "Pacific Ocean",
    service: "Ocean Freight",
    events: []
  },
  {
    id: "5",
    trackingNumber: "TRK-3344-EE",
    origin: "Mumbai, India",
    destination: "Dubai, UAE",
    status: "Processing",
    estimatedDelivery: "Oct 25, 2025",
    currentLocation: "Mumbai Warehouse",
    service: "Ground",
    events: []
  }
];

export const systemEvents = [
  { id: "se1", time: "10:42 AM", message: "Flight CX881 Departed Hong Kong" },
  { id: "se2", time: "10:38 AM", message: "New Shipment Created #TRK-9921" },
  { id: "se3", time: "10:15 AM", message: "System Maintenance Scheduled" },
  { id: "se4", time: "09:55 AM", message: "Delay Reported: Flight BA229" },
  { id: "se5", time: "09:30 AM", message: "Customs Clearance: Batch #992" },
];

export const stats = [
  { label: "Active Shipments", value: "12,405", trend: "+2.4%", status: "neutral" },
  { label: "Delayed", value: "23", trend: "-5%", status: "danger" },
  { label: "Revenue", value: "$1.2M", trend: "+12%", status: "success" },
  { label: "Fleet Status", value: "98% Active", trend: "Stable", status: "success" },
];

export const fleetVehicles = [
  { id: "v1", number: "FL-1029", type: "Truck", status: "Active", driver: "John Doe", location: "New York, NY", fuel: "85%" },
  { id: "v2", number: "FL-2291", type: "Van", status: "Maintenance", driver: "Jane Smith", location: "London, UK", fuel: "N/A" },
  { id: "v3", number: "FL-3382", type: "Plane", status: "Active", driver: "Capt. Reynolds", location: "Over Atlantic", fuel: "60%" },
  { id: "v4", number: "FL-4421", type: "Ship", status: "Docked", driver: "Capt. Sparrow", location: "Singapore Port", fuel: "90%" },
  { id: "v5", number: "FL-5510", type: "Truck", status: "Active", driver: "Mike Ross", location: "Berlin, DE", fuel: "45%" },
];

export const customers = [
  { id: "c1", name: "Alice Johnson", company: "Tech Innovations Inc.", email: "alice@techinnovations.com", activeShipments: 12, totalSpend: "$45,000", status: "Active" },
  { id: "c2", name: "Bob Williams", company: "Global Traders Ltd.", email: "bob@globaltraders.com", activeShipments: 5, totalSpend: "$12,500", status: "Active" },
  { id: "c3", name: "Charlie Brown", company: "Local Logistics", email: "charlie@locallogistics.com", activeShipments: 0, totalSpend: "$2,300", status: "Inactive" },
  { id: "c4", name: "Diana Prince", company: "Themyscira Imports", email: "diana@themyscira.com", activeShipments: 8, totalSpend: "$89,000", status: "Active" },
  { id: "c5", name: "Evan Wright", company: "Wright & Co.", email: "evan@wrightco.com", activeShipments: 2, totalSpend: "$5,600", status: "Active" },
];

// Single source for package features, used by the pricing cards and the comparison table.

export const plans = [
  { name: "Bike Tracking (Basic)", tagline: "For individual bike and personal use" },
  { name: "Basic Plus", tagline: "Essential tracking and security for vehicles" },
  { name: "VIP", tagline: "Advanced tracking with more security features" },
  { name: "Executive", tagline: "Full-featured tracking with camera and DVR" },
];

// Each row lists which plans include the feature, in the same order as `plans`.
export const planFeatures: { label: string; included: boolean[] }[] = [
  { label: "Real Time Tracking 24x7x365", included: [true, true, true, true] },
  { label: "24hr Call Centre Facility", included: [true, true, true, true] },
  { label: "Geo-Fencing/Out Zone Movement Alert via Call", included: [true, true, true, true] },
  { label: "Battery and Device Tamper Alert via Call", included: [false, true, true, true] },
  { label: "Automatic Power Saving", included: [true, true, true, true] },
  { label: "Automatic GPRS/SMS Status Reporting", included: [true, true, true, true] },
  { label: "Vehicle Recovery Assistance", included: [true, true, true, true] },
  { label: "Tamper Alert", included: [true, true, true, true] },
  { label: "Technical Support All Over Pakistan", included: [true, true, true, true] },
  { label: "Web Access with Reports", included: [true, true, true, true] },
  { label: "Mobile Application for Real Time Tracking", included: [true, true, true, true] },
  { label: "Route History Replay", included: [true, true, true, true] },
  { label: "Vehicle Trip Report", included: [true, true, true, true] },
  { label: "All Vehicles Tracking Under One Window", included: [true, true, true, true] },
  { label: "Manageable Notifications", included: [false, true, true, true] },
  { label: "Multiple Geo Fences", included: [false, false, true, true] },
  { label: "In Vehicle Microphone", included: [false, false, true, true] },
  { label: "Panic Button", included: [false, false, true, true] },
  { label: "Dash Cam (Dual Side Camera)", included: [false, false, false, true] },
  { label: "Two Way Communication", included: [false, false, false, true] },
  { label: "In Device DVR", included: [false, false, false, true] },
];

export function featuresForPlan(index: number) {
  return planFeatures.filter((f) => f.included[index]).map((f) => f.label);
}

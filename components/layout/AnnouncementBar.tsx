"use client";

import { useState } from "react";
import { X, Zap } from "lucide-react";
import Link from "next/link";

export default function AnnouncementBar() {
  const [visible, setVisible] = useState(true);
  if (!visible) return null;

  return (
    <div className="relative z-50 bg-gradient-to-r from-green-dark via-green-brand to-green-dark text-white text-sm py-2.5 px-4 text-center">
      <div className="flex items-center justify-center gap-2">
        <Zap className="h-3.5 w-3.5 text-green-light flex-shrink-0" />
        <span>
          🎉 New: AI-powered driver behavior analytics — now live.{" "}
          <Link href="/solutions" className="underline underline-offset-2 font-semibold hover:text-green-200 transition-colors">
            Learn more →
          </Link>
        </span>
      </div>
      <button
        onClick={() => setVisible(false)}
        aria-label="Dismiss announcement"
        className="absolute right-4 top-1/2 -translate-y-1/2 text-white/70 hover:text-white transition-colors"
      >
        <X className="h-4 w-4" />
      </button>
    </div>
  );
}

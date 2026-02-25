"use client";

import { usePathname } from "next/navigation";
import { Navbar } from "@/components/Navbar";
import { Footer } from "@/components/Footer";
import { LenisProvider } from "@/components/LenisProvider";

export function ClientLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();
  const isDashboard = pathname?.startsWith("/dashboard");
  const isAdmin = pathname?.startsWith("/admin");
  const isLogin = pathname === "/login" || pathname === "/login/";
  const shouldHideNav = isDashboard || isAdmin || isLogin;

  return (
    <LenisProvider>
      {!shouldHideNav && <Navbar />}
      <main>{children}</main>
      {!shouldHideNav && <Footer />}
    </LenisProvider>
  );
}

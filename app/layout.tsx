import type { Metadata, Viewport } from "next";
import type { ReactNode } from "react";
import { AppShell } from "@/components/app-shell";
import "./globals.css";

export const metadata: Metadata = {
  title: {
    default: "FreeChess — Todo el ajedrez, gratis",
    template: "%s · FreeChess"
  },
  description:
    "Juega, estudia y mejora tu ajedrez con herramientas gratuitas en una sola plataforma.",
  applicationName: "FreeChess",
  manifest: "/manifest.webmanifest"
};

export const viewport: Viewport = {
  themeColor: "#071510",
  width: "device-width",
  initialScale: 1
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="es" suppressHydrationWarning>
      <body>
        <AppShell>{children}</AppShell>
      </body>
    </html>
  );
}
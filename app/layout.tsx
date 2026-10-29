import type { Metadata } from "next";
import "./globals.css";
import Header from "@/components/Header/Header";


export const metadata: Metadata = {
  title: "Chengcheng's Portfolio",
  description: "",
  icons: { icon: "/favicon.png" },
};

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en">
      <body>
        <Header />
        <main>{children}</main>
      </body>
    </html>
  );
}

import "./globals.css";
import { Open_Sans, Inter } from "next/font/google";
import Providers from "./providers";
import Menu from "@/components/Menu";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "BionNetwork - Community platform for Builders and Investors",
  description: "Community platform for Builders and Investors",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body className={openSans.className}>
        <Providers>
          <Menu>{children}</Menu>
        </Providers>
      </body>
    </html>
  );
}

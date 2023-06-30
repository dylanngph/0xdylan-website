import "./globals.css";
import { Open_Sans, Inter } from "next/font/google";
import Providers from "./providers";
import Menu from "@/components/Menu";
import Footer from "@/components/Footer/Footer";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "0xdylan - Homepage",
  description: "Dylan's homepage",
  viewport: "width=device-width, initial-scale=1",
  author: "DylanNguyen aka 0xDylan",
  twitter: {
    title: "0xdylan",
    card: "summary_large_image",
    site: "@0xdylan",
    creator: "@0xdylan",
    image: "https://www.craftz.dog/card.png",
  },
  og: {
    site_name: "0xdylan",
    title: "0xdylan",
    type: "website",
    url: "https://0xdylan.com",
    image: "https://0xdylan.com/og.png",
    description: "Dylan's homepage",
  },
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
          <Footer/>
        </Providers>
      </body>
    </html>
  );
}

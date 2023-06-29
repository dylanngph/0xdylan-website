import "./globals.css";
import { Open_Sans, Inter } from "next/font/google";
import Providers from "./providers";
import Menu from "@/components/Menu";

const openSans = Open_Sans({ subsets: ["latin"] });

export const metadata = {
  title: "0xDylan - Homepage",
  description: "Dylan's homepage",
  viewport: "width=device-width, initial-scale=1",
  author: "DylanNguyen aka 0xDylan",
  twitter: {
    title: "0xDylan",
    card: "summary_large_image",
    site: "@0xDylan",
    creator: "@0xDylan",
    image: "https://www.craftz.dog/card.png",
  },
  og: {
    site_name: "0xDylan",
    title: "0xDylan",
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
        </Providers>
      </body>
    </html>
  );
}

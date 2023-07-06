import "./globals.css";
import Providers from "./providers";
import Menu from "@/components/Menu";


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
    image: "/0xdylan.jpg",
  },
  og: {
    site_name: "0xdylan",
    title: "0xdylan",
    type: "website",
    url: "https://0xdylan.com",
    image: "/og.png",
    description: "Dylan's homepage",
  },
  link: [
    {
      rel: "preconnect",
      href: "https://fonts.googleapis.com",
    },
    {
      rel: "preconnect",
      href: "https://fonts.gstatic.com",
      crossOrigin: "true",
    },
    {
      rel: "stylesheet",
      href: "https://fonts.googleapis.com/css2?family=Inter:wght@100;200;300;400;500;600;700;800;900&display=swap"
    }
  ]
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Providers>
          <Menu>{children}</Menu>
        </Providers>
      </body>
    </html>
  );
}

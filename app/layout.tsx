import "./globals.css";

import { Footer, NavBar } from "@/components";

export const metadata = {
  title: "Car Link",
  description: "Discover the best rental car showcase application",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang='en'>
      <body className='relative'>
        <NavBar />
        {children}
        <Footer />
      </body>
    </html>
  );
}

import "./globals.css";
import Navbar from '@/components/Navbar';

export const metadata = {
  title: "Clyde - Portfolio",
  description: "A modern portfolio built with Next.js and Tailwind CSS",
};

export default function RootLayout({
  children,
}: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        {children}
      </body>
    </html>
  );
}

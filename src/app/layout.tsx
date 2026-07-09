import type { Metadata } from "next";
import "../app/globals.css"; // or wherever your global CSS import is located
import Navbar from "../components/layout/Navbar";
import Footer from "../components/layout/Footer";

export const metadata: Metadata = {
  title: "DSAI Club - IIT Bhilai",
  description: "Data Science and Artificial Intelligence Club",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="dark"> 
      <body className="bg-slate-950 text-slate-100 antialiased">
        {/* Your senior's premium navigation bar */}
        <Navbar />
        
        {/* Your fast Next.js page content */}
        <main className="min-h-screen">
          {children}
        </main>
        
        {/* Your senior's premium footer */}
        <Footer />
      </body>
    </html>
  );
}
"use client";

import Navbar from "./components/Navigation/Navbar";
import Footer from "./components/Footer";
import ScrollToTop from "./components/ScrollToTop";

export default function ClientLayout({ children }) {
  return (
    <div className="app-shell">
      <Navbar />
      <main className="container">
        <ScrollToTop />
        {children}
      </main>
      <Footer />
    </div>
  );
}

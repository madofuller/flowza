// src/app/root-client.tsx (Client Component)
"use client";

import React, { useState } from "react";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Source_Sans_3, Manrope } from "next/font/google";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import PopupForm from "@/components/PopupForm";
import { PopupContext } from "@/contexts/PopupContext";
import { siteDetails } from "@/data/siteDetails";

const manrope = Manrope({ subsets: ["latin"] });
const sourceSans = Source_Sans_3({ subsets: ["latin"] });

export default function RootClient({ children }: { children: React.ReactNode }) {
  // Manage popup state here
  const [isPopupOpen, setIsPopupOpen] = useState(false);

  const openPopup = () => setIsPopupOpen(true);
  const closePopup = () => setIsPopupOpen(false);

  return (
    <PopupContext.Provider value={{ openPopup }}>
      <div className={`${manrope.className} ${sourceSans.className} antialiased`}>
        {siteDetails.googleAnalyticsId && (
          <GoogleAnalytics gaId={siteDetails.googleAnalyticsId} />
        )}

        <Header />
        <main>{children}</main>
        <Footer />

        {/* Conditionally render the popup */}
        {isPopupOpen && <PopupForm onClose={closePopup} />}
      </div>
    </PopupContext.Provider>
  );
}

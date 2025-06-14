"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSProvider({ children }) {
  useEffect(() => {
    AOS.init({
      duration: 800, // Values from 0 to 3000, with step 50ms
      once: false, // Whether animation should happen only once - while scrolling down
    });
    AOS.refresh(); // Call AOS.refresh if you add/remove elements dynamically
  }, []);

  return <>{children}</>;
}

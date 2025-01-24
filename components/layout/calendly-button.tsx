"use client";

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Calendar } from 'lucide-react';
import { PopupButton } from 'react-calendly';

export function CalendlyButton() {
  const [showButton, setShowButton] = useState(false);
  const [rootElement, setRootElement] = useState<HTMLElement | null>(null);

  useEffect(() => {
    // Set both the show state and root element after mount
    const timer = setTimeout(() => {
      setShowButton(true);
      setRootElement(document.body);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (!showButton || !rootElement) return null;

  return (
    <motion.div
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      whileHover={{ scale: 1.1 }}
      className="fixed bottom-6 right-6 z-50"
    >
      <PopupButton
        url="https://calendly.com/aenfinite/business-meeting"
        rootElement={rootElement}
        text="Schedule Meeting"
        className="bg-gradient-to-r from-purple-500 to-blue-500 text-white p-4 rounded-full shadow-lg hover:shadow-xl hover:shadow-purple-500/20 transition-all duration-300 flex items-center gap-2"
      >
        <Calendar className="h-5 w-5" />
        <span>Schedule Meeting</span>
      </PopupButton>
    </motion.div>
  );
}
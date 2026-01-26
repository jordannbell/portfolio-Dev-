"use client";

import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { FiDownload, FiX } from "react-icons/fi";

interface QRCodeProps {
  url?: string;
  size?: number;
}

export function QRCode({ url = "https://portfolio-jordanb.vercel.app", size = 200 }: QRCodeProps) {
  const [showModal, setShowModal] = useState(false);
  const [qrSvg, setQrSvg] = useState<string>("");

  useEffect(() => {
    // Générer le QR code en utilisant une API ou une bibliothèque
    // Pour l'instant, on utilise une URL d'API publique pour générer le QR code
    const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size}x${size}&data=${encodeURIComponent(url)}`;
    setQrSvg(qrUrl);
  }, [url, size]);

  const downloadQRCode = () => {
    const link = document.createElement("a");
    link.href = qrUrl;
    link.download = "qr-code-portfolio.png";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  const qrUrl = `https://api.qrserver.com/v1/create-qr-code/?size=${size * 2}x${size * 2}&data=${encodeURIComponent(url)}`;

  return (
    <>
      <motion.button
        onClick={() => setShowModal(true)}
        className="fixed bottom-6 right-6 z-50 w-14 h-14 rounded-full bg-accent-primary dark:bg-accent-primary text-white shadow-lg hover:shadow-xl transition-all flex items-center justify-center group"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        aria-label="Afficher le QR code"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M12 4v1m6 11h2m-6 0h-2v4m0-11v3m0 0h.01M12 12h4.01M16 20h4M4 12h4m12 0h.01M5 8h2a1 1 0 001-1V5a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1zm12 0h2a1 1 0 001-1V5a1 1 0 00-1-1h-2a1 1 0 00-1 1v2a1 1 0 001 1zM5 20h2a1 1 0 001-1v-2a1 1 0 00-1-1H5a1 1 0 00-1 1v2a1 1 0 001 1z"
          />
        </svg>
      </motion.button>

      {showModal && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 backdrop-blur-sm"
          onClick={() => setShowModal(false)}
        >
          <motion.div
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            exit={{ scale: 0.8, opacity: 0 }}
            className="bg-light-card dark:bg-dark-card rounded-2xl p-8 shadow-2xl max-w-md w-full mx-4 relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setShowModal(false)}
              className="absolute top-4 right-4 text-light-text-secondary dark:text-dark-text-secondary hover:text-light-text dark:hover:text-dark-text transition-colors"
              aria-label="Fermer"
            >
              <FiX className="w-6 h-6" />
            </button>

            <div className="text-center">
              <h3 className="text-2xl font-bold gradient-text mb-4">
                QR Code du Portfolio
              </h3>
              <p className="text-sm text-light-text-secondary dark:text-dark-text-secondary mb-6">
                Scannez ce code pour accéder directement au site
              </p>

              <div className="flex justify-center mb-6">
                <div className="p-4 bg-white rounded-lg shadow-lg">
                  <img
                    src={qrUrl}
                    alt="QR Code"
                    className="w-64 h-64"
                  />
                </div>
              </div>

              <div className="flex gap-4 justify-center">
                <motion.a
                  href={qrUrl}
                  download="qr-code-portfolio.png"
                  className="flex items-center gap-2 px-6 py-3 bg-accent-primary text-white rounded-lg hover:bg-accent-primary/90 transition-colors"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <FiDownload className="w-5 h-5" />
                  <span>Télécharger</span>
                </motion.a>
              </div>

              <p className="text-xs text-light-text-secondary dark:text-dark-text-secondary mt-4 break-all">
                {url}
              </p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </>
  );
}

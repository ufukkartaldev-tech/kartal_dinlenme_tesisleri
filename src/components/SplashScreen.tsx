'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';

const SplashScreen = () => {
  const [isVisible, setIsVisible] = useState(true);
  const [isClosing, setIsClosing] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsClosing(true);
      // Kapanma animasyonu tamamlandıktan sonra tamamen gizle
      setTimeout(() => {
        setIsVisible(false);
      }, 800);
    }, 700);

    return () => clearTimeout(timer);
  }, []);

  if (!isVisible) return null;

  return (
    <>
      {/* Sol Yarı */}
      <div
        className={`fixed inset-0 z-[9999] bg-black transition-transform duration-800 ease-in-out ${
          isClosing ? '-translate-x-full' : 'translate-x-0'
        }`}
        style={{ width: '50%' }}
      />
      
      {/* Sağ Yarı */}
      <div
        className={`fixed top-0 right-0 bottom-0 z-[9999] bg-black transition-transform duration-800 ease-in-out ${
          isClosing ? 'translate-x-full' : 'translate-x-0'
        }`}
        style={{ width: '50%' }}
      />

      {/* Logo ve İçerik */}
      <div
        className={`fixed inset-0 z-[9999] flex items-center justify-center transition-opacity duration-300 ${
          isClosing ? 'opacity-0' : 'opacity-100'
        }`}
      >
        <div className="text-center">
          {/* Tam Ekran Logo */}
          <div className="relative w-80 h-80 mx-auto mb-8 animate-pulse">
            <Image
              src="/assets/kartal-logo.png"
              alt="Kartal Dinlenme Tesisleri Logo"
              fill
              className="object-contain"
              priority
            />
          </div>
          
          {/* Brand Name */}
          <h1 className="text-6xl md:text-8xl font-bold text-brand-red animate-pulse mb-4">
            KARTAL
          </h1>
          <p className="text-white text-2xl md:text-3xl opacity-80">
            Dinlenme Tesisleri
          </p>
          <p className="text-gray-300 text-lg mt-4 opacity-60">
            Yolculuğun Konforlu Durağı
          </p>
        </div>
      </div>
    </>
  );
};

export default SplashScreen;

import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/HeroSection';
import CoreServices from '@/components/CoreServices';
import ComboPackages from '@/components/ComboPackages';
import IndustrySolutions from '@/components/IndustrySolutions';
import CtaSection from '@/components/CtaSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        <HeroSection />
        <CoreServices />
        <ComboPackages />
        <IndustrySolutions />
        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;

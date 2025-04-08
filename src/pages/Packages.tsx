
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import ComboPackages from '@/components/ComboPackages';
import IndustrySolutions from '@/components/IndustrySolutions';
import CtaSection from '@/components/CtaSection';

const Packages = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-nitinova-lightblue/20 dark:from-nitinova-blue dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text-gradient">Strategic Solution Packages</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Tailored combinations of our services designed to deliver maximum value and transform your digital presence.
            </p>
          </div>
        </section>

        {/* Packages Sections */}
        <ComboPackages />
        <IndustrySolutions />
        
        {/* Custom Solutions */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <h2 className="text-3xl md:text-4xl font-bold mb-6">
                Need a Custom Solution?
              </h2>
              <p className="text-lg text-muted-foreground mb-8">
                Our packages are starting points designed to meet common business needs, but we understand that every business is unique. We'd be happy to create a custom solution tailored specifically to your requirements.
              </p>
              <div className="bg-nitinova-blue/5 border border-nitinova-teal/20 rounded-xl p-8 max-w-2xl mx-auto">
                <h3 className="text-xl font-semibold mb-4">Our Custom Solution Process:</h3>
                <ol className="text-left space-y-4">
                  <li className="flex">
                    <span className="bg-nitinova-teal text-white flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3">1</span>
                    <div>
                      <p className="font-medium">Discovery Consultation</p>
                      <p className="text-sm text-muted-foreground">We learn about your business goals, challenges, and requirements.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-nitinova-teal text-white flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3">2</span>
                    <div>
                      <p className="font-medium">Solution Design</p>
                      <p className="text-sm text-muted-foreground">Our team crafts a tailored solution proposal with clear deliverables.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-nitinova-teal text-white flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3">3</span>
                    <div>
                      <p className="font-medium">Implementation Planning</p>
                      <p className="text-sm text-muted-foreground">We create a detailed roadmap with milestones and timelines.</p>
                    </div>
                  </li>
                  <li className="flex">
                    <span className="bg-nitinova-teal text-white flex-shrink-0 w-8 h-8 rounded-full flex items-center justify-center mr-3">4</span>
                    <div>
                      <p className="font-medium">Execution & Delivery</p>
                      <p className="text-sm text-muted-foreground">We build and implement your solution with regular check-ins.</p>
                    </div>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Packages;

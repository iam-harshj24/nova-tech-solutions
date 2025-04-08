
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const HeroSection = () => {
  return (
    <section className="relative overflow-hidden bg-gradient-to-b from-white to-nitinova-lightblue/20 dark:from-nitinova-blue dark:to-black py-20 md:py-32">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-2 items-center">
          <div className="text-left animate-fade-up">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 hero-text-gradient">
              Your Digital Transformation Partner
            </h1>
            <p className="text-lg md:text-xl mb-8 text-muted-foreground">
              End-to-end solutions to build, grow, and optimize your digital presence. 
              From web development to AI implementation, we've got you covered.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button className="bg-nitinova-teal hover:bg-nitinova-blue text-white px-6 py-6 rounded-md flex items-center gap-2">
                Explore Services
                <ArrowRight size={18} />
              </Button>
              <Button variant="outline" className="border-nitinova-teal text-nitinova-blue hover:text-white hover:bg-nitinova-teal px-6 py-6 rounded-md">
                Contact Us
              </Button>
            </div>
          </div>
          <div className="relative flex justify-center">
            <div className="w-full h-[400px] rounded-xl bg-gradient-to-br from-nitinova-blue via-nitinova-teal to-nitinova-lightblue p-1">
              <div className="w-full h-full bg-white rounded-lg flex items-center justify-center">
                <img 
                  src="https://placehold.co/600x400/087E8B/FFFFFF?text=NITINOVA.TECH" 
                  alt="Digital Transformation" 
                  className="rounded-lg w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Abstract shapes */}
      <div className="absolute top-20 left-0 w-64 h-64 rounded-full bg-nitinova-teal/10 blur-3xl -z-10"></div>
      <div className="absolute bottom-10 right-10 w-96 h-96 rounded-full bg-nitinova-blue/10 blur-3xl -z-10"></div>
    </section>
  );
};

export default HeroSection;

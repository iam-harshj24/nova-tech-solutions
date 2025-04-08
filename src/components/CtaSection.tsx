
import React from 'react';
import { ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';

const CtaSection = () => {
  return (
    <section className="py-20 bg-nitinova-blue">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="max-w-4xl mx-auto text-center">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
            Ready to Transform Your Digital Presence?
          </h2>
          <p className="text-lg text-nitinova-lightblue mb-8 max-w-2xl mx-auto">
            Let's discuss how our customized solutions can help your business grow, optimize operations, and succeed in the digital landscape.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button className="bg-nitinova-teal hover:bg-white hover:text-nitinova-teal text-white px-6 py-6 rounded-md">
              Schedule a Consultation
            </Button>
            <Button variant="outline" className="border-white text-white hover:bg-white hover:text-nitinova-blue px-6 py-6 rounded-md flex items-center gap-2">
              View Our Portfolio
              <ArrowRight size={18} />
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CtaSection;

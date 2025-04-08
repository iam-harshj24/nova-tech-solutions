
import React from 'react';
import { Check, ArrowRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  className?: string;
  style?: React.CSSProperties;
}

const PackageCard = ({ 
  title, 
  description, 
  price, 
  features, 
  popular = false,
  className,
  style
}: PackageCardProps) => {
  return (
    <div className={cn(
      "rounded-xl border p-8 shadow-md transition-all duration-300 hover:shadow-xl relative overflow-hidden tech-card-hover",
      popular ? "border-tech-indigo bg-gradient-to-br from-tech-indigo/5 to-tech-violet/5" : "border-border bg-white dark:bg-gray-800",
      className
    )}
    style={style}
    >
      {/* Technical decorative elements */}
      <div className="absolute top-0 right-0 w-20 h-20">
        <svg className="w-full h-full text-tech-indigo/10" viewBox="0 0 100 100" fill="none">
          <path d="M0,0 L100,0 L100,100" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      
      {popular && (
        <>
          <div className="absolute -right-12 -top-12 w-24 h-24 bg-tech-purple/10 rounded-full blur-xl"></div>
          <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-tech-indigo/10 rounded-full blur-xl"></div>
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-r-[80px] border-t-tech-indigo/20 border-r-transparent"></div>
          <div className="mb-6">
            <span className="inline-block rounded-full bg-gradient-to-r from-tech-indigo to-tech-purple px-4 py-1 text-xs font-medium text-white shadow-sm">
              Most Popular
            </span>
          </div>
        </>
      )}

      {/* Package header */}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mt-2 text-muted-foreground text-sm mb-6">{description}</p>
      
      {/* Price section with tech styling */}
      <div className="mt-5 mb-8 relative">
        <span className="text-4xl font-bold text-tech-indigo">{price}</span>
        {price !== 'Custom' && <span className="text-muted-foreground ml-1"> /package</span>}
        <div className="data-line w-16 h-0.5 mt-4"></div>
      </div>

      {/* Features list with tech styling */}
      <div className="border-t border-border my-6 pt-6">
        <p className="font-medium text-sm mb-4 text-tech-indigo">PACKAGE INCLUDES:</p>
        <ul className="mb-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`rounded-full p-1 mr-3 mt-0.5 ${popular ? 'bg-tech-indigo/20' : 'bg-tech-purple/10'}`}>
                <Check size={14} className={popular ? 'text-tech-indigo flex-shrink-0' : 'text-tech-purple flex-shrink-0'} />
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button with tech styling */}
      <Button 
        className={cn(
          "w-full group relative overflow-hidden", 
          popular 
            ? "bg-gradient-to-r from-tech-indigo to-tech-violet text-white shadow-md hover:shadow-lg border-none" 
            : "bg-white dark:bg-gray-800 text-tech-indigo hover:text-white hover:bg-tech-indigo border border-tech-indigo"
        )}
      >
        <span className="relative z-10">Get Started</span>
        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1 relative z-10" />
        {popular && (
          <span className="absolute inset-0 bg-gradient-to-r from-tech-purple to-tech-indigo opacity-0 group-hover:opacity-100 transition-opacity duration-300"></span>
        )}
      </Button>
      
      {/* Tech circuit background pattern for visual interest */}
      <div className="absolute inset-0 opacity-5 pointer-events-none circuit-pattern"></div>
    </div>
  );
};

export default PackageCard;

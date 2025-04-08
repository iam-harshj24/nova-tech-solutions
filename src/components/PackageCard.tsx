
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
      "rounded-xl border p-8 shadow-md transition-all duration-300 hover:shadow-xl relative overflow-hidden",
      popular ? "border-nitinova-teal bg-gradient-to-br from-nitinova-teal/5 to-nitinova-blue/5" : "border-border bg-card",
      className
    )}
    style={style}
    >
      {popular && (
        <>
          <div className="absolute -right-12 -top-12 w-24 h-24 bg-nitinova-teal/10 rounded-full blur-xl"></div>
          <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-nitinova-blue/10 rounded-full blur-xl"></div>
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[80px] border-r-[80px] border-t-nitinova-teal/10 border-r-transparent"></div>
          <div className="mb-6">
            <span className="inline-block rounded-full bg-gradient-to-r from-nitinova-teal to-nitinova-blue px-4 py-1 text-xs font-medium text-white shadow-sm">
              Most Popular
            </span>
          </div>
        </>
      )}

      {/* Package header */}
      <h3 className="text-2xl font-bold mb-2">{title}</h3>
      <p className="mt-2 text-muted-foreground text-sm mb-6">{description}</p>
      
      {/* Price section */}
      <div className="mt-5 mb-8">
        <span className="text-4xl font-bold text-nitinova-blue">{price}</span>
        {price !== 'Custom' && <span className="text-muted-foreground ml-1"> /package</span>}
        <div className="w-16 h-1 bg-gradient-to-r from-nitinova-teal to-nitinova-blue mt-4"></div>
      </div>

      {/* Features list */}
      <div className="border-t border-border my-6 pt-6">
        <p className="font-medium text-sm mb-4 text-nitinova-teal">PACKAGE INCLUDES:</p>
        <ul className="mb-8 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={`rounded-full p-1 mr-3 mt-0.5 ${popular ? 'bg-nitinova-teal/20' : 'bg-nitinova-blue/10'}`}>
                <Check size={14} className={popular ? 'text-nitinova-teal flex-shrink-0' : 'text-nitinova-blue flex-shrink-0'} />
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA Button */}
      <Button 
        className={cn(
          "w-full group", 
          popular 
            ? "bg-gradient-to-r from-nitinova-teal to-nitinova-blue hover:from-nitinova-blue hover:to-nitinova-teal text-white shadow-md hover:shadow-lg" 
            : "bg-white text-nitinova-blue border-nitinova-teal hover:bg-nitinova-teal hover:text-white"
        )}
      >
        Get Started
        <ArrowRight size={16} className="ml-2 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default PackageCard;

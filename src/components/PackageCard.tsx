
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
      "rounded-xl border p-6 sm:p-8 shadow-sm transition-all duration-300 hover:shadow-md relative overflow-hidden",
      popular ? "border-nitinova-teal bg-nitinova-teal/5" : "border-border bg-card",
      className
    )}
    style={style}
    >
      {popular && (
        <>
          <div className="absolute -right-12 -top-12 w-24 h-24 bg-nitinova-teal/10 rounded-full blur-xl"></div>
          <div className="absolute -left-12 -bottom-12 w-24 h-24 bg-nitinova-teal/10 rounded-full blur-xl"></div>
          <div className="mb-4">
            <span className="inline-block rounded-full bg-nitinova-teal px-3 py-1 text-xs font-medium text-white">
              Most Popular
            </span>
          </div>
        </>
      )}

      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-muted-foreground text-sm">{description}</p>
      
      <div className="mt-5 mb-6">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-muted-foreground"> /package</span>}
      </div>

      <div className="border-t border-border my-6 pt-6">
        <ul className="mb-6 space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className="bg-nitinova-teal/10 rounded-full p-1 mr-3 mt-0.5">
                <Check size={14} className="text-nitinova-teal flex-shrink-0" />
              </div>
              <span className="text-sm text-muted-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      <Button 
        className={cn(
          "w-full group", 
          popular 
            ? "bg-nitinova-teal hover:bg-nitinova-blue text-white" 
            : "bg-white text-nitinova-blue border-nitinova-teal hover:bg-nitinova-teal hover:text-white"
        )}
      >
        Get Started
        <ArrowRight size={16} className="ml-1 transition-transform duration-300 group-hover:translate-x-1" />
      </Button>
    </div>
  );
};

export default PackageCard;

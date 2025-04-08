
import React from 'react';
import { Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';

interface PackageCardProps {
  title: string;
  description: string;
  price: string;
  features: string[];
  popular?: boolean;
  className?: string;
}

const PackageCard = ({ 
  title, 
  description, 
  price, 
  features, 
  popular = false,
  className 
}: PackageCardProps) => {
  return (
    <div className={cn(
      "rounded-xl border p-6 shadow-sm transition-all duration-300 hover:shadow-md",
      popular ? "border-nitinova-teal bg-nitinova-teal/5" : "border-border bg-card",
      className
    )}>
      {popular && (
        <div className="mb-4">
          <span className="inline-block rounded-full bg-nitinova-teal px-3 py-1 text-xs font-medium text-white">
            Most Popular
          </span>
        </div>
      )}

      <h3 className="text-2xl font-bold">{title}</h3>
      <p className="mt-2 text-muted-foreground">{description}</p>
      
      <div className="mt-4 mb-6">
        <span className="text-3xl font-bold">{price}</span>
        {price !== 'Custom' && <span className="text-muted-foreground"> /package</span>}
      </div>

      <ul className="mb-6 space-y-3">
        {features.map((feature, index) => (
          <li key={index} className="flex items-start">
            <Check size={18} className="mr-2 text-nitinova-teal flex-shrink-0 mt-0.5" />
            <span className="text-sm text-muted-foreground">{feature}</span>
          </li>
        ))}
      </ul>

      <Button 
        className={cn(
          "w-full", 
          popular 
            ? "bg-nitinova-teal hover:bg-nitinova-blue text-white" 
            : "bg-white text-nitinova-blue border-nitinova-teal hover:bg-nitinova-teal hover:text-white"
        )}
      >
        Get Started
      </Button>
    </div>
  );
};

export default PackageCard;

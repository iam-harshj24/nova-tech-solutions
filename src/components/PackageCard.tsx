
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
      "relative rounded-xl border shadow-sm transition-all duration-300 hover:shadow-md overflow-hidden flex flex-col h-full",
      popular ? "border-tech-indigo" : "border-border",
      className
    )}
    style={style}
    >
      {/* Professional top accent */}
      <div className={cn(
        "h-1.5 w-full", 
        popular ? "bg-gradient-to-r from-tech-indigo to-tech-purple" : "bg-gradient-to-r from-tech-gray/30 to-tech-gray/10"
      )} />
      
      {/* Package header with clean design */}
      <div className={cn(
        "px-8 py-6 border-b",
        popular ? "bg-gradient-to-br from-tech-indigo/5 to-transparent border-tech-indigo/10" : "border-border/50"
      )}>
        {popular && (
          <div className="mb-3">
            <span className="inline-block rounded-full bg-tech-indigo/10 text-tech-indigo px-3 py-1 text-xs font-medium">
              Most Popular
            </span>
          </div>
        )}
        
        <h3 className={cn(
          "text-xl font-semibold mb-2",
          popular ? "text-tech-indigo" : "text-tech-dark dark:text-white"
        )}>{title}</h3>
        <p className="text-tech-gray text-sm">{description}</p>
      </div>
      
      {/* Price section with professional typography */}
      <div className="px-8 py-6 bg-tech-light/50 dark:bg-gray-800/30 border-b border-border/50">
        <div className="flex items-baseline">
          <span className={cn(
            "text-3xl font-bold",
            popular ? "text-tech-indigo" : "text-tech-dark dark:text-white"
          )}>{price}</span>
          {price !== 'Custom' && <span className="text-tech-gray ml-2 text-sm"> /package</span>}
        </div>
      </div>

      {/* Features section with clean list */}
      <div className="px-8 py-6 flex-grow">
        <p className="font-medium text-xs uppercase tracking-wider text-tech-gray mb-4">Package Includes:</p>
        <ul className="space-y-3 mb-6">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start">
              <div className={cn(
                "rounded-full p-1 mr-3 mt-0.5",
                popular ? "text-tech-indigo bg-tech-indigo/10" : "text-tech-gray bg-tech-gray/10"
              )}>
                <Check size={12} className="flex-shrink-0" />
              </div>
              <span className="text-sm text-tech-gray dark:text-gray-300">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* CTA section with professional button */}
      <div className="px-8 py-6 border-t border-border/50 mt-auto">
        <Button 
          className={cn(
            "w-full flex items-center justify-center gap-2 transition-all", 
            popular 
              ? "bg-tech-indigo hover:bg-tech-purple text-white" 
              : "bg-white dark:bg-gray-800 text-tech-indigo hover:bg-tech-indigo hover:text-white border border-tech-indigo/50"
          )}
        >
          <span>Get Started</span>
          <ArrowRight size={16} className="transition-transform duration-300 group-hover:translate-x-1" />
        </Button>
      </div>
      
      {/* Subtle tech pattern in background */}
      {popular && (
        <div className="absolute top-1/2 right-0 transform -translate-y-1/2 opacity-[0.02] pointer-events-none">
          <svg width="160" height="320" viewBox="0 0 160 320" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M80 0V320M0 40H160M0 80H160M0 120H160M0 160H160M0 200H160M0 240H160M0 280H160" stroke="currentColor" strokeWidth="1" />
          </svg>
        </div>
      )}
    </div>
  );
};

export default PackageCard;

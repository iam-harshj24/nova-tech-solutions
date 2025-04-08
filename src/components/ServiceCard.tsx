
import React from 'react';
import { LucideIcon } from 'lucide-react';
import { cn } from '@/lib/utils';

interface ServiceCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  className?: string;
  style?: React.CSSProperties;
}

const ServiceCard = ({ title, description, icon: Icon, className, style }: ServiceCardProps) => {
  return (
    <div 
      className={cn(
        "service-card group tech-card-hover bg-white dark:bg-gray-800 rounded-xl shadow-md border border-border p-8", 
        className
      )}
      style={style}
    >
      {/* Tech-themed decorative elements */}
      <div className="absolute -right-16 -top-16 h-32 w-32 rounded-full bg-tech-indigo/5 group-hover:bg-tech-indigo/10 transition-all duration-300"></div>
      <div className="absolute top-0 right-0 w-16 h-16">
        <svg className="w-full h-full text-tech-indigo/10" viewBox="0 0 100 100" fill="none">
          <path d="M0,0 L100,0 L100,100" stroke="currentColor" strokeWidth="1" />
        </svg>
      </div>
      
      {/* Icon with tech-inspired styling */}
      <div className="relative mb-6 bg-gradient-to-br from-tech-indigo/10 to-tech-purple/10 rounded-lg p-4 overflow-hidden group-hover:from-tech-indigo/20 group-hover:to-tech-purple/20 transition-all duration-300">
        <div className="absolute inset-0 opacity-20">
          <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
            <defs>
              <pattern id="grid" width="10" height="10" patternUnits="userSpaceOnUse">
                <path d="M 10 0 L 0 0 0 10" fill="none" stroke="currentColor" strokeWidth="0.5" />
              </pattern>
            </defs>
            <rect width="100" height="100" fill="url(#grid)" />
          </svg>
        </div>
        <Icon className="h-8 w-8 text-tech-indigo group-hover:text-tech-purple relative z-10 transition-colors duration-300" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-4 group-hover:text-tech-indigo transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      
      {/* Tech-styled decorative line */}
      <div className="data-line w-12 h-0.5 group-hover:w-20 transition-all duration-300"></div>
      
      {/* Learn more with tech styling */}
      <div className="absolute bottom-6 right-6 text-tech-indigo text-sm font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300 flex items-center">
        <span>View details</span>
        <svg className="w-4 h-4 ml-1" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M5 12H19M19 12L12 5M19 12L12 19" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;


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
        "relative overflow-hidden rounded-xl border border-border/40 bg-white dark:bg-gray-800/90 shadow-sm transition-all duration-300 hover:shadow-md group",
        className
      )}
      style={style}
    >
      {/* Clean professional design with subtle tech elements */}
      <div className="absolute top-0 right-0 w-24 h-24 bg-gradient-to-br from-tech-indigo/5 to-transparent rounded-bl-[100px] pointer-events-none" />
      
      <div className="p-8">
        {/* Icon container with subtle gradient */}
        <div className="mb-6 relative">
          <div className="absolute inset-0 rounded-lg bg-gradient-to-br from-tech-indigo/10 to-tech-purple/5 blur-[2px]" />
          <div className="relative flex items-center justify-center w-12 h-12 rounded-lg bg-gradient-to-r from-tech-indigo/10 to-tech-purple/10 backdrop-blur-sm">
            <Icon className="h-6 w-6 text-tech-indigo group-hover:text-tech-purple transition-colors duration-300" />
          </div>
        </div>
        
        {/* Content with clean typography */}
        <h3 className="text-xl font-semibold mb-3 text-tech-dark dark:text-white group-hover:text-tech-indigo transition-colors duration-300">{title}</h3>
        <p className="text-gray-600 dark:text-gray-300 text-sm leading-relaxed mb-5">{description}</p>
        
        {/* Professional accent line */}
        <div className="w-12 h-0.5 bg-gradient-to-r from-tech-indigo to-tech-purple/70 group-hover:w-20 transition-all duration-300" />
        
        {/* Subtle tech pattern in background */}
        <div className="absolute bottom-0 right-0 opacity-[0.03] pointer-events-none">
          <svg width="120" height="120" viewBox="0 0 120 120" fill="none" xmlns="http://www.w3.org/2000/svg">
            <path d="M20 20L100 20M20 40L100 40M20 60L100 60M20 80L100 80M20 100L100 100" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
            <path d="M20 20L20 100M40 20L40 100M60 20L60 100M80 20L80 100M100 20L100 100" stroke="currentColor" strokeWidth="1" strokeLinecap="round" />
          </svg>
        </div>
      </div>
      
      {/* Professional "Learn More" with clean hover effect */}
      <div className="px-8 py-4 border-t border-border/40 bg-gray-50 dark:bg-gray-800/50 flex justify-between items-center">
        <span className="text-sm font-medium text-tech-indigo">Learn more</span>
        <svg className="w-5 h-5 text-tech-indigo transform group-hover:translate-x-1 transition-transform duration-300" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
          <path d="M14 5L21 12M21 12L14 19M21 12H3" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
        </svg>
      </div>
    </div>
  );
};

export default ServiceCard;

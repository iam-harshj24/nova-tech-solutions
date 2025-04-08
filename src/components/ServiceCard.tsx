
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
        "service-card group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-md border border-border p-8 hover:border-nitinova-teal transition-all duration-300", 
        className
      )}
      style={style}
    >
      {/* Background decorative elements */}
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-nitinova-teal/5 group-hover:bg-nitinova-teal/10 transition-all duration-300"></div>
      <div className="absolute -left-16 -bottom-16 h-32 w-32 rounded-full bg-nitinova-blue/5 group-hover:bg-nitinova-blue/10 transition-all duration-300"></div>
      
      {/* Icon container */}
      <div className="feature-icon relative mb-6 p-4 rounded-lg bg-gradient-to-br from-nitinova-teal/10 to-nitinova-blue/10 group-hover:from-nitinova-teal/20 group-hover:to-nitinova-blue/20 transition-all duration-300">
        <Icon className="h-8 w-8 text-nitinova-teal group-hover:text-nitinova-blue transition-colors duration-300" />
      </div>
      
      {/* Content */}
      <h3 className="text-xl font-bold mb-4 group-hover:text-nitinova-teal transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed mb-4">{description}</p>
      
      {/* Decorative line */}
      <div className="w-10 h-1 bg-nitinova-teal/30 group-hover:w-16 group-hover:bg-nitinova-teal transition-all duration-300"></div>
      
      {/* Hidden learn more text that appears on hover */}
      <div className="absolute bottom-6 right-6 text-nitinova-teal text-sm font-medium opacity-0 transform translate-y-2 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-300">
        Learn more →
      </div>
    </div>
  );
};

export default ServiceCard;

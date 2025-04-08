
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
        "service-card group relative overflow-hidden bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-border p-6 hover:border-nitinova-teal hover:shadow-md transition-all duration-300", 
        className
      )}
      style={style}
    >
      <div className="absolute -right-20 -top-20 h-40 w-40 rounded-full bg-nitinova-teal/5 group-hover:bg-nitinova-teal/10 transition-all duration-300"></div>
      <div className="feature-icon relative mb-5 p-3">
        <Icon className="h-7 w-7" />
      </div>
      <h3 className="text-xl font-semibold mb-3 group-hover:text-nitinova-teal transition-colors duration-300">{title}</h3>
      <p className="text-muted-foreground text-sm leading-relaxed">{description}</p>
    </div>
  );
};

export default ServiceCard;

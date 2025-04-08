
import React from 'react';
import { ShoppingBag, Building, Stethoscope, Factory, Briefcase } from 'lucide-react';
import { cn } from '@/lib/utils';

interface IndustrySolutionProps {
  title: string;
  description: string;
  icon: React.ElementType;
  features: string[];
  className?: string;
  style?: React.CSSProperties;
}

const IndustrySolution = ({ title, description, icon: Icon, features, className, style }: IndustrySolutionProps) => {
  return (
    <div className={cn("bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-border p-6", className)} style={style}>
      <div className="flex items-center mb-4">
        <div className="feature-icon mr-4">
          <Icon className="h-6 w-6" />
        </div>
        <h3 className="text-xl font-semibold">{title}</h3>
      </div>
      <p className="text-muted-foreground mb-4">{description}</p>
      <ul className="space-y-2">
        {features.map((feature, index) => (
          <li key={index} className="text-sm flex items-start">
            <span className="text-nitinova-teal mr-2">•</span>
            <span>{feature}</span>
          </li>
        ))}
      </ul>
    </div>
  );
};

const IndustrySolutions = () => {
  const solutions = [
    {
      icon: ShoppingBag,
      title: "Retail Digital Pack",
      description: "Complete e-commerce solution with inventory management and customer tracking.",
      features: [
        "Fully customized e-commerce store",
        "Inventory management system",
        "Customer relationship management",
        "Marketing automation",
        "Sales analytics dashboard"
      ]
    },
    {
      icon: Stethoscope,
      title: "Healthcare Management",
      description: "Streamline patient care and practice management with digital tools.",
      features: [
        "Patient portal development",
        "Appointment scheduling system",
        "Electronic health records integration",
        "Insurance verification tool",
        "HIPAA-compliant data security"
      ]
    },
    {
      icon: Building,
      title: "Real Estate Pack",
      description: "Digital solutions for property management and client engagement.",
      features: [
        "Property listings website",
        "CRM for client management",
        "Document automation",
        "Virtual tour integration",
        "Lead generation system"
      ]
    },
    {
      icon: Factory,
      title: "Manufacturing Solutions",
      description: "Optimize production and supply chain with integrated systems.",
      features: [
        "ERP implementation",
        "Supply chain management",
        "Predictive maintenance system",
        "Quality control automation",
        "Inventory optimization"
      ]
    },
    {
      icon: Briefcase,
      title: "Professional Services",
      description: "Streamline client management and service delivery for consultancies.",
      features: [
        "Client portal development",
        "Appointment scheduling system",
        "Document management",
        "Automated billing system",
        "Project tracking dashboard"
      ]
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Industry-Specific Solutions</h2>
          <p className="text-muted-foreground text-lg">
            Tailored digital packages designed for the unique requirements of different industries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {solutions.map((solution, index) => (
            <IndustrySolution
              key={index}
              icon={solution.icon}
              title={solution.title}
              description={solution.description}
              features={solution.features}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default IndustrySolutions;

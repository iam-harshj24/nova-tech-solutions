
import React from 'react';
import { Globe, ShoppingCart, BarChart3, Code, BrainCircuit, Link, LifeBuoy, Search, Server, Database } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Button } from '@/components/ui/button';

const CoreServices = () => {
  const services = [
    {
      icon: Globe,
      title: "Digital Foundation",
      description: "Enterprise-grade infrastructure with domain management, hosting, SSL certificates, and cloud services optimized for performance and security."
    },
    {
      icon: Code,
      title: "Web Development",
      description: "Custom website solutions built with modern frameworks, responsive design, and SEO-optimized architecture for maximum visibility and engagement."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Comprehensive online retail platforms with secure payment gateways, inventory management, and customer experience optimization."
    },
    {
      icon: BarChart3,
      title: "Business Operations",
      description: "Integrated CRM and ERP solutions with custom workflows, automated reporting, and business intelligence dashboards for data-driven decisions."
    },
    {
      icon: Database,
      title: "Custom Applications",
      description: "Tailored software solutions designed for your specific business challenges, with scalable architecture and intuitive user interfaces."
    },
    {
      icon: BrainCircuit,
      title: "AI Implementation",
      description: "Advanced artificial intelligence solutions including machine learning models, NLP systems, and predictive analytics for business optimization."
    },
    {
      icon: Link,
      title: "System Integration",
      description: "Seamless connection of disparate systems through API development, middleware solutions, and automated data synchronization processes."
    },
    {
      icon: Search,
      title: "Digital Marketing",
      description: "Comprehensive SEO strategies, content optimization, performance marketing campaigns, and analytics for measurable business growth."
    },
    {
      icon: Server,
      title: "Cloud Solutions",
      description: "Enterprise cloud architecture with scalable infrastructure, containerization, microservices, and robust security implementations."
    }
  ];

  return (
    <section className="py-20 bg-tech-light dark:bg-gray-900" id="services">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Core Service Categories</h2>
          <p className="section-description">
            Enterprise-grade digital solutions to power your business transformation and drive measurable results
          </p>
        </div>

        <div className="tech-grid">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="fade-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="tech-button tech-button-primary">
            View Complete Service Catalog
          </Button>
        </div>
      </div>
      
      {/* Subtle tech background pattern */}
      <div className="absolute top-0 left-0 w-full h-full tech-dots-pattern opacity-30 pointer-events-none" />
    </section>
  );
};

export default CoreServices;

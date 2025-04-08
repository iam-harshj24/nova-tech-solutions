
import React from 'react';
import { Globe, ShoppingCart, BarChart3, Code, BrainCircuit, Link, LifeBuoy, Search } from 'lucide-react';
import ServiceCard from './ServiceCard';
import { Button } from '@/components/ui/button';

const CoreServices = () => {
  const services = [
    {
      icon: Globe,
      title: "Digital Foundation",
      description: "Domain management, hosting, SSL, DNS, email setup and cloud infrastructure services."
    },
    {
      icon: Code,
      title: "Web Presence Development",
      description: "Custom websites, CMS implementation, mobile optimization, and SEO-friendly design."
    },
    {
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "CS-Cart, Shopify, WooCommerce, payment gateways, and order processing automation."
    },
    {
      icon: BarChart3,
      title: "Business Operations",
      description: "CRM, ERP solutions, project management tools, and document management systems."
    },
    {
      icon: Code,
      title: "Custom Application Development",
      description: "Custom web applications, mobile apps, internal tools, API development, and legacy modernization."
    },
    {
      icon: BrainCircuit,
      title: "AI Implementation",
      description: "AI strategy, machine learning, NLP, computer vision, predictive analytics, and chatbots."
    },
    {
      icon: Link,
      title: "Integration Services",
      description: "System integration, API connectivity, data migration, and third-party software integration."
    },
    {
      icon: Search,
      title: "SEO Services",
      description: "Comprehensive SEO audits, keyword research, on-page optimization, and performance tracking."
    },
    {
      icon: LifeBuoy,
      title: "Support & Maintenance",
      description: "24/7 technical support, regular updates, performance monitoring, and security audits."
    }
  ];

  return (
    <section className="py-20 bg-gray-50 dark:bg-gray-900" id="services">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Core Service Categories</h2>
          <p className="text-muted-foreground text-lg">
            Comprehensive digital services to power your business transformation at every stage of growth.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <ServiceCard
              key={index}
              icon={service.icon}
              title={service.title}
              description={service.description}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="bg-nitinova-teal hover:bg-nitinova-blue text-white px-6 py-6">
            View All Services
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CoreServices;


import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import { CheckCircle2, Server, Globe, ShoppingCart, BarChart3, Code, BrainCircuit, Link, LifeBuoy, Search } from 'lucide-react';

const ServiceDetailSection = ({ 
  id, 
  title, 
  description, 
  icon: Icon, 
  services 
}: {
  id: string;
  title: string;
  description: string;
  icon: React.ElementType;
  services: string[];
}) => {
  return (
    <section id={id} className="py-16 border-b border-border">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <div className="h-16 w-16 rounded-lg bg-nitinova-teal/10 flex items-center justify-center mb-6">
              <Icon className="h-8 w-8 text-nitinova-teal" />
            </div>
            <h2 className="text-3xl font-bold mb-4">{title}</h2>
            <p className="text-muted-foreground text-lg mb-6">{description}</p>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index} className="flex items-center">
                  <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-3" />
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="bg-nitinova-lightblue/20 rounded-xl p-8">
            <div className="aspect-video bg-nitinova-blue rounded-lg flex items-center justify-center">
              <span className="text-white text-lg">Service Illustration</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

const Services = () => {
  const services = [
    {
      id: "digital-foundation",
      icon: Server,
      title: "Digital Foundation Services",
      description: "Build a solid digital infrastructure with our comprehensive foundation services. From domain registration to cloud setup, we ensure your business has a reliable and secure digital base.",
      services: [
        "Domain registration and management",
        "Web hosting and server setup",
        "SSL certification and security setup",
        "DNS management",
        "Email hosting and configuration",
        "Cloud infrastructure setup (AWS, Azure, Google Cloud)"
      ]
    },
    {
      id: "web-presence",
      icon: Globe,
      title: "Web Presence Development",
      description: "Establish a professional, engaging online presence with our web development services. We create beautiful, functional websites optimized for performance and conversions.",
      services: [
        "Custom website design and development",
        "CS-Cart e-commerce stores",
        "Shopify stores development",
        "WordPress sites",
        "Landing pages",
        "Content management system implementation",
        "Mobile responsiveness optimization",
        "SEO optimization",
        "Website maintenance and support",
        "Analytics integration"
      ]
    },
    {
      id: "ecommerce",
      icon: ShoppingCart,
      title: "E-commerce Solutions",
      description: "Transform your retail business with powerful e-commerce solutions. From storefront design to payment processing, we build complete online shopping experiences.",
      services: [
        "CS-Cart implementation and customization",
        "Shopify setup and customization",
        "WooCommerce integration",
        "Payment gateway integration",
        "Inventory management systems",
        "Order processing automation",
        "Shipping and logistics integration"
      ]
    },
    {
      id: "business-operations",
      icon: BarChart3,
      title: "Business Operations Software",
      description: "Streamline your business processes with integrated software solutions. Our custom implementations improve efficiency and provide valuable insights.",
      services: [
        "CRM implementation and customization",
        "Customer data management",
        "Sales pipeline automation",
        "Lead tracking and nurturing",
        "ERP solutions",
        "Inventory control",
        "Supply chain management",
        "Financial management",
        "Human resources management",
        "Project management tools",
        "Document management systems"
      ]
    },
    {
      id: "custom-dev",
      icon: Code,
      title: "Custom Application Development",
      description: "Get tailored software solutions designed for your unique business needs. Our development team builds scalable, user-friendly applications.",
      services: [
        "Custom web applications",
        "Mobile app development (iOS, Android)",
        "Internal tool development",
        "API development and integration",
        "Legacy system modernization",
        "Database design and optimization"
      ]
    },
    {
      id: "ai-implementation",
      icon: BrainCircuit,
      title: "AI Implementation Services",
      description: "Leverage the power of artificial intelligence to gain competitive advantages. Our AI solutions automate processes and uncover valuable insights.",
      services: [
        "AI strategy consulting",
        "Machine learning model development",
        "Natural language processing solutions",
        "Computer vision implementation",
        "Predictive analytics",
        "Chatbot development and implementation",
        "Process automation via AI",
        "Data analysis and business intelligence"
      ]
    },
    {
      id: "integration",
      icon: Link,
      title: "Integration Services",
      description: "Connect your digital ecosystem with seamless integrations. We ensure your systems work together efficiently, eliminating data silos.",
      services: [
        "System integration between platforms",
        "API connectivity",
        "Data migration and synchronization",
        "Third-party software integration",
        "Legacy system integration with modern tools"
      ]
    },
    {
      id: "seo",
      icon: Search,
      title: "SEO Services",
      description: "Improve your online visibility and drive organic traffic with our comprehensive SEO services. We help your business rank higher in search results.",
      services: [
        "Comprehensive SEO audits",
        "Keyword research and strategy",
        "On-page optimization",
        "Technical SEO implementation",
        "Content strategy for SEO",
        "Local SEO optimization",
        "Link building campaigns",
        "SEO performance tracking and reporting",
        "Google Business Profile optimization",
        "Competitor analysis",
        "Algorithm update adaptation",
        "Mobile SEO optimization"
      ]
    },
    {
      id: "support",
      icon: LifeBuoy,
      title: "Support and Maintenance",
      description: "Keep your digital assets performing at their best with our ongoing support services. We provide proactive maintenance and responsive assistance.",
      services: [
        "24/7 technical support",
        "Regular maintenance and updates",
        "Performance monitoring",
        "Security audits and updates",
        "Backup and disaster recovery",
        "Staff training and knowledge transfer"
      ]
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-nitinova-lightblue/20 dark:from-nitinova-blue dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text-gradient">Our Services</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive digital solutions to build, grow, and optimize your business technology.
              From foundation to innovation, we've got you covered.
            </p>
          </div>
        </section>

        {/* Service Details */}
        {services.map((service) => (
          <ServiceDetailSection 
            key={service.id}
            id={service.id}
            icon={service.icon}
            title={service.title}
            description={service.description}
            services={service.services}
          />
        ))}

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default Services;

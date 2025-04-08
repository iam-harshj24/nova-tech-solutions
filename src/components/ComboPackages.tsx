
import React from 'react';
import PackageCard from './PackageCard';

const ComboPackages = () => {
  const packages = [
    {
      title: "Digital Launch Pad",
      description: "Perfect for new businesses establishing their online presence",
      price: "$999",
      features: [
        "Domain registration and hosting setup",
        "Basic website development (5-7 pages)",
        "SEO foundation (on-page optimization)",
        "Google Analytics setup",
        "Social media profile creation",
        "Basic business email setup"
      ]
    },
    {
      title: "E-Commerce Accelerator",
      description: "Complete solution for online stores ready to grow",
      price: "$2,499",
      features: [
        "Custom e-commerce site (CS-Cart or Shopify)",
        "Product catalog setup (up to 100 products)",
        "Payment gateway integration",
        "Basic inventory management",
        "SEO optimization for product pages",
        "Email marketing setup",
        "3 months maintenance support"
      ],
      popular: true
    },
    {
      title: "Business Optimizer",
      description: "Streamline operations with integrated business tools",
      price: "$3,999",
      features: [
        "CRM implementation",
        "Basic ERP module setup",
        "Website enhancement or redesign",
        "Advanced SEO campaign (3 months)",
        "Business process automation (2 processes)",
        "Data migration from legacy systems",
        "Staff training sessions"
      ]
    },
    {
      title: "Enterprise Transformation",
      description: "Complete digital transformation for established businesses",
      price: "Custom",
      features: [
        "Custom ERP solution development",
        "Advanced CRM with sales automation",
        "AI-powered business intelligence dashboard",
        "Process automation via machine learning",
        "Custom mobile application",
        "Comprehensive SEO strategy (6 months)",
        "Systems integration across platforms",
        "Dedicated support manager"
      ]
    }
  ];

  return (
    <section className="py-20" id="packages">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">Strategic Combo Packages</h2>
          <p className="text-muted-foreground text-lg">
            Tailored solution bundles designed to meet your specific business needs and maximize ROI.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              features={pkg.features}
              popular={pkg.popular}
              className="animate-fade-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ComboPackages;


import React from 'react';
import PackageCard from './PackageCard';

const ComboPackages = () => {
  const packages = [
    {
      title: "Digital Launch Pad",
      description: "Comprehensive digital foundation for new businesses",
      price: "$1,499",
      features: [
        "Professional domain & hosting setup",
        "Custom website development (5-7 pages)",
        "Responsive design across all devices",
        "SEO foundation implementation",
        "Google Analytics & Search Console setup",
        "Social media profile creation",
        "Business email configuration"
      ]
    },
    {
      title: "E-Commerce Accelerator",
      description: "Complete solution for online retail businesses",
      price: "$2,999",
      features: [
        "Enterprise e-commerce platform (CS-Cart/Shopify)",
        "Product catalog setup (up to 100 products)",
        "Secure payment gateway integration",
        "Inventory management system",
        "Order fulfillment workflow automation",
        "SEO optimization for product pages",
        "Email marketing automation",
        "3 months technical support included"
      ],
      popular: true
    },
    {
      title: "Business Optimizer",
      description: "Integrated tools for operational excellence",
      price: "$4,499",
      features: [
        "Custom CRM implementation & integration",
        "Business process automation (3 workflows)",
        "Data migration from legacy systems",
        "Custom reporting & analytics dashboard",
        "Team collaboration tools setup",
        "Staff training & knowledge transfer",
        "Advanced SEO & content strategy",
        "6 months priority support"
      ]
    },
    {
      title: "Enterprise Transformation",
      description: "Complete digital ecosystem for large organizations",
      price: "Custom",
      features: [
        "Enterprise architecture consultation",
        "Custom software development",
        "AI-powered business intelligence",
        "Legacy system modernization",
        "Process optimization & automation",
        "Cloud infrastructure implementation",
        "Data security & compliance framework",
        "Ongoing technical partnership"
      ]
    }
  ];

  return (
    <section className="py-20 bg-white dark:bg-gray-800" id="packages">
      <div className="section-container">
        <div className="section-header">
          <h2 className="section-title">Strategic Solution Packages</h2>
          <p className="section-description">
            Professionally engineered service combinations designed to deliver maximum business value
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {packages.map((pkg, index) => (
            <PackageCard
              key={index}
              title={pkg.title}
              description={pkg.description}
              price={pkg.price}
              features={pkg.features}
              popular={pkg.popular}
              className="fade-up hover-lift"
              style={{ animationDelay: `${index * 0.1}s` }}
            />
          ))}
        </div>
        
        {/* Professional data visualization element */}
        <div className="mt-16 flex justify-center">
          <div className="w-full max-w-4xl">
            <div className="flex items-center justify-between mb-8">
              <div className="tech-stat">
                <div className="tech-stat-value">99.9%</div>
                <div className="tech-stat-label">Uptime Guarantee</div>
              </div>
              <div className="tech-separator h-12 w-px"></div>
              <div className="tech-stat">
                <div className="tech-stat-value">24/7</div>
                <div className="tech-stat-label">Technical Support</div>
              </div>
              <div className="tech-separator h-12 w-px"></div>
              <div className="tech-stat">
                <div className="tech-stat-value">14+</div>
                <div className="tech-stat-label">Years Experience</div>
              </div>
              <div className="tech-separator h-12 w-px"></div>
              <div className="tech-stat">
                <div className="tech-stat-value">500+</div>
                <div className="tech-stat-label">Clients Worldwide</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      
      {/* Subtle tech background pattern */}
      <div className="absolute bottom-0 right-0 w-1/2 h-1/2 tech-grid-pattern opacity-20 pointer-events-none" />
    </section>
  );
};

export default ComboPackages;

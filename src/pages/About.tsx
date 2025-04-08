
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import CtaSection from '@/components/CtaSection';
import { CheckCircle2, Users, Trophy, Target, Clock } from 'lucide-react';

const AboutValue = ({ icon: Icon, title, description }: { icon: React.ElementType; title: string; description: string }) => {
  return (
    <div className="flex flex-col items-center text-center p-6">
      <div className="feature-icon mb-4">
        <Icon className="h-6 w-6" />
      </div>
      <h3 className="text-xl font-semibold mb-2">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
};

const About = () => {
  const values = [
    {
      icon: CheckCircle2,
      title: "Excellence",
      description: "We are committed to delivering quality in everything we do, from the code we write to the relationships we build."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "We believe in working closely with our clients, treating their challenges as our own and finding solutions together."
    },
    {
      icon: Trophy,
      title: "Innovation",
      description: "We continuously explore new technologies and approaches to provide cutting-edge solutions for our clients."
    },
    {
      icon: Target,
      title: "Results-Driven",
      description: "We focus on delivering measurable outcomes that drive real business growth and success."
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-nitinova-lightblue/20 dark:from-nitinova-blue dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text-gradient">About NiTiNova.tech</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Your trusted partner in digital transformation, dedicated to helping businesses thrive in the digital age.
            </p>
          </div>
        </section>

        {/* Our Story */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold mb-6">Our Story</h2>
                <p className="text-lg text-muted-foreground mb-4">
                  Founded in 2018, NiTiNova.tech began with a simple mission: to help businesses leverage technology effectively to achieve their goals.
                </p>
                <p className="text-lg text-muted-foreground mb-4">
                  What started as a small team of passionate developers has grown into a comprehensive digital solutions agency, serving clients across various industries and delivering end-to-end technology services.
                </p>
                <p className="text-lg text-muted-foreground">
                  Today, we're proud to have helped hundreds of businesses transform their digital presence, streamline operations, and embrace innovation for sustainable growth.
                </p>
              </div>
              <div className="rounded-xl bg-gradient-to-br from-nitinova-blue via-nitinova-teal to-nitinova-lightblue p-1">
                <div className="w-full h-full aspect-video bg-white rounded-lg flex items-center justify-center">
                  <img 
                    src="https://placehold.co/600x400/087E8B/FFFFFF?text=OUR+TEAM" 
                    alt="NiTiNova Team" 
                    className="rounded-lg w-full h-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Our Values */}
        <section className="py-20 bg-gray-50 dark:bg-gray-900">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Our Core Values</h2>
              <p className="text-lg text-muted-foreground">
                These principles guide everything we do, from how we develop solutions to how we interact with our clients.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <AboutValue
                  key={index}
                  icon={value.icon}
                  title={value.title}
                  description={value.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-3xl mx-auto mb-12">
              <h2 className="text-3xl font-bold mb-4">Why Choose NiTiNova.tech</h2>
              <p className="text-lg text-muted-foreground">
                We differentiate ourselves through our approach, expertise, and commitment to your success.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="service-card">
                <h3 className="text-xl font-semibold mb-4">Comprehensive Expertise</h3>
                <p className="text-muted-foreground mb-4">
                  Our team brings together specialists in development, design, data, AI, and business strategy to deliver holistic solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Full-stack development capabilities</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>UX/UI design expertise</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Data science and AI specialists</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Business analysis and consulting</span>
                  </li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-xl font-semibold mb-4">Client-Centered Approach</h3>
                <p className="text-muted-foreground mb-4">
                  We put your business needs at the center of everything we do, focusing on outcomes rather than outputs.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Transparent communication</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Tailored solutions to your specific needs</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Focus on ROI and business impact</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Long-term partnership approach</span>
                  </li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-xl font-semibold mb-4">Quality-Driven Development</h3>
                <p className="text-muted-foreground mb-4">
                  We adhere to industry best practices and standards to deliver robust, secure, and maintainable solutions.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Rigorous quality assurance processes</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Security-first approach</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Scalable architecture design</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Documented and maintainable code</span>
                  </li>
                </ul>
              </div>

              <div className="service-card">
                <h3 className="text-xl font-semibold mb-4">Continuous Support</h3>
                <p className="text-muted-foreground mb-4">
                  Our relationship doesn't end at delivery - we provide ongoing support and optimization to ensure long-term success.
                </p>
                <ul className="space-y-2">
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Responsive technical support</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Regular maintenance and updates</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Performance monitoring and optimization</span>
                  </li>
                  <li className="flex items-start">
                    <CheckCircle2 className="h-5 w-5 text-nitinova-teal flex-shrink-0 mr-2 mt-0.5" />
                    <span>Technology evolution guidance</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </section>

        <CtaSection />
      </main>
      <Footer />
    </div>
  );
};

export default About;

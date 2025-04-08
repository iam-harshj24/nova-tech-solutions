
import React from 'react';
import Navbar from '@/components/Navbar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Phone, Mail, MapPin, Clock } from 'lucide-react';

const ContactInfo = ({ icon: Icon, title, content }: { icon: React.ElementType; title: string; content: React.ReactNode }) => {
  return (
    <div className="flex items-start mb-6">
      <div className="feature-icon flex-shrink-0 mr-4">
        <Icon className="h-5 w-5" />
      </div>
      <div>
        <h3 className="font-semibold text-lg mb-1">{title}</h3>
        <div className="text-muted-foreground">{content}</div>
      </div>
    </div>
  );
};

const Contact = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1">
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-white to-nitinova-lightblue/20 dark:from-nitinova-blue dark:to-black">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 hero-text-gradient">Contact Us</h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Let's discuss how we can help transform your digital presence and drive your business forward.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div className="bg-white dark:bg-gray-800 rounded-xl shadow-sm border border-border p-8">
                <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
                    <div>
                      <label htmlFor="name" className="block text-sm font-medium mb-2">
                        Your Name
                      </label>
                      <Input
                        id="name"
                        type="text"
                        placeholder="John Doe"
                        className="w-full"
                      />
                    </div>
                    <div>
                      <label htmlFor="email" className="block text-sm font-medium mb-2">
                        Email Address
                      </label>
                      <Input
                        id="email"
                        type="email"
                        placeholder="john@example.com"
                        className="w-full"
                      />
                    </div>
                  </div>
                  
                  <div>
                    <label htmlFor="subject" className="block text-sm font-medium mb-2">
                      Subject
                    </label>
                    <Input
                      id="subject"
                      type="text"
                      placeholder="How can we help you?"
                      className="w-full"
                    />
                  </div>
                  
                  <div>
                    <label htmlFor="message" className="block text-sm font-medium mb-2">
                      Message
                    </label>
                    <Textarea
                      id="message"
                      placeholder="Tell us about your project..."
                      className="min-h-[150px] w-full"
                    />
                  </div>
                  
                  <Button className="w-full bg-nitinova-teal hover:bg-nitinova-blue text-white">
                    Send Message
                  </Button>
                </form>
              </div>
              
              {/* Contact Information */}
              <div>
                <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                
                <ContactInfo 
                  icon={Phone}
                  title="Phone"
                  content={<a href="tel:+15551234567" className="hover:text-nitinova-teal">+1 (555) 123-4567</a>}
                />
                
                <ContactInfo 
                  icon={Mail}
                  title="Email"
                  content={<a href="mailto:info@nitinova.tech" className="hover:text-nitinova-teal">info@nitinova.tech</a>}
                />
                
                <ContactInfo 
                  icon={MapPin}
                  title="Office"
                  content={
                    <>
                      <p>123 Tech Boulevard, Innovation District,</p>
                      <p>San Francisco, CA 94105</p>
                    </>
                  }
                />
                
                <ContactInfo 
                  icon={Clock}
                  title="Business Hours"
                  content={
                    <>
                      <p>Monday - Friday: 9:00 AM - 6:00 PM</p>
                      <p>Saturday - Sunday: Closed</p>
                    </>
                  }
                />
                
                <div className="mt-8">
                  <h3 className="font-semibold text-lg mb-4">Follow Us</h3>
                  <div className="flex space-x-4">
                    <a href="#" className="h-10 w-10 rounded-full bg-nitinova-blue/10 flex items-center justify-center text-nitinova-blue hover:bg-nitinova-teal hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-nitinova-blue/10 flex items-center justify-center text-nitinova-blue hover:bg-nitinova-teal hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-nitinova-blue/10 flex items-center justify-center text-nitinova-blue hover:bg-nitinova-teal hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                        <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" />
                        <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                      </svg>
                    </a>
                    <a href="#" className="h-10 w-10 rounded-full bg-nitinova-blue/10 flex items-center justify-center text-nitinova-blue hover:bg-nitinova-teal hover:text-white transition-colors">
                      <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" />
                        <rect x="2" y="9" width="4" height="12" />
                        <circle cx="4" cy="4" r="2" />
                      </svg>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;

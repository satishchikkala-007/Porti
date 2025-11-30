import React, { useState, useEffect, useRef } from 'react';
import { Mail, Phone, MapPin, Send } from 'lucide-react';
import { Button } from './ui/button';
import { Input } from './ui/input';
import { Textarea } from './ui/textarea';
import { useToast } from '../hooks/use-toast';
import { personalInfo } from '../data/mockData';

const ContactSection = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();
  const sectionRef = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate-fade-in');
          }
        });
      },
      { threshold: 0.1 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }

    return () => observer.disconnect();
  }, []);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    // Frontend-only: Save to localStorage
    const contacts = JSON.parse(localStorage.getItem('contacts') || '[]');
    contacts.push({
      ...formData,
      timestamp: new Date().toISOString()
    });
    localStorage.setItem('contacts', JSON.stringify(contacts));

    toast({
      title: "Message Sent!",
      description: "Thank you for reaching out. I'll get back to you soon.",
    });

    setFormData({
      name: '',
      email: '',
      subject: '',
      message: ''
    });
  };

  return (
    <section id="contact" className="py-20 bg-black" ref={sectionRef}>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl sm:text-5xl font-bold mb-4">Let's Talk On Special</h2>
          <div className="w-20 h-1 bg-green-500 mx-auto"></div>
          <p className="text-gray-400 mt-6 max-w-2xl mx-auto">
            Have a project in mind? Let's work together to create something amazing
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-12 max-w-6xl mx-auto">
          <div className="space-y-8">
            <div>
              <h3 className="text-2xl font-bold mb-6">Get in Touch</h3>
              <p className="text-gray-400 mb-8">
                I'm always open to discussing new projects, creative ideas, or opportunities to be part of your vision.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-center gap-4 group">
                <div className="bg-green-500/20 p-4 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <Mail className="text-green-500" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Email</div>
                  <div className="font-semibold">{personalInfo.email}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-green-500/20 p-4 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <Phone className="text-green-500" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Phone</div>
                  <div className="font-semibold">{personalInfo.phone}</div>
                </div>
              </div>

              <div className="flex items-center gap-4 group">
                <div className="bg-green-500/20 p-4 rounded-lg group-hover:bg-green-500/30 transition-colors">
                  <MapPin className="text-green-500" size={24} />
                </div>
                <div>
                  <div className="text-sm text-gray-400">Location</div>
                  <div className="font-semibold">{personalInfo.location}</div>
                </div>
              </div>
            </div>
          </div>

          <div className="bg-gray-900 p-8 rounded-xl border border-gray-800">
            <form onSubmit={handleSubmit} className="space-y-6">
              <div>
                <label htmlFor="name" className="block text-sm font-medium mb-2">
                  Your Name
                </label>
                <Input
                  id="name"
                  name="name"
                  type="text"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="bg-black border-gray-700 focus:border-green-500 text-white"
                  placeholder="John Doe"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  Your Email
                </label>
                <Input
                  id="email"
                  name="email"
                  type="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="bg-black border-gray-700 focus:border-green-500 text-white"
                  placeholder="john@example.com"
                />
              </div>

              <div>
                <label htmlFor="subject" className="block text-sm font-medium mb-2">
                  Subject
                </label>
                <Input
                  id="subject"
                  name="subject"
                  type="text"
                  value={formData.subject}
                  onChange={handleChange}
                  required
                  className="bg-black border-gray-700 focus:border-green-500 text-white"
                  placeholder="Project Inquiry"
                />
              </div>

              <div>
                <label htmlFor="message" className="block text-sm font-medium mb-2">
                  Message
                </label>
                <Textarea
                  id="message"
                  name="message"
                  value={formData.message}
                  onChange={handleChange}
                  required
                  rows={5}
                  className="bg-black border-gray-700 focus:border-green-500 text-white"
                  placeholder="Tell me about your project..."
                />
              </div>

              <Button
                type="submit"
                className="w-full bg-green-600 hover:bg-green-700 text-white py-6 text-lg transition-all"
              >
                <Send className="mr-2" size={20} />
                Send Message
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactSection;

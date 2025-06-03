import React, { useState } from 'react';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Button } from '@/components/ui/button';
import { Textarea } from '@/components/ui/textarea';
import { MapPin, Phone, Mail, Clock, Instagram } from 'lucide-react';
import { useToast } from '@/hooks/use-toast';

export const ContactForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const { toast } = useToast();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Message Sent!",
      description: "Thank you for your message. We'll get back to you within 24 hours.",
    });

    setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  return (
    <section className="py-16 px-4 lg:px-6">
      <div className="container mx-auto max-w-6xl">
        <h2 className="text-2xl lg:text-3xl font-playfair font-semibold text-oasis-espresso text-center mb-12">
          Get In Touch
        </h2>

        <div className="grid lg:grid-cols-2 gap-8">
          {/* Contact Form */}
          <Card className="border-oasis-taupe/20">
            <CardHeader>
              <CardTitle className="text-lg font-playfair text-oasis-espresso">Send us a Message</CardTitle>
            </CardHeader>
            <CardContent>
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="name" className="text-sm font-medium text-oasis-espresso">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      className="border-oasis-taupe/30 focus:border-oasis-taupe"
                      required
                    />
                  </div>
                  <div>
                    <Label htmlFor="email" className="text-sm font-medium text-oasis-espresso">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      className="border-oasis-taupe/30 focus:border-oasis-taupe"
                      required
                    />
                  </div>
                </div>

                <div className="grid md:grid-cols-2 gap-4">
                  <div>
                    <Label htmlFor="phone" className="text-sm font-medium text-oasis-espresso">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="border-oasis-taupe/30 focus:border-oasis-taupe"
                    />
                  </div>
                  <div>
                    <Label htmlFor="subject" className="text-sm font-medium text-oasis-espresso">Subject</Label>
                    <Input
                      id="subject"
                      name="subject"
                      value={formData.subject}
                      onChange={handleChange}
                      className="border-oasis-taupe/30 focus:border-oasis-taupe"
                    />
                  </div>
                </div>

                <div>
                  <Label htmlFor="message" className="text-sm font-medium text-oasis-espresso">Message *</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows={4}
                    className="border-oasis-taupe/30 focus:border-oasis-taupe resize-none"
                    required
                  />
                </div>

                <Button
                  type="submit"
                  className="w-full bg-oasis-espresso hover:bg-oasis-hover text-white"
                >
                  Send Message
                </Button>
              </form>
            </CardContent>
          </Card>

          {/* Contact Information */}
          <div className="space-y-6">
            <Card className="border-oasis-taupe/20">
              <CardContent className="p-6">
                <h3 className="text-lg font-playfair font-semibold text-oasis-espresso mb-4">Visit Our Studio</h3>
                <div className="space-y-4">

                  <div className="flex items-start space-x-3">
                    <Phone className="w-5 h-5 text-oasis-taupe mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-oasis-espresso">Phone</p>
                      <p className="text-sm text-oasis-hover">0451 167 457</p>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Mail className="w-5 h-5 text-oasis-taupe mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-oasis-espresso">Email</p>
                      <a href="mailto:theoasissco@gmail.com" className="text-sm text-oasis-hover hover:text-oasis-espresso">
                        theoasissco@gmail.com
                      </a>
                    </div>
                  </div>

                  <div className="flex items-start space-x-3">
                    <Clock className="w-5 h-5 text-oasis-taupe mt-0.5" />
                    <div>
                      <p className="text-sm font-medium text-oasis-espresso">Hours</p>
                      <div className="text-sm text-oasis-hover">
                        <p>Sunday: 8 AM – 2:30 PM</p>
                        <p>Monday: Closed</p>
                        <p>Tuesday: 11 AM – 9:30 PM</p>
                        <p>Wednesday: Closed</p>
                        <p>Thursday: 11 AM – 9 PM</p>
                        <p>Friday: Closed</p>
                        <p>Saturday: 11 AM – 9 PM</p>
                        <p className="text-xs text-oasis-hover mt-2">Time zone: Australian Eastern Standard Time (AEST)</p>
                      </div>
                    </div>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="border-oasis-taupe/20 bg-oasis-contrast">
              <CardContent className="p-6">
                <h3 className="text-lg font-playfair font-semibold text-oasis-espresso mb-3">Follow Us</h3>
                <p className="text-sm text-oasis-hover mb-4">
                  Stay updated with our latest work and beauty tips on social media.
                </p>
                <div className="flex gap-4 mt-3">
                  <a href="https://www.instagram.com/oasisaesthetics.co/" target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                    <Instagram className="w-6 h-6 text-brown-500 hover:text-brown-700 transition" />
                  </a>
                  <a href="https://www.tiktok.com/@oasisaesthetics2" target="_blank" rel="noopener noreferrer" aria-label="TikTok">
                    <svg className="w-6 h-6 text-brown-500 hover:text-brown-700 transition" fill="currentColor" aria-hidden="true">
                      <path d="M9.75 0h4.5v4.5h3.75a6.75 6.75 0 0 0 6.75 6.75v4.5a11.25 11.25 0 0 1-11.25-11.25V0zM6.75 11.25a3.375 3.375 0 1 0 3.375 3.375v-4.5a6.75 6.75 0 1 1-6.75 6.75 3.375 3.375 0 1 0 3.375-3.375z"/>
                    </svg>
                  </a>
                  <a href="mailto:theoasissco@gmail.com" aria-label="Email">
                    <Mail className="w-6 h-6 text-brown-500 hover:text-brown-700 transition" />
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

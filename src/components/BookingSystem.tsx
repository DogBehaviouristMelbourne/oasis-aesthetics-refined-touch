
import React, { useState } from 'react';
import { Calendar } from '@/components/ui/calendar';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Popover, PopoverContent, PopoverTrigger } from '@/components/ui/popover';
import { CalendarIcon, Clock } from 'lucide-react';
import { format } from 'date-fns';
import { cn } from '@/lib/utils';
import { useToast } from '@/hooks/use-toast';

const services = [
  { name: 'Eyebrow Sculpting', duration: '45 min', price: '$65' },
  { name: 'Eyebrow Tinting', duration: '30 min', price: '$35' },
  { name: 'Full Face Wax', duration: '60 min', price: '$85' },
  { name: 'Upper Lip Wax', duration: '15 min', price: '$25' },
];

const timeSlots = [
  '9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM',
  '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM'
];

export const BookingSystem = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState('');
  const [selectedService, setSelectedService] = useState('');
  const [clientInfo, setClientInfo] = useState({
    name: '',
    email: '',
    phone: '',
    notes: ''
  });
  const { toast } = useToast();

  const handleBooking = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedDate || !selectedTime || !selectedService || !clientInfo.name || !clientInfo.email) {
      toast({
        title: "Missing Information",
        description: "Please fill in all required fields.",
        variant: "destructive",
      });
      return;
    }

    toast({
      title: "Booking Request Sent!",
      description: `We'll contact you soon to confirm your ${selectedService} appointment on ${format(selectedDate, 'PPP')} at ${selectedTime}.`,
    });

    // Reset form
    setSelectedDate(undefined);
    setSelectedTime('');
    setSelectedService('');
    setClientInfo({ name: '', email: '', phone: '', notes: '' });
  };

  return (
    <section className="py-16 px-4 lg:px-6 bg-oasis-contrast">
      <div className="container mx-auto max-w-4xl">
        <h2 className="text-2xl lg:text-3xl font-playfair font-semibold text-oasis-espresso text-center mb-8">
          Book Your Appointment
        </h2>
        
        <Card className="border-oasis-taupe/20">
          <CardHeader>
            <CardTitle className="text-lg font-playfair text-oasis-espresso">Schedule Your Visit</CardTitle>
          </CardHeader>
          <CardContent>
            <form onSubmit={handleBooking} className="space-y-6">
              {/* Service Selection */}
              <div>
                <Label className="text-sm font-medium text-oasis-espresso mb-3 block">Select Service</Label>
                <div className="grid md:grid-cols-2 gap-3">
                  {services.map((service) => (
                    <div
                      key={service.name}
                      onClick={() => setSelectedService(service.name)}
                      className={cn(
                        "p-3 border rounded-lg cursor-pointer transition-all duration-200 hover:shadow-md",
                        selectedService === service.name
                          ? "border-oasis-taupe bg-oasis-taupe/10"
                          : "border-oasis-taupe/30 hover:border-oasis-taupe"
                      )}
                    >
                      <div className="font-medium text-sm text-oasis-espresso">{service.name}</div>
                      <div className="text-xs text-oasis-hover flex justify-between">
                        <span>{service.duration}</span>
                        <span>{service.price}</span>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Date Selection */}
              <div>
                <Label className="text-sm font-medium text-oasis-espresso mb-3 block">Select Date</Label>
                <Popover>
                  <PopoverTrigger asChild>
                    <Button
                      variant="outline"
                      className={cn(
                        "w-full justify-start text-left font-normal border-oasis-taupe/30",
                        !selectedDate && "text-muted-foreground"
                      )}
                    >
                      <CalendarIcon className="mr-2 h-4 w-4" />
                      {selectedDate ? format(selectedDate, "PPP") : "Pick a date"}
                    </Button>
                  </PopoverTrigger>
                  <PopoverContent className="w-auto p-0" align="start">
                    <Calendar
                      mode="single"
                      selected={selectedDate}
                      onSelect={setSelectedDate}
                      disabled={(date) => date < new Date() || date.getDay() === 0}
                      initialFocus
                      className="pointer-events-auto"
                    />
                  </PopoverContent>
                </Popover>
              </div>

              {/* Time Selection */}
              <div>
                <Label className="text-sm font-medium text-oasis-espresso mb-3 block">Select Time</Label>
                <div className="grid grid-cols-3 md:grid-cols-5 gap-2">
                  {timeSlots.map((time) => (
                    <button
                      key={time}
                      type="button"
                      onClick={() => setSelectedTime(time)}
                      className={cn(
                        "p-2 text-xs border rounded transition-all duration-200",
                        selectedTime === time
                          ? "border-oasis-taupe bg-oasis-taupe text-white"
                          : "border-oasis-taupe/30 text-oasis-espresso hover:border-oasis-taupe"
                      )}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>

              {/* Client Information */}
              <div className="grid md:grid-cols-2 gap-4">
                <div>
                  <Label htmlFor="name" className="text-sm font-medium text-oasis-espresso">Name *</Label>
                  <Input
                    id="name"
                    value={clientInfo.name}
                    onChange={(e) => setClientInfo({...clientInfo, name: e.target.value})}
                    className="border-oasis-taupe/30 focus:border-oasis-taupe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="email" className="text-sm font-medium text-oasis-espresso">Email *</Label>
                  <Input
                    id="email"
                    type="email"
                    value={clientInfo.email}
                    onChange={(e) => setClientInfo({...clientInfo, email: e.target.value})}
                    className="border-oasis-taupe/30 focus:border-oasis-taupe"
                    required
                  />
                </div>
                <div>
                  <Label htmlFor="phone" className="text-sm font-medium text-oasis-espresso">Phone</Label>
                  <Input
                    id="phone"
                    value={clientInfo.phone}
                    onChange={(e) => setClientInfo({...clientInfo, phone: e.target.value})}
                    className="border-oasis-taupe/30 focus:border-oasis-taupe"
                  />
                </div>
                <div>
                  <Label htmlFor="notes" className="text-sm font-medium text-oasis-espresso">Special Requests</Label>
                  <Input
                    id="notes"
                    value={clientInfo.notes}
                    onChange={(e) => setClientInfo({...clientInfo, notes: e.target.value})}
                    className="border-oasis-taupe/30 focus:border-oasis-taupe"
                    placeholder="Any special requests or concerns?"
                  />
                </div>
              </div>

              <Button
                type="submit"
                className="w-full bg-oasis-espresso hover:bg-oasis-hover text-white py-3"
              >
                Request Appointment
              </Button>
            </form>
          </CardContent>
        </Card>
      </div>
    </section>
  );
};

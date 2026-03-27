import { useState, useEffect } from 'react';
import { useSearchParams } from 'react-router-dom';
import { venues } from '../data/venues';
import { Check } from 'lucide-react';

export default function Contact() {
  const [searchParams] = useSearchParams();
  const preselectedVenueId = searchParams.get('venue');

  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    eventType: '',
    date: '',
    venueId: preselectedVenueId || '',
    description: ''
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  useEffect(() => {
    if (preselectedVenueId) {
      setFormData(prev => ({ ...prev, venueId: preselectedVenueId }));
    }
  }, [preselectedVenueId]);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call for MVP
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setFormData({
        firstName: '', lastName: '', email: '', phone: '',
        eventType: '', date: '', venueId: '', description: ''
      });
      setTimeout(() => setIsSuccess(false), 5000);
    }, 1500);
  };

  return (
    <div className="w-full bg-secondary pt-12 pb-24">
      <div className="max-w-4xl mx-auto px-6 md:px-12">
        {/* Header */}
        <div className="mb-20 text-center">
          <p className="tracking-widest uppercase text-xs text-primary/50 mb-6 font-semibold">Inquiries</p>
          <h1 className="text-4xl md:text-6xl font-serif text-primary font-light mb-8">
            Connect With <span className="italic text-primary/80">Us</span>
          </h1>
          <p className="text-primary/70 font-light max-w-xl mx-auto">
            Share the details of your vision, and our curation team will respond promptly with availability, pricing, and next steps for your exclusive event.
          </p>
        </div>

        {/* Form Container */}
        <div className="bg-white/50 backdrop-blur-sm border border-primary/10 p-8 md:p-16 shadow-2xl">
          
          {isSuccess ? (
            <div className="text-center py-16 flex flex-col items-center">
              <div className="w-20 h-20 rounded-full bg-accent/20 flex items-center justify-center mb-8">
                <Check size={40} className="text-accent" strokeWidth={1} />
              </div>
              <h3 className="text-3xl font-serif text-primary mb-4">Inquiry Received</h3>
              <p className="text-primary/70 font-light max-w-md mx-auto">
                Thank you for entrusting Your Time. A curation specialist will review your request and contact you within 24 hours.
              </p>
            </div>
          ) : (
            <form onSubmit={handleSubmit} className="space-y-8">
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="firstName" className="text-xs uppercase tracking-widest text-primary/60 mb-2 font-medium">First Name *</label>
                  <input required id="firstName" name="firstName" type="text" value={formData.firstName} onChange={handleChange} 
                    className="border-b border-primary/20 bg-transparent py-2 text-primary focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="lastName" className="text-xs uppercase tracking-widest text-primary/60 mb-2 font-medium">Last Name *</label>
                  <input required id="lastName" name="lastName" type="text" value={formData.lastName} onChange={handleChange} 
                    className="border-b border-primary/20 bg-transparent py-2 text-primary focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="email" className="text-xs uppercase tracking-widest text-primary/60 mb-2 font-medium">Email Address *</label>
                  <input required id="email" name="email" type="email" value={formData.email} onChange={handleChange} 
                    className="border-b border-primary/20 bg-transparent py-2 text-primary focus:outline-none focus:border-accent transition-colors" />
                </div>
                <div className="flex flex-col">
                  <label htmlFor="phone" className="text-xs uppercase tracking-widest text-primary/60 mb-2 font-medium">Phone Number</label>
                  <input id="phone" name="phone" type="tel" value={formData.phone} onChange={handleChange} 
                    className="border-b border-primary/20 bg-transparent py-2 text-primary focus:outline-none focus:border-accent transition-colors" />
                </div>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="flex flex-col">
                  <label htmlFor="eventType" className="text-xs uppercase tracking-widest text-primary/60 mb-2 font-medium">Event Type *</label>
                  <select required id="eventType" name="eventType" value={formData.eventType} onChange={handleChange} 
                    className="border-b border-primary/20 bg-transparent py-2 text-primary focus:outline-none focus:border-accent transition-colors appearance-none shadow-none rounded-none">
                    <option value="" disabled className="text-primary/40">Select Type</option>
                    <option value="Wedding">Wedding</option>
                    <option value="Corporate">Corporate Gathering</option>
                    <option value="Social">Private Social Event</option>
                    <option value="Production">Film / Production</option>
                    <option value="Other">Other</option>
                  </select>
                </div>
                <div className="flex flex-col">
                  <label htmlFor="date" className="text-xs uppercase tracking-widest text-primary/60 mb-2 font-medium">Target Date</label>
                  <input id="date" name="date" type="date" value={formData.date} onChange={handleChange} 
                    className="border-b border-primary/20 bg-transparent py-2 text-primary focus:outline-none focus:border-accent transition-colors opacity-80" />
                </div>
              </div>

              <div className="flex flex-col">
                <label htmlFor="venueId" className="text-xs uppercase tracking-widest text-primary/60 mb-2 font-medium">Venue of Interest</label>
                <select id="venueId" name="venueId" value={formData.venueId} onChange={handleChange} 
                  className="border-b border-primary/20 bg-transparent py-2 text-primary focus:outline-none focus:border-accent transition-colors appearance-none shadow-none rounded-none">
                  <option value="" className="text-primary/40">I am open / I need guidance</option>
                  {venues.map(v => (
                    <option key={v.id} value={v.id}>{v.name}</option>
                  ))}
                </select>
              </div>

              <div className="flex flex-col">
                <label htmlFor="description" className="text-xs uppercase tracking-widest text-primary/60 mb-4 font-medium">Tell us about your event *</label>
                <textarea required id="description" name="description" rows="4" value={formData.description} onChange={handleChange} 
                  className="border border-primary/20 bg-transparent p-4 text-primary focus:outline-none focus:border-accent transition-colors resize-none placeholder-primary/30"
                  placeholder="Estimated guest count, stylistic vision, and any specific requirements..."
                ></textarea>
              </div>

              <div className="pt-8 flex justify-end">
                <button 
                  type="submit" 
                  disabled={isSubmitting}
                  className="px-12 py-4 bg-primary text-secondary text-sm tracking-widest uppercase hover:bg-accent hover:text-white transition-all duration-300 disabled:opacity-70 disabled:hover:bg-primary"
                >
                  {isSubmitting ? 'Submitting...' : 'Submit Inquiry'}
                </button>
              </div>

            </form>
          )}

        </div>
      </div>
    </div>
  );
}

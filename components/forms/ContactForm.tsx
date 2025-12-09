"use client";

import { useState, FormEvent } from 'react';
import Button from '../ui/Button';

export default function ContactForm() {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    service: 'Web Development',
    message: '',
  });

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));
    
    console.log('Form submitted:', formData);
    alert('Thank you for your message! We will get back to you soon.');
    
    setFormData({
      fullName: '',
      email: '',
      phone: '',
      service: 'Web Development',
      message: '',
    });
    
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col">
          <span className="text-slate-300 text-sm font-medium mb-2">
            Full Name
          </span>
          <input
            type="text"
            name="fullName"
            value={formData.fullName}
            onChange={handleChange}
            required
            className="form-input flex w-full rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-700 bg-slate-800/50 h-12 px-4 text-base"
            placeholder="John Doe"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-slate-300 text-sm font-medium mb-2">
            Email Address
          </span>
          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            className="form-input flex w-full rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-700 bg-slate-800/50 h-12 px-4 text-base"
            placeholder="you@example.com"
          />
        </label>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
        <label className="flex flex-col">
          <span className="text-slate-300 text-sm font-medium mb-2">
            Phone Number <span className="text-slate-500">(Optional)</span>
          </span>
          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            className="form-input flex w-full rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-700 bg-slate-800/50 h-12 px-4 text-base"
            placeholder="+1 (555) 000-0000"
          />
        </label>

        <label className="flex flex-col">
          <span className="text-slate-300 text-sm font-medium mb-2">
            Service of Interest
          </span>
          <select
            name="service"
            value={formData.service}
            onChange={handleChange}
            className="form-select flex w-full rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-700 bg-slate-800/50 h-12 px-4 text-base"
          >
            <option>Web Development</option>
            <option>Video Editing</option>
            <option>Brand Design</option>
            <option>Other</option>
          </select>
        </label>
      </div>

      <label className="flex flex-col">
        <span className="text-slate-300 text-sm font-medium mb-2">
          Message
        </span>
        <textarea
          name="message"
          value={formData.message}
          onChange={handleChange}
          required
          rows={5}
          className="form-textarea flex w-full rounded-lg text-white focus:outline-0 focus:ring-2 focus:ring-primary border border-slate-700 bg-slate-800/50 p-4 text-base resize-y"
          placeholder="Tell us about your project..."
        />
      </label>

      <Button 
        type="submit" 
        disabled={isSubmitting}
        className="w-full sm:w-auto"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

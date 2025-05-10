import React, { useState } from 'react';
import Button from '../components/ui/Button';
import { MapPin, Phone, Mail, Clock, Send } from 'lucide-react';

const ContactUs: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: ''
  });
  const [submitting, setSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prevData => ({
      ...prevData,
      [name]: value
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitting(true);
    setError('');
    
    // Simulate form submission
    setTimeout(() => {
      // In a real app, you would send this data to a server
      console.log('Form submitted:', formData);
      setSubmitting(false);
      setSubmitted(true);
      setFormData({
        name: '',
        email: '',
        phone: '',
        subject: '',
        message: ''
      });
    }, 1500);
  };

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="bg-gradient-to-r from-green-600 to-green-500 text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl">
            <h1 className="text-4xl font-bold mb-4">Contact Us</h1>
            <p className="text-xl text-green-100">
              Have questions or need assistance? Our team is here to help. Reach out to us using any of the methods below.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Information & Form Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:gap-12">
            {/* Contact Information */}
            <div className="lg:w-1/3 mb-12 lg:mb-0">
              <h2 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h2>
              
              <div className="space-y-8">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                      <MapPin className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Our Location</h3>
                    <p className="text-gray-600">123 Medical Center Blvd,<br />Healthcare City, HC 12345</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                      <Phone className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Phone Number</h3>
                    <p className="text-gray-600">Main: (123) 456-7890</p>
                    <p className="text-gray-600">Appointments: (123) 456-7891</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                      <Mail className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Email Address</h3>
                    <p className="text-gray-600">info@medicare-health.com</p>
                    <p className="text-gray-600">appointments@medicare-health.com</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-10 h-10 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                      <Clock className="h-5 w-5" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-medium text-gray-900 mb-1">Working Hours</h3>
                    <p className="text-gray-600">Monday - Friday: 8:00 AM - 8:00 PM</p>
                    <p className="text-gray-600">Saturday: 9:00 AM - 5:00 PM</p>
                    <p className="text-gray-600">Sunday: Emergency Only</p>
                  </div>
                </div>
              </div>
            </div>
            
            {/* Contact Form */}
            <div className="lg:w-2/3">
              <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
                <h2 className="text-2xl font-bold text-gray-900 mb-6">Send Us a Message</h2>
                
                {submitted ? (
                  <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
                    <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-2">Message Sent Successfully!</h3>
                    <p className="text-gray-600 mb-4">
                      Thank you for contacting us. We've received your message and will get back to you as soon as possible.
                    </p>
                    <Button onClick={() => setSubmitted(false)}>Send Another Message</Button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit}>
                    {error && (
                      <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md border border-red-200">
                        {error}
                      </div>
                    )}
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700 mb-1">
                          Your Name
                        </label>
                        <input
                          type="text"
                          id="name"
                          name="name"
                          value={formData.name}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          required
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">
                          Email Address
                        </label>
                        <input
                          type="email"
                          id="email"
                          name="email"
                          value={formData.email}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          required
                        />
                      </div>
                    </div>
                    
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                      <div>
                        <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">
                          Phone Number
                        </label>
                        <input
                          type="tel"
                          id="phone"
                          name="phone"
                          value={formData.phone}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        />
                      </div>
                      
                      <div>
                        <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">
                          Subject
                        </label>
                        <select
                          id="subject"
                          name="subject"
                          value={formData.subject}
                          onChange={handleChange}
                          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                          required
                        >
                          <option value="">Select a subject</option>
                          <option value="appointment">Appointment Inquiry</option>
                          <option value="billing">Billing Question</option>
                          <option value="feedback">Feedback</option>
                          <option value="general">General Inquiry</option>
                        </select>
                      </div>
                    </div>
                    
                    <div className="mb-6">
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">
                        Your Message
                      </label>
                      <textarea
                        id="message"
                        name="message"
                        value={formData.message}
                        onChange={handleChange}
                        rows={5}
                        className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
                        required
                      ></textarea>
                    </div>
                    
                    <Button
                      type="submit"
                      disabled={submitting}
                      className="flex items-center"
                    >
                      {submitting ? (
                        <>
                          <div className="animate-spin rounded-full h-4 w-4 border-t-2 border-b-2 border-white mr-2"></div>
                          Sending...
                        </>
                      ) : (
                        <>
                          <Send className="h-4 w-4 mr-2" />
                          Send Message
                        </>
                      )}
                    </Button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-10">
            <h2 className="text-2xl font-bold text-gray-900 mb-2">Find Us</h2>
            <p className="text-gray-600">Visit our healthcare facility</p>
          </div>
          
          <div className="bg-white rounded-xl shadow-md p-2 border border-gray-100">
            <div className="aspect-w-16 aspect-h-9 rounded-lg overflow-hidden">
              <img 
                src="https://images.pexels.com/photos/2883049/pexels-photo-2883049.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Location Map" 
                className="w-full h-auto object-cover" 
              />
            </div>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Frequently Asked Questions</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Find answers to common questions about our services and policies.
            </p>
          </div>
          
          <div className="max-w-3xl mx-auto divide-y divide-gray-200">
            <div className="py-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">How do I schedule an appointment?</h3>
              <p className="text-gray-600">
                You can schedule an appointment by calling our office, using our online booking system, or visiting our facility in person. We recommend booking in advance for non-emergency visits.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What insurance plans do you accept?</h3>
              <p className="text-gray-600">
                We accept most major insurance plans. Please contact our billing department or check our website for a complete list of accepted insurance providers.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">What should I bring to my first appointment?</h3>
              <p className="text-gray-600">
                Please bring your photo ID, insurance card, list of current medications, and any relevant medical records or test results. Arriving 15 minutes early to complete paperwork is recommended.
              </p>
            </div>
            
            <div className="py-6">
              <h3 className="text-lg font-semibold text-gray-900 mb-2">Do you offer telehealth appointments?</h3>
              <p className="text-gray-600">
                Yes, we offer telehealth services for many types of appointments. Please call our office to determine if your visit is appropriate for a virtual consultation.
              </p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactUs;
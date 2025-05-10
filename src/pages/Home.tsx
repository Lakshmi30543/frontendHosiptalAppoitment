import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { getAllDoctors } from '../api/doctorApi';
import { Doctor } from '../types';
import DoctorCard from '../components/doctor/DoctorCard';
import Button from '../components/ui/Button';
import Spinner from '../components/ui/Spinner';
import { ArrowRight, Stethoscope, Clock, UserCheck } from 'lucide-react';

const Home: React.FC = () => {
  const [doctors, setDoctors] = useState<Doctor[]>([]);
  const [loading, setLoading] = useState(true);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchDoctors = async () => {
      try {
        const data = await getAllDoctors();
        setDoctors(data);
      } catch (error) {
        console.error('Error fetching doctors:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctors();
  }, []);

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-r from-green-700 to-green-500 text-white">
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/263402/pexels-photo-263402.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
        <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 md:py-28 lg:py-32">
          <div className="max-w-3xl">
            <h1 className="text-4xl md:text-5xl font-bold mb-6 leading-tight">
              Your Health is Our Priority
            </h1>
            <p className="text-xl mb-8 text-green-100">
              Quality healthcare services from experienced professionals. Book appointments with top specialists in just a few clicks.
            </p>
            <div className="flex flex-wrap gap-4">
              <Button 
                size="lg" 
                className="bg-white text-green-700 hover:bg-green-50 focus:ring-white"
                onClick={() => navigate('/signin')}
              >
                Book Appointment
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-white text-white hover:bg-green-600 focus:ring-white"
                onClick={() => navigate('/about')}
              >
                Learn More
              </Button>
            </div>
          </div>
        </div>
        
        {/* Wave Divider */}
        <div className="absolute bottom-0 left-0 right-0 overflow-hidden">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1200 120" preserveAspectRatio="none" className="fill-white h-16 w-full">
            <path d="M985.66,92.83C906.67,72,823.78,31,743.84,14.19c-82.26-17.34-168.06-16.33-250.45.39-57.84,11.73-114,31.07-172,41.86A600.21,600.21,0,0,1,0,27.35V120H1200V95.8C1132.19,118.92,1055.71,111.31,985.66,92.83Z"></path>
          </svg>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Choose MediCare</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Experience healthcare that puts you first with our patient-centered approach.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Stethoscope className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Expert Doctors</h3>
              <p className="text-gray-600">
                Our team consists of experienced specialists across various fields of medicine.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <Clock className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Easy Scheduling</h3>
              <p className="text-gray-600">
                Book appointments online at your convenience, 24/7, without waiting on hold.
              </p>
            </div>
            
            <div className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm text-center hover:shadow-md hover:-translate-y-1 transition-all duration-300">
              <div className="w-16 h-16 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mx-auto mb-4">
                <UserCheck className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Patient-Centered</h3>
              <p className="text-gray-600">
                We focus on your individual needs, ensuring personalized care and treatment.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Doctors Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center mb-12">
            <div>
              <h2 className="text-3xl font-bold text-gray-900 mb-2">Our Specialists</h2>
              <p className="text-xl text-gray-600">Meet our team of experienced doctors</p>
            </div>
            <Button 
              variant="outline" 
              className="hidden md:flex items-center"
              onClick={() => navigate('/about')}
            >
              View All Doctors
              <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
          
          {loading ? (
            <div className="flex justify-center items-center py-16">
              <Spinner size="lg" />
            </div>
          ) : (
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {doctors.map(doctor => (
                <DoctorCard key={doctor.id} doctor={doctor} />
              ))}
            </div>
          )}
          
          <div className="mt-10 text-center md:hidden">
            <Button 
              variant="outline"
              onClick={() => navigate('/about')}
            >
              View All Doctors
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 bg-gradient-to-r from-teal-600 to-teal-500 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-3/5">
              <h2 className="text-3xl font-bold mb-6">Ready to prioritize your health?</h2>
              <p className="text-xl mb-8 text-teal-100">
                Book an appointment with one of our specialists today and take the first step towards better health.
              </p>
            </div>
            <div className="mt-8 lg:mt-0">
              <Button 
                size="lg" 
                className="bg-white text-teal-600 hover:bg-teal-50 w-full sm:w-auto"
                onClick={() => navigate('/signin')}
              >
                Book Your Appointment
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">What Our Patients Say</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Hear from people who have experienced our care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <blockquote className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  JD
                </div>
                <div className="ml-3">
                  <p className="font-medium">John Doe</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I've been a patient at MediCare for years. The doctors are attentive, the staff is friendly, and I never have to wait long for an appointment."
              </p>
            </blockquote>
            
            <blockquote className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-purple-100 flex items-center justify-center text-purple-600 font-bold">
                  SJ
                </div>
                <div className="ml-3">
                  <p className="font-medium">Sarah Johnson</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "Dr. Chen is amazing! He took the time to explain everything thoroughly and put me at ease. The online booking system is also very convenient."
              </p>
            </blockquote>
            
            <blockquote className="p-6 border border-gray-100 rounded-xl bg-white shadow-sm hover:shadow-md transition-shadow duration-300">
              <div className="flex items-center mb-4">
                <div className="h-10 w-10 rounded-full bg-green-100 flex items-center justify-center text-green-600 font-bold">
                  RM
                </div>
                <div className="ml-3">
                  <p className="font-medium">Robert Martinez</p>
                  <div className="flex text-yellow-400">
                    {[...Array(5)].map((_, i) => (
                      <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                        <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                      </svg>
                    ))}
                  </div>
                </div>
              </div>
              <p className="text-gray-600 mb-4">
                "I brought my daughter to see Dr. Rodriguez and we had a wonderful experience. She has such a great way with kids and really made my daughter feel comfortable."
              </p>
            </blockquote>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
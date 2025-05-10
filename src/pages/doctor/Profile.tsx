import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { getProfile } from '../../api/doctorApi';
import { Doctor } from '../../types';
import BookAppointmentForm from '../../components/doctor/BookAppointmentForm';
import Spinner from '../../components/ui/Spinner';
import { MapPin, Phone, Mail, Calendar, Clock, Award, FileText } from 'lucide-react';

const DoctorProfile: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const [doctor, setDoctor] = useState<Doctor | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const fetchDoctorProfile = async () => {
      try {
        if (!id) {
          throw new Error('Doctor ID is required');
        }
        
        const data = await getProfile(id);
        setDoctor(data);
      } catch (err) {
        setError('Failed to load doctor profile. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchDoctorProfile();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12">
        <div className="text-center">
          <Spinner size="lg" />
          <p className="mt-4 text-gray-600">Loading doctor profile...</p>
        </div>
      </div>
    );
  }

  if (error || !doctor) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <svg className="h-16 w-16 text-red-500 mx-auto" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z" />
            </svg>
            <h2 className="text-2xl font-bold text-gray-900 mt-4">{error || "Doctor not found"}</h2>
            <p className="mt-2 text-gray-600">
              The doctor profile you're looking for could not be loaded. Please try again later.
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:flex lg:gap-8">
          {/* Doctor Information */}
          <div className="lg:w-2/3 mb-8 lg:mb-0">
            <div className="bg-white rounded-xl shadow-md overflow-hidden border border-gray-100">
              {/* Doctor Header */}
              <div className="md:flex">
                <div className="md:flex-shrink-0">
                  <img 
                    className="h-48 w-full object-cover md:w-48" 
                    src={doctor.photoUrl} 
                    alt={doctor.name} 
                  />
                </div>
                <div className="p-8">
                  <div className="flex items-center">
                    <h2 className="text-2xl font-bold text-gray-900">{doctor.name}</h2>
                    <span className="ml-3 inline-flex items-center px-3 py-0.5 rounded-full text-sm font-medium bg-green-100 text-green-800">
                      {doctor.specialty}
                    </span>
                  </div>
                  
                  <div className="mt-4 flex flex-wrap gap-3">
                    <div className="flex items-center text-gray-600">
                      <MapPin className="h-4 w-4 mr-1" />
                      <span>123 Medical Center Blvd, HC</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Phone className="h-4 w-4 mr-1" />
                      <span>(123) 456-7890</span>
                    </div>
                    <div className="flex items-center text-gray-600">
                      <Mail className="h-4 w-4 mr-1" />
                      <span>doctor@medicare.com</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Doctor Bio */}
              <div className="p-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">About Dr. {doctor.name.split(' ')[1]}</h3>
                <p className="text-gray-600 mb-6">{doctor.bio}</p>
                
                <div className="grid md:grid-cols-3 gap-6">
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Award className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-medium text-gray-900">Specialization</h4>
                    </div>
                    <p className="text-gray-600">{doctor.specialty}</p>
                  </div>
                  
                  <div className="bg-green-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <Calendar className="h-5 w-5 text-green-600 mr-2" />
                      <h4 className="font-medium text-gray-900">Experience</h4>
                    </div>
                    <p className="text-gray-600">15+ Years</p>
                  </div>
                  
                  <div className="bg-purple-50 p-4 rounded-lg">
                    <div className="flex items-center mb-2">
                      <FileText className="h-5 w-5 text-purple-600 mr-2" />
                      <h4 className="font-medium text-gray-900">Patient Reviews</h4>
                    </div>
                    <div className="flex items-center">
                      <div className="flex text-yellow-400 mr-1">
                        {[...Array(5)].map((_, i) => (
                          <svg key={i} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
                            <path fillRule="evenodd" d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z" clipRule="evenodd" />
                          </svg>
                        ))}
                      </div>
                      <span className="text-gray-600">4.9 (120 reviews)</span>
                    </div>
                  </div>
                </div>
              </div>
              
              {/* Doctor Availability */}
              <div className="p-8 border-t border-gray-100">
                <h3 className="text-xl font-semibold text-gray-900 mb-4">Schedule & Availability</h3>
                
                {doctor.availability && doctor.availability.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {doctor.availability.map((day, index) => (
                      <div key={index} className="border border-gray-200 rounded-lg overflow-hidden">
                        <div className="bg-gray-50 px-4 py-2 border-b border-gray-200">
                          <div className="flex items-center">
                            <Calendar className="h-4 w-4 text-green-600 mr-2" />
                            <h4 className="font-medium text-gray-900">{day.day}</h4>
                          </div>
                        </div>
                        <div className="p-4">
                          {day.slots.length > 0 ? (
                            <div className="grid grid-cols-2 gap-2">
                              {day.slots.map((time, idx) => (
                                <div 
                                  key={idx} 
                                  className="flex items-center text-sm bg-green-50 text-green-700 px-2 py-1 rounded"
                                >
                                  <Clock className="h-3 w-3 mr-1" />
                                  {time}
                                </div>
                              ))}
                            </div>
                          ) : (
                            <p className="text-gray-500 text-sm">No available slots</p>
                          )}
                        </div>
                      </div>
                    ))}
                  </div>
                ) : (
                  <p className="text-gray-500">No availability information.</p>
                )}
              </div>
            </div>
          </div>
          
          {/* Booking Form */}
          <div className="lg:w-1/3">
            <div className="sticky top-24">
              <BookAppointmentForm doctor={doctor} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DoctorProfile;
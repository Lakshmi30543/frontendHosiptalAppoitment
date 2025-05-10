import React from 'react';
import { Heart, Award, BookOpen, CheckCircle, Shield } from 'lucide-react';

const AboutUs: React.FC = () => {
  const teamMembers = [
    {
      name: 'Dr. Ponduri Lakshmi',
      role: 'Chief Medical Officer',
      photoUrl: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Board certified in cardiology with over 15 years of experience.'
    },
    {
      name: 'Dr. Bellamkonda Tilak',
      role: 'Head of Neurology',
      photoUrl: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Specializes in stroke prevention and treatment.'
    },
    {
      name: 'Dr. Tejaswi Ponduri',
      role: 'Pediatrics Director',
      photoUrl: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Focuses on childhood development and preventive care.'
    },
    {
      name: 'Dr. Mahalakshmi Vanga',
      role: 'Orthopedic Surgeon',
      photoUrl: 'https://images.pexels.com/photos/4173251/pexels-photo-4173251.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Specializes in sports injuries and joint replacements.'
    },
    {
       name: 'Dr. Anirudh Kalapala',
       role: 'Dermatology Consultant',
       photoUrl: 'https://images.pexels.com/photos/6749770/pexels-photo-6749770.jpeg?auto=compress&cs=tinysrgb&w=800',
       bio: 'Expert in skin disorders and cosmetic dermatology.'
    },
    {
       name: 'Dr. Sneha Reddy',
       role: 'ENT Specialist',
       photoUrl: 'https://images.pexels.com/photos/8460150/pexels-photo-8460150.jpeg?auto=compress&cs=tinysrgb&w=800',
       bio: 'Focused on ear, nose, and throat treatments with over 10 years of experience.'
    },
    {
       name: 'Dr. Raghav Ganta',
       role: 'Psychiatrist',
       photoUrl: 'https://images.pexels.com/photos/8376192/pexels-photo-8376192.jpeg?auto=compress&cs=tinysrgb&w=800',
       bio: 'Specializes in anxiety, depression, and adolescent mental health.'
    },
    {
      name: 'Dr. Bhavana Cherukuri',
      role: 'Gynecologist',
      photoUrl: 'https://images.pexels.com/photos/8376195/pexels-photo-8376195.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Expert in women’s health and prenatal care.'
    },
    {
      name: 'Dr. Surya Pratap',
      role: 'General Physician',
      photoUrl: 'https://images.pexels.com/photos/8460152/pexels-photo-8460152.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Primary care doctor with a holistic approach to health.'
    },
    {
      name: 'Dr. Kavya Nidamanuri',
      role: 'Oncology Specialist',
      photoUrl: 'https://images.pexels.com/photos/8376193/pexels-photo-8376193.jpeg?auto=compress&cs=tinysrgb&w=800',
      bio: 'Experienced in cancer diagnosis, care, and research.'
    }

    
  ];

  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero Section */}
      <section className="relative bg-green-700 text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold mb-6">About MediCare</h1>
            <p className="text-xl mb-8">
              Excellence in healthcare since 2005. Learn about our mission, values, and the exceptional team behind our success.
            </p>
          </div>
        </div>
        <div 
          className="absolute inset-0 bg-cover bg-center opacity-20" 
          style={{ 
            backgroundImage: "url('https://images.pexels.com/photos/247786/pexels-photo-247786.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')",
          }}
        ></div>
      </section>

      {/* Our Mission Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0">
              <img 
                src="https://images.pexels.com/photos/127873/pexels-photo-127873.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                alt="Medical team discussing" 
                className="rounded-xl shadow-lg w-full h-auto object-cover aspect-4/3" 
              />
            </div>
            <div className="lg:w-1/2">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our Mission</h2>
              <div className="prose prose-lg text-gray-600 max-w-none">
                <p>
                  At MediCare, our mission is to provide exceptional healthcare services with compassion, integrity, and excellence. We are committed to improving the health and well-being of our community through personalized care and cutting-edge medical practices.
                </p>
                <p>
                  We believe that healthcare should be accessible to all, which is why we strive to create a welcoming environment where patients feel respected, heard, and cared for. Our team of experienced professionals works together to deliver comprehensive care that addresses both the physical and emotional needs of our patients.
                </p>
                <p>
                  Through continuous education and adoption of innovative medical technologies, we aim to stay at the forefront of healthcare delivery, ensuring that our patients receive the best possible treatment and outcomes.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Our Values Section */}
      <section className="py-16 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Core Values</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              These principles guide every decision we make and every interaction we have with our patients.
            </p>
          </div>
          
          <div className="grid md:grid-cols-3 gap-8">
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                <Heart className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Compassion</h3>
              <p className="text-gray-600">
                We approach every patient with empathy and understanding, recognizing the unique needs and concerns of each individual.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-teal-100 text-teal-600 rounded-full flex items-center justify-center mb-4">
                <Award className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Excellence</h3>
              <p className="text-gray-600">
                We are committed to delivering the highest standard of care through continuous improvement and evidence-based practices.
              </p>
            </div>
            
            <div className="bg-white p-8 rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
              <div className="w-12 h-12 bg-purple-100 text-purple-600 rounded-full flex items-center justify-center mb-4">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900 mb-2">Integrity</h3>
              <p className="text-gray-600">
                We adhere to the highest ethical standards in all our actions, fostering trust and respect with our patients and colleagues.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold text-gray-900 mb-4">Meet Our Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Our highly qualified medical professionals are dedicated to providing exceptional care.
            </p>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamMembers.map((member, index) => (
              <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100 hover:shadow-md transition-shadow duration-300">
                <div className="h-64 overflow-hidden">
                  <img 
                    src={member.photoUrl} 
                    alt={member.name} 
                    className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105" 
                  />
                </div>
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-gray-900 mb-1">{member.name}</h3>
                  <p className="text-green-600 font-medium mb-3">{member.role}</p>
                  <p className="text-gray-600">{member.bio}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* History & Achievements */}
      <section className="py-16 bg-gradient-to-r from-green-50 to-indigo-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="lg:flex lg:items-center lg:gap-12">
            <div className="lg:w-1/2 mb-10 lg:mb-0 order-2 lg:order-1">
              <h2 className="text-3xl font-bold text-gray-900 mb-6">Our History & Achievements</h2>
              <div className="space-y-6">
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Founded in 2005</h3>
                    <p className="text-gray-600">Established with a vision to provide accessible, high-quality healthcare to the community.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Expanded in 2010</h3>
                    <p className="text-gray-600">Opened our state-of-the-art facility with advanced medical equipment and expanded services.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Excellence Award 2015</h3>
                    <p className="text-gray-600">Received the Regional Healthcare Excellence Award for outstanding patient care and innovation.</p>
                  </div>
                </div>
                
                <div className="flex">
                  <div className="flex-shrink-0">
                    <div className="w-8 h-8 bg-green-100 text-green-600 rounded-full flex items-center justify-center mr-4">
                      <CheckCircle className="h-4 w-4" />
                    </div>
                  </div>
                  <div>
                    <h3 className="text-lg font-semibold text-gray-900 mb-1">Digital Transformation 2020</h3>
                    <p className="text-gray-600">Implemented comprehensive electronic health records and telehealth services for enhanced accessibility.</p>
                  </div>
                </div>
              </div>
            </div>
            <div className="lg:w-1/2 order-1 lg:order-2">
              <div className="relative">
                <img 
                  src="https://images.pexels.com/photos/668300/pexels-photo-668300.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2" 
                  alt="Hospital building" 
                  className="rounded-xl shadow-lg w-full h-auto" 
                />
                <div className="absolute inset-0 rounded-xl shadow-inner bg-gradient-to-t from-green-900/20 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;
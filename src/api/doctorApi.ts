
import { Doctor, Appointment } from '../types';

// Mock data for development
const mockDoctors: Doctor[] = [
  {
    id: '1',
    name: 'Dr. Lakshmi Ponduri',
    specialty: 'Cardiology',
    bio: 'Dr. Johnson is a board-certified cardiologist with over 15 years of experience in treating heart conditions. She specializes in preventive cardiology and heart failure management.',
    photoUrl: 'https://images.pexels.com/photos/5214959/pexels-photo-5214959.jpeg?auto=compress&cs=tinysrgb&w=800',
    availability: [
      { day: 'Monday', slots: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'] },
      { day: 'Wednesday', slots: ['9:00 AM', '10:00 AM', '11:00 AM', '2:00 PM', '3:00 PM'] },
      { day: 'Friday', slots: ['9:00 AM', '10:00 AM', '11:00 AM'] }
    ]
  },
  {
    id: '2',
    name: 'Dr. Tilak Bellamkonda',
    specialty: 'Neurology',
    bio: 'Dr. Chen is a neurologist specializing in stroke prevention and treatment. He completed his residency at Johns Hopkins and has published numerous papers on neurological disorders.',
    photoUrl: 'https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=800',
    availability: [
      { day: 'Tuesday', slots: ['8:00 AM', '9:00 AM', '10:00 AM', '1:00 PM', '2:00 PM'] },
      { day: 'Thursday', slots: ['8:00 AM', '9:00 AM', '10:00 AM', '1:00 PM', '2:00 PM'] }
    ]
  },
  {
    id: '3',
    name: 'Dr. Tejaswi Ponduri',
    specialty: 'Pediatrics',
    bio: 'Dr. Rodriguez is a compassionate pediatrician with a focus on childhood development and preventive care. She has been practicing for 10 years and is beloved by her young patients.',
    photoUrl: 'https://images.pexels.com/photos/5215024/pexels-photo-5215024.jpeg?auto=compress&cs=tinysrgb&w=800',
    availability: [
      { day: 'Monday', slots: ['8:00 AM', '9:00 AM', '10:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'] },
      { day: 'Wednesday', slots: ['8:00 AM', '9:00 AM', '10:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'] },
      { day: 'Friday', slots: ['8:00 AM', '9:00 AM', '10:00 AM', '1:00 PM', '2:00 PM', '3:00 PM'] }
    ]
  },
  {
    id: '4',
    name: 'Dr. Arjun Mehta',
    specialty: 'Orthopedics',
    bio: 'Dr. Mehta is an experienced orthopedic surgeon with a focus on minimally invasive joint replacement and sports injuries. He has performed over 2,000 successful surgeries.',
    photoUrl: 'https://images.pexels.com/photos/8460098/pexels-photo-8460098.jpeg?auto=compress&cs=tinysrgb&w=800',
    availability: [
      { day: 'Tuesday', slots: ['9:00 AM', '10:00 AM', '11:00 AM'] },
      { day: 'Thursday', slots: ['1:00 PM', '2:00 PM', '3:00 PM'] }
    ]
},
{
  id: '5',
  name: 'Dr. Anjali Verma',
  specialty: 'Dermatology',
  bio: 'Dr. Verma is a dermatologist known for her patient-centered care and expertise in acne treatment, skin rejuvenation, and dermatologic surgery.',
  photoUrl: 'https://images.pexels.com/photos/8376299/pexels-photo-8376299.jpeg?auto=compress&cs=tinysrgb&w=800',
  availability: [
    { day: 'Monday', slots: ['10:00 AM', '11:00 AM', '2:00 PM'] },
    { day: 'Friday', slots: ['9:00 AM', '10:00 AM', '11:00 AM'] }
  ]
},
{
  id: '6',
  name: 'Dr. Nikhil Rao',
  specialty: 'Psychiatry',
  bio: 'Dr. Rao is a compassionate psychiatrist specializing in anxiety, depression, and adolescent mental health. He emphasizes holistic treatment plans.',
  photoUrl: 'https://images.pexels.com/photos/8460033/pexels-photo-8460033.jpeg?auto=compress&cs=tinysrgb&w=800',
  availability: [
    { day: 'Wednesday', slots: ['9:00 AM', '10:00 AM', '11:00 AM'] },
    { day: 'Thursday', slots: ['1:00 PM', '2:00 PM', '3:00 PM'] }
  ]
}
  
  
];

// This would be replaced with actual API endpoints in production
export async function getProfile(id: string): Promise<Doctor> {
  // Stub implementation for development
  // In production: return axios.get(`/api/doctors/${id}`).then(response => response.data);
  
  const doctor = mockDoctors.find(doc => doc.id === id);
  
  if (!doctor) {
    throw new Error(`Doctor with ID ${id} not found`);
  }
  
  return Promise.resolve(doctor);
}

export async function getAllDoctors(): Promise<Doctor[]> {
  // Stub implementation for development
  // In production: return axios.get('/api/doctors').then(response => response.data);
  
  return Promise.resolve(mockDoctors);
}

import axios from 'axios';

export const getDoctorAvailability = (doctorId: string) =>
  axios.get(`/api/doctors/${doctorId}/availability`);

export async function bookAppointment(data: Appointment): Promise<any> {
  // Stub implementation for development
  // In production: return axios.post('/api/appointments', data).then(response => response.data);
  
  console.log('Booking appointment:', data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return Promise.resolve({
    id: 'appt-' + Math.random().toString(36).substr(2, 9),
    ...data,
    status: 'scheduled'
  });
}

export interface ScheduleRecord {
  id: string;
  date: string;
  time: string;
  patientName: string;
}

const mockSchedule: ScheduleRecord[] = [
  {
    id: 'apt-001',
    date: '2025-05-12',
    time: '10:00 AM - 10:30 AM',
    patientName: 'Lakshmi Devi',
  },
  {
    id: 'apt-002',
    date: '2025-05-13',
    time: '11:00 AM - 11:30 AM',
    patientName: 'Ravi Kumar',
  },
];

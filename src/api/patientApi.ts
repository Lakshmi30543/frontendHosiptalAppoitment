import axios from 'axios';
import { HistoryRecord, Patient } from '../types';

// Mock data for development
const mockHistory: HistoryRecord[] = [
  {
    id: '1',
    date: '2023-10-15',
    doctorName: 'Dr. Lakshmi Ponduri',
    diagnosis: 'Hypertension',
    prescriptions: ['Lisinopril 10mg', 'Daily aspirin']
  },
  {
    id: '2',
    date: '2023-09-03',
    doctorName: 'Dr. Tilak Bellamkonda',
    diagnosis: 'Migraine',
    prescriptions: ['Sumatriptan 50mg', 'Ibuprofen 600mg'],
    notes: 'Follow up in 4 weeks if symptoms persist'
  },
  {
    id: '3',
    date: '2023-07-22',
    doctorName: 'Dr. tejaswi Ponduri',
    diagnosis: 'Seasonal allergies',
    prescriptions: ['Cetirizine 10mg'],
    notes: 'Recommended HEPA air filter for home'
  },
  {
    id: '4',
    date: '2023-05-10',
    doctorName: 'Dr. Priyanka chopra',
    diagnosis: 'Annual checkup',
    prescriptions: [],
    notes: 'All vitals normal. Recommended increase in daily exercise.'
  }
];

// This would be replaced with actual API endpoints in production
export async function getHistory(patientId: string): Promise<HistoryRecord[]> {
  // Stub implementation for development
  // In production: return axios.get(`/api/patients/${patientId}/history`).then(response => response.data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 800));
  
  return Promise.resolve(mockHistory);
}

export async function getPatient(patientId: string): Promise<Patient> {
  // Stub implementation for development
  // In production: return axios.get(`/api/patients/${patientId}`).then(response => response.data);
  
  // Simulate API delay
  await new Promise(resolve => setTimeout(resolve, 600));
  
  // Mock patient data
  return Promise.resolve({
    id: patientId,
    name: 'Kavitha',
    email: 'kavitaponduri@example.com',
    medicalRecordNumber: 'MRN-' + patientId.padStart(6, '0')
  });
}
export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  bio: string;
  photoUrl: string;
  availability?: {
    day: string;
    slots: string[];
  }[];
}

export interface Patient {
  id: string;
  name: string;
  email: string;
  medicalRecordNumber?: string;
}

export interface Appointment {
  id?: string;
  doctorId: string;
  patientId: string;
  date: string;
  time: string;
  reason: string;
  status: 'scheduled' | 'completed' | 'cancelled';
}

export interface HistoryRecord {
  id: string;
  date: string;
  doctorName: string;
  diagnosis: string;
  prescriptions: string[];
  notes?: string;
}

export interface ScheduleRecord {
  id: string;
  date: string;
  time: string;
  patientName: string;
}


export interface User {
  id: string;
  email: string;
  role: 'doctor' | 'patient' | 'admin';
  name: string;
}


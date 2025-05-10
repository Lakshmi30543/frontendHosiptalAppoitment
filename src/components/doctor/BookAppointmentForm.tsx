import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Appointment, Doctor } from '../../types';
import { bookAppointment } from '../../api/doctorApi';
import { useAuth } from '../../context/AuthContext';
import Button from '../ui/Button';
import Spinner from '../ui/Spinner';
import { Calendar, Clock, FileText } from 'lucide-react';

interface BookAppointmentFormProps {
  doctor: Doctor;
}

const BookAppointmentForm: React.FC<BookAppointmentFormProps> = ({ doctor }) => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [selectedDay, setSelectedDay] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [reason, setReason] = useState('');
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState('');

  // Filter available days
  const availableDays = doctor.availability || [];

  // Get available time slots for the selected day
  const availableTimeSlots = selectedDay
    ? (availableDays.find(day => day.day === selectedDay)?.slots || [])
    : [];

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate auth
    if (!isAuthenticated || !user) {
      navigate('/signin', { state: { from: `/doctor/${doctor.id}` } });
      return;
    }
    
    setLoading(true);
    setError('');
    
    try {
      const appointmentData: Appointment = {
        doctorId: doctor.id,
        patientId: user.id,
        date: selectedDay,
        time: selectedTime,
        reason,
        status: 'scheduled'
      };
      
      await bookAppointment(appointmentData);
      setSuccess(true);
      
      // Reset form
      setSelectedDay('');
      setSelectedTime('');
      setReason('');
      
    } catch (err) {
      setError('Failed to book appointment. Please try again.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  if (success) {
    return (
      <div className="bg-green-50 border border-green-200 rounded-lg p-6 text-center">
        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-semibold text-gray-900 mb-2">Appointment Booked!</h3>
        <p className="text-gray-600 mb-4">
          Your appointment with {doctor.name} has been scheduled successfully. 
          You will receive a confirmation email shortly.
        </p>
        <div className="flex justify-center space-x-3">
          <Button 
            onClick={() => setSuccess(false)} 
            variant="outline"
          >
            Book Another
          </Button>
          <Button onClick={() => navigate('/patient/history')}>
            View Appointments
          </Button>
        </div>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-lg border border-gray-200 p-6">
      <h3 className="text-xl font-semibold text-gray-900 mb-4">Book an Appointment</h3>
      
      {error && (
        <div className="mb-4 p-3 bg-red-50 text-red-700 rounded-md border border-red-200">
          {error}
        </div>
      )}
      
      <div className="mb-4">
        <label htmlFor="day" className="block text-sm font-medium text-gray-700 mb-1">
          <Calendar className="inline-block w-4 h-4 mr-1" />
          Select Day
        </label>
        <select
          id="day"
          value={selectedDay}
          onChange={(e) => {
            setSelectedDay(e.target.value);
            setSelectedTime(''); // Reset time when day changes
          }}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          required
        >
          <option value="">Select a day</option>
          {availableDays.map((day) => (
            <option key={day.day} value={day.day}>
              {day.day}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-4">
        <label htmlFor="time" className="block text-sm font-medium text-gray-700 mb-1">
          <Clock className="inline-block w-4 h-4 mr-1" />
          Select Time
        </label>
        <select
          id="time"
          value={selectedTime}
          onChange={(e) => setSelectedTime(e.target.value)}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          disabled={!selectedDay}
          required
        >
          <option value="">Select a time</option>
          {availableTimeSlots.map((time) => (
            <option key={time} value={time}>
              {time}
            </option>
          ))}
        </select>
      </div>
      
      <div className="mb-5">
        <label htmlFor="reason" className="block text-sm font-medium text-gray-700 mb-1">
          <FileText className="inline-block w-4 h-4 mr-1" />
          Reason for Visit
        </label>
        <textarea
          id="reason"
          value={reason}
          onChange={(e) => setReason(e.target.value)}
          rows={3}
          className="w-full px-3 py-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-green-500 focus:border-green-500"
          placeholder="Please briefly describe your symptoms or reason for the appointment"
          required
        />
      </div>
      
      <Button
        type="submit"
        fullWidth
        disabled={loading || !selectedDay || !selectedTime || !reason}
        className="flex justify-center items-center"
      >
        {loading ? <Spinner size="sm" color="white" className="mr-2" /> : null}
        {loading ? 'Booking Appointment...' : 'Book Appointment'}
      </Button>
      
      <p className="mt-3 text-xs text-gray-500 text-center">
        By booking an appointment, you agree to our Terms of Service and Privacy Policy.
      </p>
    </form>
  );
};

export default BookAppointmentForm;
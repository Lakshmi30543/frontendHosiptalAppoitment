import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { getHistory } from '../../api/patientApi';
import { HistoryRecord } from '../../types';
import { useAuth } from '../../context/AuthContext';
import Card, { CardHeader, CardBody } from '../../components/ui/Card';
import Spinner from '../../components/ui/Spinner';
import Button from '../../components/ui/Button';
import { Calendar, Clock, FileText, AlertCircle, User } from 'lucide-react';

const PatientHistory: React.FC = () => {
  const { user, isAuthenticated } = useAuth();
  const navigate = useNavigate();
  const [records, setRecords] = useState<HistoryRecord[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  
  useEffect(() => {
    // Check if user is authenticated
    if (!isAuthenticated) {
      navigate('/signin', { state: { from: '/patient/history' } });
      return;
    }
    
    
    // Check if user is a patient
    if (user?.role !== 'patient') {
      navigate('/');
      return;
    }
    
    const fetchHistory = async () => {
      try {
        // In a real app, this would use the actual user ID
        const patientId = user?.id || 'mock-patient-id';
        const data = await getHistory(patientId);
        setRecords(data);
      } catch (err) {
        setError('Failed to load medical history. Please try again later.');
        console.error(err);
      } finally {
        setLoading(false);
      }
    };

    fetchHistory();
  }, [isAuthenticated, navigate, user]);

  if (loading) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12">
        <div className="text-center">
          <Spinner size="lg" />
          <p className="mt-4 text-gray-600">Loading medical history...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center items-center min-h-screen bg-gray-50 py-12">
        <div className="max-w-md w-full mx-auto px-4 text-center">
          <div className="bg-white rounded-xl shadow-md p-8 border border-gray-100">
            <AlertCircle className="h-16 w-16 text-red-500 mx-auto" />
            <h2 className="text-2xl font-bold text-gray-900 mt-4">Error Loading Data</h2>
            <p className="mt-2 text-gray-600">
              {error}
            </p>
            <Button 
              className="mt-4" 
              onClick={() => window.location.reload()}
            >
              Try Again
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-8">
          <h1 className="text-3xl font-bold text-gray-900">Medical History</h1>
          <p className="text-gray-600 mt-2">
            View your past appointments, diagnoses, and prescriptions.
          </p>
        </div>
        
        {/* Patient Summary */}
        <Card className="mb-8">
          <CardHeader className="bg-green-50">
            <div className="flex items-center">
              <User className="h-5 w-5 text-green-600 mr-2" />
              <h2 className="text-xl font-semibold text-gray-900">Patient Information</h2>
            </div>
          </CardHeader>
          <CardBody>
            <div className="grid md:grid-cols-2 gap-4">
              <div>
                <p className="text-sm text-gray-500">Name</p>
                <p className="font-medium text-gray-900">{user?.name || 'John Doe'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Medical Record Number</p>
                <p className="font-medium text-gray-900">MRN-{user?.id || '123456'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Email</p>
                <p className="font-medium text-gray-900">{user?.email || 'patient@example.com'}</p>
              </div>
              <div>
                <p className="text-sm text-gray-500">Total Visits</p>
                <p className="font-medium text-gray-900">{records.length}</p>
              </div>
            </div>
          </CardBody>
        </Card>
        
        {/* History Timeline */}
        <div className="mb-6 flex items-center justify-between">
          <h2 className="text-2xl font-bold text-gray-900">Visit History</h2>
          <Button variant="outline" size="sm">
            Download Records
          </Button>
        </div>
        
        {records.length === 0 ? (
          <Card className="text-center py-12">
            <CardBody>
              <FileText className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No medical records found</h3>
              <p className="text-gray-600 mb-6">
                You don't have any past medical visits in our system.
              </p>
              <Button 
                onClick={() => navigate('/')}
              >
                Book Your First Appointment
              </Button>
            </CardBody>
          </Card>
        ) : (
          <div className="space-y-6">
            {records.map((record) => (
              <Card key={record.id} className="overflow-hidden">
                <div className="md:flex">
                  <div className="md:w-64 p-6 bg-green-50 md:flex md:flex-col md:justify-between">
                    <div>
                      <div className="flex items-center text-green-700 mb-2">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{record.date}</span>
                      </div>
                      <h3 className="text-lg font-semibold text-gray-900 mb-1">{record.doctorName}</h3>
                      <p className="text-sm text-gray-600">Visit ID: {record.id}</p>
                    </div>
                    <div className="mt-4 md:mt-0">
                      <Button 
                        size="sm" 
                        variant="outline" 
                        className="w-full md:w-auto"
                      >
                        View Details
                      </Button>
                    </div>
                  </div>
                  <div className="p-6 md:flex-1">
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Diagnosis</h4>
                      <p className="text-gray-900">{record.diagnosis}</p>
                    </div>
                    
                    <div className="mb-4">
                      <h4 className="text-sm font-medium text-gray-500 mb-1">Prescriptions</h4>
                      {record.prescriptions.length > 0 ? (
                        <ul className="list-disc list-inside text-gray-900 space-y-1">
                          {record.prescriptions.map((prescription, idx) => (
                            <li key={idx}>{prescription}</li>
                          ))}
                        </ul>
                      ) : (
                        <p className="text-gray-600">No prescriptions for this visit</p>
                      )}
                    </div>
                    
                    {record.notes && (
                      <div>
                        <h4 className="text-sm font-medium text-gray-500 mb-1">Notes</h4>
                        <p className="text-gray-600">{record.notes}</p>
                      </div>
                    )}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        )}
        
        {/* Upcoming Appointments */}
        <div className="mt-12">
          <h2 className="text-2xl font-bold text-gray-900 mb-6">Upcoming Appointments</h2>
          
          <Card className="text-center py-12">
            <CardBody>
              <Clock className="h-12 w-12 text-gray-400 mx-auto mb-4" />
              <h3 className="text-xl font-medium text-gray-900 mb-2">No upcoming appointments</h3>
              <p className="text-gray-600 mb-6">
                You don't have any appointments scheduled.
              </p>
              <Button 
                onClick={() => navigate('/')}
              >
                Book an Appointment
              </Button>
            </CardBody>
          </Card>
        </div>
      </div>
    </div>
  );
};

export default PatientHistory;
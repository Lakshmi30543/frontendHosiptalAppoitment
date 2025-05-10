import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Doctor } from '../../types';
import Card, { CardBody, CardFooter } from '../ui/Card';
import Button from '../ui/Button';
import { Calendar, Phone } from 'lucide-react';

interface DoctorCardProps {
  doctor: Doctor;
}

const DoctorCard: React.FC<DoctorCardProps> = ({ doctor }) => {
  const navigate = useNavigate();
  
  const handleViewProfile = () => {
    navigate(`/doctor/${doctor.id}`);
  };

  return (
    <Card hover className="h-full flex flex-col">
      <div className="h-48 overflow-hidden">
        <img 
          src={doctor.photoUrl} 
          alt={`Dr. ${doctor.name}`} 
          className="w-full h-full object-cover object-center transition-transform duration-500 hover:scale-105"
        />
      </div>
      <CardBody className="flex-grow">
        <h3 className="text-xl font-semibold text-gray-900 mb-1">{doctor.name}</h3>
        <p className="text-green-600 font-medium mb-3">{doctor.specialty}</p>
        <p className="text-gray-600 line-clamp-3 mb-3">
          {doctor.bio}
        </p>
        {doctor.availability && (
          <div className="flex items-center text-sm text-gray-500 mb-1">
            <Calendar className="h-4 w-4 mr-1" />
            <span>
              Available on {doctor.availability.map(day => day.day).join(', ')}
            </span>
          </div>
        )}
      </CardBody>
      <CardFooter className="flex justify-between items-center">
        <Button 
          variant="ghost" 
          size="sm" 
          className="text-green-600"
        >
          <Phone className="h-4 w-4 mr-1" />
          Contact
        </Button>
        <Button 
          variant="primary" 
          size="sm" 
          onClick={handleViewProfile}
        >
          View Profile
        </Button>
      </CardFooter>
    </Card>
  );
};

export default DoctorCard;
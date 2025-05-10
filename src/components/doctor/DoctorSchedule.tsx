import React from 'react';

interface Availability {
  day: string;
  slots: string[];
}

interface DoctorScheduleProps {
  availability: Availability[];
}

const DoctorSchedule: React.FC<DoctorScheduleProps> = ({ availability }) => {
  return (
    <div className="p-4 border rounded shadow-md bg-white">
      <h2 className="text-xl font-semibold mb-4">My Schedule</h2>
      <ul className="space-y-3">
        {availability.map((daySlot, index) => (
          <li key={index}>
            <h3 className="font-bold">{daySlot.day}</h3>
            <p className="text-gray-600">{daySlot.slots.join(', ')}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default DoctorSchedule;

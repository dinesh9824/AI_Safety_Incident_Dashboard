import React from 'react';
import { Incident } from '../types';
import IncidentItem from './IncidentItem';

interface IncidentListProps {
  incidents: Incident[];
}

const IncidentList: React.FC<IncidentListProps> = ({ incidents }) => {
  if (incidents.length === 0) {
    return <p>No incidents found.</p>;
  }

  return (
    <div className="incident-list">
      {incidents.map((incident) => (
        <IncidentItem key={incident.id} incident={incident} />
      ))}
    </div>
  );
};

export default IncidentList; 
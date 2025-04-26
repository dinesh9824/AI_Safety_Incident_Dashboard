import React, { useState } from 'react';
import { Incident } from '../types';

interface IncidentItemProps {
  incident: Incident;
}

const IncidentItem: React.FC<IncidentItemProps> = ({ incident }) => {
  const [showDetails, setShowDetails] = useState(false);

  const toggleDetails = () => {
    setShowDetails(prev => !prev);
  };

  return (
    <div className="incident-item">
      <h3>{incident.title}</h3>
      <p><strong>Severity:</strong> {incident.severity}</p>
      <p><strong>Reported:</strong> {new Date(incident.reported_at).toLocaleString()}</p>
      <button onClick={toggleDetails}>
        {showDetails ? 'Hide Details' : 'View Details'}
      </button>
      {showDetails && <p className="incident-details">{incident.description}</p>}
    </div>
  );
};

export default IncidentItem; 
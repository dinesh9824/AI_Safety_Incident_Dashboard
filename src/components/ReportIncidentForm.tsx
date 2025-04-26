import React, { useState } from 'react';
import { Severity } from '../types';

interface ReportIncidentFormProps {
  onAddIncident: (title: string, description: string, severity: Severity) => void;
}

const ReportIncidentForm: React.FC<ReportIncidentFormProps> = ({ onAddIncident }) => {
  const [title, setTitle] = useState('');
  const [description, setDescription] = useState('');
  const [severity, setSeverity] = useState<Severity>('Low');
  const [error, setError] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!title.trim() || !description.trim() || !severity) {
      setError('Please fill in all fields.');
      return;
    }
    onAddIncident(title.trim(), description.trim(), severity);
    setTitle('');
    setDescription('');
    setSeverity('Low');
    setError('');
  };

  return (
    <form className="ReportForm" onSubmit={handleSubmit}>
      <h2>Report New Incident</h2>
      {error && <p className="error-message">{error}</p>}
      <div className="form-group">
        <label htmlFor="title">Title:</label>
        <input
          type="text"
          id="title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="description">Description:</label>
        <textarea
          id="description"
          rows={4}
          value={description}
          onChange={(e) => setDescription(e.target.value)}
        />
      </div>
      <div className="form-group">
        <label htmlFor="severity">Severity:</label>
        <select
          id="severity"
          value={severity}
          onChange={(e) => setSeverity(e.target.value as Severity)}
        >
          <option value="Low">Low</option>
          <option value="Medium">Medium</option>
          <option value="High">High</option>
        </select>
      </div>
      <button type="submit">Submit Incident</button>
    </form>
  );
};

export default ReportIncidentForm; 
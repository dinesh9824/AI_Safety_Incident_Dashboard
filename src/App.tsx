import React, { useState, useMemo } from 'react';
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import './App.css';
import { Incident, Severity } from './types';
import initialIncidentsJson from '../incidents.json';
import HomePage from './pages/HomePage';
import ReportPage from './pages/ReportPage';
import ContactPage from './pages/ContactPage';

// Cast raw JSON data to our Incident[] type
const initialIncidents: Incident[] = initialIncidentsJson as Incident[];

// App component
const App: React.FC = () => {
  const [incidents, setIncidents] = useState<Incident[]>(() => {
    const saved = localStorage.getItem('incidents');
    if (saved) return JSON.parse(saved) as Incident[];
    localStorage.setItem('incidents', JSON.stringify(initialIncidents));
    return initialIncidents;
  });
  const [filter, setFilter] = useState<'All' | Severity>('All');
  const [sortOrder, setSortOrder] = useState<'Newest First' | 'Oldest First'>('Newest First');

  // Filter and sort incidents based on controls
  const displayedIncidents = useMemo(() => {
    const filtered =
      filter === 'All'
        ? incidents
        : incidents.filter((i) => i.severity === filter);
    return [...filtered].sort((a, b) => {
      const dateA = new Date(a.reported_at).getTime();
      const dateB = new Date(b.reported_at).getTime();
      return sortOrder === 'Newest First' ? dateB - dateA : dateA - dateB;
    });
  }, [incidents, filter, sortOrder]);

  // Handler to add new incident
  const handleAddIncident = (title: string, description: string, severity: Severity) => {
    const newId = incidents.length > 0 ? Math.max(...incidents.map(i => i.id)) + 1 : 1;
    const newIncident: Incident = { id: newId, title, description, severity, reported_at: new Date().toISOString() };
    const updated = [...incidents, newIncident];
    setIncidents(updated);
    localStorage.setItem('incidents', JSON.stringify(updated));
  };

  return (
    <Router>
      <div className="App">
        <header>
          <h1>AI Safety Incident Dashboard</h1>
        </header>
        <nav>
          <Link to="/">Home</Link>
          <Link to="/report">Report Incident</Link>
          <Link to="/contact">Contact</Link>
        </nav>
        <main>
          <Routes>
            <Route
              path="/"
              element={
                <HomePage
                  incidents={displayedIncidents}
                  filter={filter}
                  sortOrder={sortOrder}
                  onFilterChange={setFilter}
                  onSortChange={setSortOrder}
                />
              }
            />
            <Route
              path="/report"
              element={<ReportPage onAddIncident={handleAddIncident} />}
            />
            <Route path="/contact" element={<ContactPage />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
};

export default App;

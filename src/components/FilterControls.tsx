import React from 'react';
import { Severity } from '../types';

interface FilterControlsProps {
  currentFilter: 'All' | Severity;
  onFilterChange: (filter: 'All' | Severity) => void;
}

const FilterControls: React.FC<FilterControlsProps> = ({ currentFilter, onFilterChange }) => {
  return (
    <div className="filter-controls">
      <label htmlFor="severity-filter">Filter by Severity:</label>
      <select
        id="severity-filter"
        value={currentFilter}
        onChange={(e) => onFilterChange(e.target.value as 'All' | Severity)}
      >
        <option value="All">All</option>
        <option value="Low">Low</option>
        <option value="Medium">Medium</option>
        <option value="High">High</option>
      </select>
    </div>
  );
};

export default FilterControls; 
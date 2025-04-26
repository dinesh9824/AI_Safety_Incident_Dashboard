import React from 'react';

interface SortControlsProps {
  currentSort: 'Newest First' | 'Oldest First';
  onSortChange: (sort: 'Newest First' | 'Oldest First') => void;
}

const SortControls: React.FC<SortControlsProps> = ({ currentSort, onSortChange }) => {
  return (
    <div className="sort-controls">
      <label htmlFor="sort-order">Sort by Date:</label>
      <select
        id="sort-order"
        value={currentSort}
        onChange={(e) =>
          onSortChange(e.target.value as 'Newest First' | 'Oldest First')
        }
      >
        <option value="Newest First">Newest First</option>
        <option value="Oldest First">Oldest First</option>
      </select>
    </div>
  );
};

export default SortControls; 
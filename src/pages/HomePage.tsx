
import { Incident, Severity } from '../types';
import FilterControls from '../components/FilterControls';
import SortControls from '../components/SortControls';
import IncidentList from '../components/IncidentList';

interface HomePageProps {
  incidents: Incident[];
  filter: 'All' | Severity;
  sortOrder: 'Newest First' | 'Oldest First';
  onFilterChange: (filter: 'All' | Severity) => void;
  onSortChange: (sort: 'Newest First' | 'Oldest First') => void;
}

const HomePage: FC<HomePageProps> = ({ incidents, filter, sortOrder, onFilterChange, onSortChange }) => (
  <div className="home-page">
    <section className="list-section">
      <div className="controls">
        <FilterControls currentFilter={filter} onFilterChange={onFilterChange} />
        <SortControls currentSort={sortOrder} onSortChange={onSortChange} />
      </div>
      <IncidentList incidents={incidents} />
    </section>
  </div>
);

export default HomePage; 

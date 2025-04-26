
import { Severity } from '../types';
import ReportIncidentForm from '../components/ReportIncidentForm';

interface ReportPageProps {
  onAddIncident: (title: string, description: string, severity: Severity) => void;
}

const ReportPage: FC<ReportPageProps> = ({ onAddIncident }) => (
  <div className="report-page">
    <h2>Report a New Incident</h2>
    <ReportIncidentForm onAddIncident={onAddIncident} />
  </div>
);

export default ReportPage; 

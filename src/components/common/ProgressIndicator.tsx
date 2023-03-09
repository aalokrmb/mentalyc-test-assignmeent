import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressIndicator() {
  const now = 60;
  return <ProgressBar now={20} variant="success" />;
}

export default ProgressIndicator;
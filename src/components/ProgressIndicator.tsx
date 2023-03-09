import ProgressBar from 'react-bootstrap/ProgressBar';

function ProgressIndicator() {
  const now = 60;
  return <ProgressBar now={20} label={20} />;
}

export default ProgressIndicator;
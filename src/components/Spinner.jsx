import ClipLoader from 'react-spinners/ClipLoader';
import './Spinner.styles.css';

export function Spinner() {
  return (
    <div className="spinner">
      <ClipLoader сolor={'#1f2937'} />
    </div>
  );
}

export default Spinner

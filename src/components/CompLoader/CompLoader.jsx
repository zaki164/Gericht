import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faUtensils } from '@fortawesome/free-solid-svg-icons';
import './CompLoader.scss';

const CompLoader = () => {
  return (
    <div className="compLoader flex_center">
      <FontAwesomeIcon icon={faUtensils} spin />
    </div>
  )
}

export default CompLoader
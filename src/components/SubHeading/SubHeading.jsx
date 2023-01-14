import { images } from '../../constants';
import './SubHeading.scss'


const SubHeading = ({title}) => (
  <div className='sub_heading'>
      <p>{title}</p>
      <img src={images.spoon} alt="spoon img" />
  </div>
);

export default SubHeading;

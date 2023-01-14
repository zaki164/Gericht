import { SubHeading } from '../../components';
import './Newsletter.scss';

const Newsletter = () => (
  <section className='news app_bg'>
    <div className="newssubs">
      <SubHeading title='Newsletter' />
      <h2>Subscribe to Our Newsletter</h2>
      <p className='info_text'>And never miss latest Updates!</p>
      <form action="">
        <input type="email" placeholder='Email Address'/>
        <button className='custom_button'>Subscribe</button>
      </form>
    </div>
  </section>
);

export default Newsletter;

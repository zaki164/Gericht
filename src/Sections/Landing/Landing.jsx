import { SubHeading } from '../../components';
import { images } from '../../constants';

import './Landing.scss';

const Landing = () => (
  <section className='landing section_padding w-100'>
    <div className="landing_content m-auto d-flex">
      <div className="landing_content_info p-3">
        <SubHeading title="Chase the new Flavour" />
        <h1>The key to Fine dining</h1>
        <p className='info_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non nostrum amet, repellendus ipsam voluptates commodi quaerat dolor in. Officia hic sunt, nisi unde dolorem deserunt porro odit numquam odio.</p>
        <button className='custom_button'>Explore Menu</button>
      </div>
      <div className="landing_content_img p-3 text-center">
        <img className='img-fluid' src={images.welcome} alt="welcome img" />
      </div>
    </div>
  </section>
);

export default Landing;

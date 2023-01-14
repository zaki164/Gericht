import './Chef.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { images } from '../../constants';
import { SubHeading } from '../../components';

const Chef = () => (
  <section className='chef app_bg section_padding'>
    <Container>
      <Row>
        <Col xs={12} md={6} className="p-3">
          <div className="chef_image text-center">
            <img src={images.chef} alt="chef img" className='img-fluid' />
          </div>
        </Col>
        <Col xs={12} md={6} className="p-3">
        <div className='chef_text text-center text-md-start mt-4 mt-md-0'>
          <SubHeading title={"Chef's Word"} />
          <h2>What We Beleive In</h2>
          <div className='info_text'><img src={images.quote} alt="quote img" /> <p> Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non nostrum amet, repellendus ipsam voluptates commodi quaerat dolor in. Officia hic sunt, nisi unde dolorem deserunt porro odit numquam odio.</p></div>
          <h3 className='chef_name'>Kevin Leo</h3>
          <p className='chef_name_founder'>Chef & Founder</p>
          <img src={images.sign} alt="sign img" className='chef_sign' />
        </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Chef;

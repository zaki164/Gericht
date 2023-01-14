import './AboutUs.scss';
import { Container, Row, Col } from 'react-bootstrap';
import { SubHeading } from '../../components';
import { images } from '../../constants';

const AboutUs = () => (
  <section className='about_section section_padding app_bg'>
    <Container>
      <Row>
        <Col xs={12} md={5}>
          <div className="about p-3">
            <SubHeading title={"About Us"} />
            <p className='info_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non nostrum amet, repellendus ipsam voluptates commodi quaerat dolor in.</p>
            <button className='custom_button'>Know More</button>
            </div>
        </Col>
        <Col xs={12} md={2} className="my-4 my-md-0">
          <div className="about_knive text-center">
            <img src={images.knife} alt="knive img" className='img-fluid' />
          </div>
        </Col>
        <Col xs={12} md={5}>
          <div className="history p-3">
            <SubHeading title="Our History" />
            <p className='info_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non nostrum amet, repellendus ipsam voluptates commodi quaerat dolor in.</p>
            <button className='custom_button'>Know More</button>
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default AboutUs;

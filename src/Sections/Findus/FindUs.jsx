import { images } from '../../constants';
import { SubHeading } from '../../components';
import { Row, Container, Col } from 'react-bootstrap';

import './FindUs.css';
const FindUs = () => (
  <section className="findus app_bg section_padding text-center text-md-start">
    <Container>
      <Row>
        <Col xs={12} md={6} className="p-3 d-flex align-items-center">
          <div className="findus_text">
            <SubHeading title={'Contact'} />
            <h2>Find Us</h2>
            <p className='info_text'>Lane Ends Bungalow, Whatcroft Hall Lane, Rudheath, CW9 7SG</p>
            <h3>Openeing Hours</h3>
            <p className='info_text'>Mon - Fri: 10:00 am - 02:00 am</p>
            <p className='info_text'>Sat - Sun: 10:00 am - 03:00 am</p>
            <button className='custom_button'>Visit Us</button>
          </div>
        </Col>
        <Col xs={12} md={6} className="p-3">
          <div className="findus_image mt-5 mt-md-0">
            <img src={images.findus} alt="findus img" className='img-fluid' />
          </div>
        </Col>
      </Row>
    </Container>

  </section>
);

export default FindUs;

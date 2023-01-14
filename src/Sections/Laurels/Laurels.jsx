import { SubHeading } from '../../components';
import { images, data } from '../../constants';
import { Row, Container, Col } from 'react-bootstrap';

import './Laurels.scss';

const Laurels = () => (
  <section className='laurels app_bg section_padding text-center text-md-start'>
    <img src={images.logo} alt="logo" className='logo'/>
    <Container>
      <Row>
        <Col xs={12} md={7} className="d-flex align-items-center">
          <div className="laurels_awards">
            <SubHeading title='Awards & Recognition' />
            <h2>Our Laurels</h2>
            <div className="laurels_awards_content d-flex flex-wrap">
              {data.awards.map((award, index) => (
                <div className="laurels_award" key={index}>
                  <img src={award.imgUrl} alt={award.title + " img"} />
                  <div className="laurels_awards_text">
                    <h3>{award.title}</h3>
                    <p>{award.subtitle}</p> 
                  </div>
                </div>
              )
              )}
            </div>
          </div>
        </Col>
        <Col xs={12} md={5}>
          <div className="laurels_images mt-5 mt-md-0">
            <img src={images.laurels} alt="laurel img" className='img-fluid' />
          </div>
        </Col>
      </Row>
    </Container>
  </section>
);

export default Laurels;

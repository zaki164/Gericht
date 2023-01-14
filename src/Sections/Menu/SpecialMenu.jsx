import { MenuItem, SubHeading } from '../../components';
import { Container, Row, Col } from 'react-bootstrap';
import { data } from '../../constants';

import './SpecialMenu.scss';
import { images } from '../../constants';

const SpecialMenu = () => {

  return (
    <section className='Special_Menu section_padding text-center'>
      <div className='Special_Menu_heading'>
        <SubHeading title={"Menu that fits you palatte"} />
        <h2>Today's Special</h2>
      </div>
      <Container>
        <Row>
          <Col xs={12} lg={4}>
            <div className="Special_Menu_type p-3 text-center">
              <h3 className='mb-4 text-light'>Fresh Juice & Smoothie</h3>
              {data.juice.map((item, index) =>
                <MenuItem key={index} title={item.title} price={item.price} tags={item.tags} />
              )}
            </div>
          </Col>
          <Col xs={12} lg={4} className="my-4 my-lg-0">
            <div className="Special_Menu_image text-center">
              <img src={images.findus} alt="fresh juice img" className='img-fluid' />
            </div>
          </Col>
          <Col xs={12} lg={4}>
            <div className="Special_Menu_type p-3 text-center">
              <h3 className='mb-4 text-light'>Cocktails</h3>
              {data.cocktails.map((item, index) =>
                <MenuItem key={index} title={item.title} price={item.price} tags={item.tags} />
              )}
            </div>
          </Col>
        </Row>
      </Container>
      <button className='custom_button m-auto'>View More</button>
    </section>
  )
}

export default SpecialMenu;

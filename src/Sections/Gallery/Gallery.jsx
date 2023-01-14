import { SubHeading } from '../../components';
import { images } from '../../constants';
import { Row, Container, Col } from 'react-bootstrap';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import './Gallery.scss';
import { useRef } from 'react';

const galleryimages = [images.gallery01, images.gallery02, images.gallery04, images.chef, images.findus, images.welcome, images.laurels];


const Gallery = () => {

  const galleryref = useRef()

  const scroll = (direction) => {
    if (direction === 'right') {
      galleryref.current.scrollLeft += 300;
    } else {
      galleryref.current.scrollLeft -= 300;
    }
  }

  return (
    <section className='gallery section_padding text-center text-lg-start'>
      <Container>
        <Row>
          <Col xs={12} lg={4} className="p-3">
            <div className="gallery_text">
              <SubHeading title={'Instagram'} />
              <h2>Photo Gallery</h2>
              <p className='info_text'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Praesentium non nostrum amet.</p>
              <button className='custom_button'>View More</button>
            </div>
          </Col>
          <Col xs={12} lg={8} className="p-3 position-relative">
            <div className="gallery_images" ref={galleryref}>
              {galleryimages.map((image, index) => (
                <div className="gallery_image" key={index + 1}>
                  <img src={image} alt="gallery img" />
                </div>
              ))}
              <div className="scroll_button_right" onClick={() => scroll('right')} >
                <FontAwesomeIcon icon="fa-solid fa-arrow-right" />
              </div>
              <div className="scroll_button_left">
                <FontAwesomeIcon icon="fa-solid fa-arrow-left" onClick={() => scroll('left')} />
              </div>
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default Gallery;

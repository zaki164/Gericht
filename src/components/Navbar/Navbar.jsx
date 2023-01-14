import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { Container, Row } from 'react-bootstrap';
import { images } from '../../constants';
import { MdOutlineRestaurantMenu } from 'react-icons/md';
import { NavLink } from 'react-router-dom';
import './Navbar.scss';
import { useEffect, useRef, useState } from 'react';
import { faBars } from '@fortawesome/free-solid-svg-icons';

const Navbar = () => {
  const [toggle, settoggle] = useState(false);
  const ref = useRef()
  useEffect(() => {
    toggle ? ref.current.classList.add('show') : ref.current.classList.remove('show')
  }, [toggle])
  return (
    <header>
      <Container>
        <Row>
          <div className='header_content d-flex align-items-center justify-content-between'>
            <NavLink exact="true" to='/'><img src={images.gericht} alt='App_logo'></img></NavLink>
            <nav className='px-2'>
              <NavLink exact="true" to="/">Home</NavLink>
              <NavLink exact="true" to="/contact" >Contact Us</NavLink>
              <NavLink exact="true" to="/about" >About</NavLink>
            </nav> 
            <NavLink exact="true" to="/login" className='log' >Log In</NavLink>
            <FontAwesomeIcon icon={faBars} onClick={() => settoggle(true)} />
            <div className="nav_fill" ref={ref}>
              <MdOutlineRestaurantMenu onClick={() => settoggle(false)} />
              <ul className='flex-column'>
                <li><NavLink exact="true" to="/" onClick={() => settoggle(false)} >Home</NavLink></li>
                <li><NavLink exact="true" to="/contact" onClick={() => settoggle(false)} >Contact Us</NavLink></li>
                <li><NavLink exact="true" to="/about" onClick={() => settoggle(false)} >About</NavLink></li>
                <li><NavLink exact="true" to="/login" onClick={() => settoggle(false)} >Log In</NavLink></li>
              </ul>
            </div>
          </div>
        </Row>
      </Container>
    </header>
  )
}
export default Navbar;

import 'bootstrap/dist/css/bootstrap.min.css';
import './sass/App.scss';
import { Navbar, Home, Contact, About, Log } from './components';
import { HashRouter as Router, Route, Routes } from 'react-router-dom';

const App = () => (
  <>
    <Router>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Log />}></Route>
      </Routes>
    </Router>
  </>
);

export default App;

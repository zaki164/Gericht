import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import { Navbar, Home, Contact, About, Log } from './components';
import { BrowserRouter, Route, Routes } from 'react-router-dom';

const App = () => (
  <>
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Log />}></Route>
      </Routes>
    </BrowserRouter>
  </>
);

export default App;

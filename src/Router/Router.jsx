import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CompLoader } from '../components';

const Home = React.lazy(() => import("../pages/Home/Home"));
const Contact = React.lazy(() => import("../pages/Contact/Contact"));
const About = React.lazy(() => import("../pages/About/About"));
const Log = React.lazy(() => import("../pages/Log/Log"));

const Router = () => {
  return (
    <Suspense fallback={<CompLoader />}>
      <Routes>
        <Route exact path='/' element={<Home />}></Route>
        <Route path='/contact' element={<Contact />}></Route>
        <Route path='/about' element={<About />}></Route>
        <Route path='/login' element={<Log />}></Route>
      </Routes>
    </Suspense>
  )
}

export default Router
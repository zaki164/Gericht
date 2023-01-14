import React, { Suspense } from 'react';
import { Route, Routes } from 'react-router-dom';
import { CompLoader } from '../components';

const Courses = React.lazy(() => import("../pages/Courses/Courses"));
const Dashboard = React.lazy(() => import("../pages/Dashboard/Dashboard"));
const Files = React.lazy(() => import("../pages/Files/Files"));
const Friends = React.lazy(() => import("../pages/Friends/Friends"));
const Plans = React.lazy(() => import("../pages/Plans/Plans"));
const Profile = React.lazy(() => import("../pages/Profile/Profile"));
const Projects = React.lazy(() => import("../pages/Projects/Projects"));
const Settings = React.lazy(() => import("../pages/Settings/Settings"));

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
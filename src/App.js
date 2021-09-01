import React, { useState } from 'react';
import { Switch, Route } from 'react-router-dom'
import LoginPage from './pages/Login/LoginPage'
import CoursesPage from './pages/Courses/CoursesPage'
import CourseDetailsPage from './pages/CourseDetails/CourseDetailsPage'
import UsersPage from './pages/Users/UsersPage'
import UserDetailsPage from './pages/UserDetails/UserDetailsPage'
import HoursReportPage from './pages/HoursReport/HoursReportPage'
import HoursApprovePage from './pages/HoursApprove/HoursApprovePage'
import ActiveUserContext from './shared/activeUserContext'

import './App.css';

const App = () => {

  const [activeUser, setActiveUser] = useState(localStorage.activeUser ? JSON.parse(localStorage.activeUser) : null);

  const handleLogin = (activeUser) => {
    setActiveUser(activeUser);
    localStorage.activeUser = JSON.stringify(activeUser);
  }

  const handleLogout = () => {
    setActiveUser(null);
    localStorage.removeItem("activeUser");
  }

  return (
    <ActiveUserContext.Provider value={activeUser}>
      <Switch>
        <Route exact path="/">
          <LoginPage handleLogin={handleLogin} />
        </Route>
        <Route exact path="/courses">
          <CoursesPage handleLogout={handleLogout}/>
        </Route>
        <Route path="/courses/:id">
          <CourseDetailsPage handleLogout={handleLogout}/>
        </Route>
        <Route exact path="/users">
          <UsersPage handleLogout={handleLogout}/>
        </Route>
        <Route path="/users/:id">
          <UserDetailsPage handleLogout={handleLogout}/>
        </Route>
        <Route path="/hours-report">
          <HoursReportPage handleLogout={handleLogout}/>
        </Route>
        <Route path="/hours-approve">
          <HoursApprovePage handleLogout={handleLogout}/>
        </Route>
      </Switch>
    </ActiveUserContext.Provider>
  );
}

export default App;

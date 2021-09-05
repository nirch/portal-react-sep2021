import React, { useContext } from 'react';
import './CoursesPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import PortalTable from '../../components/PortalTable/PortalTable';

const CoursesPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const headers = [{key: "fname", header: "First Name"}, {key: "lname", header: "Last Name"}];
    const data = [{id: "12212", fname: "Nir", lname: "Channes"}, {id: "2212", fname: "John", lname: "Doe"}]
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-courses">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>קורסים</h1>
            <PortalTable headers ={headers} data = {data}/>
        </div>
    );
}

export default CoursesPage;
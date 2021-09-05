import React, { useContext } from 'react';
import './CoursesPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'
import PortalTable from '../../components/PortalTable/PortalTable';

const CoursesPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const headers = [{key: "fname", header: "שם"}, {key: "lname", header: "שם משפחה"}, {key: "email", header: "אימייל"}];
    const data = [{id: "12212", fname: "ניר", lname: "חנס", email: "nir@appleseeds.org"}, {id: "2212", fname: "ג'ון", lname: "דולב", email:"john@appleseeds.org"}];
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-courses">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>קורסים</h1>
            <PortalTable headers={headers} data={data}/>
        </div>
    );
}

export default CoursesPage;
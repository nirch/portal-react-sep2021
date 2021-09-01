import React, { useContext } from 'react';
import './HoursApprovePage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'

const HoursApprovePage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-hours-approve">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>אישור שעות</h1>
        </div>
    );
}

export default HoursApprovePage;
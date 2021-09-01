import React, { useContext } from 'react';
import './HoursReportPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'

const HoursReportPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-hours-report">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>דיווח שעות</h1>
        </div>
    );
}

export default HoursReportPage;
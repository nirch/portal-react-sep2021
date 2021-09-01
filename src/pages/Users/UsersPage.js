import React, { useContext } from 'react';
import './UsersPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import { Redirect } from 'react-router-dom'

const UsersPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    
    if (!activeUser) {
        return <Redirect to='/' />
    }
    
    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>משתמשים</h1>
        </div>
    );
}

export default UsersPage;
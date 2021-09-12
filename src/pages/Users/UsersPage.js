import React, { useContext, useState } from 'react';
import './UsersPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import PortalSearchPager from '../../components/PortalSearchPager/PortalSearchPager';
import ActiveUserContext from '../../shared/activeUserContext';
import { Redirect } from 'react-router-dom'

const UsersPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);

    // pages, currentPage, onSearchChange, onPageChange 
    const [pages, setPages] = useState(5);
    const [currentPage, setCurrentPage] = useState(0);
    const [textSearch, setTextSearch] = useState("");

    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout} />
            <div className="c-search">
                <PortalSearchPager placeholder={"חיפוש עובד"}
                    pages={pages} currentPage={currentPage}
                    onSearchChange={setTextSearch}
                    onPageChange={setCurrentPage} />
            </div>
        </div>
    );
}

export default UsersPage;
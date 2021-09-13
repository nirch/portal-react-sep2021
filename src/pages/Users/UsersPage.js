import React, { useContext, useEffect, useState } from 'react';
import './UsersPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import PortalSearchPager from '../../components/PortalSearchPager/PortalSearchPager';
import ActiveUserContext from '../../shared/activeUserContext';
import { Redirect } from 'react-router-dom'
import server from '../../shared/server';
import PortalTable from '../../components/PortalTable/PortalTable';
import PortalButtonSet from '../../components/PortalButtonSet/PortalButtonSet'

const UsersPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);


    const [pages, setPages] = useState(0);
    const [currentPage, setCurrentPage] = useState(0);
    const [textSearch, setTextSearch] = useState("");
    const [data, setData] = useState([]);
    const [userStatus, setUserStatus] = useState(1);


    useEffect(() => {
        const data = { desc: false, page: currentPage, search: textSearch, sorting: "userid", userstatus: userStatus };
        server(activeUser, data, "SearchStaffUnderMe")
            .then(res => {
                if (res.data.error) {
                    alert("Something going wrong")
                } else {
                    console.log(res.data.pages);
                    setPages(res.data.pages);
                    setData(res.data.users);
                }
            })
    }, [pages, currentPage, textSearch, userStatus]);


    if (!activeUser) {
        return <Redirect to='/' />
    }

    const onButtonSetClick = (btn) => {
        setUserStatus(btn.key);
        setCurrentPage(0);
    }
    const onSearchChange = (txt) => {
        if (txt !== textSearch) {
            setTextSearch(txt);
            setCurrentPage(0);
        }
    }
    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout} />
            <div className="container-search">
                <PortalSearchPager placeholder={"חיפוש עובד"}
                    pages={pages} currentPage={currentPage}
                    onSearchChange={onSearchChange}
                    onPageChange={setCurrentPage} />
            </div>
            <div className="container-table">
                <PortalTable headers={[{ key: "firstname", header: "שם" }, { key: "lastname", header: "שם משפחה" }, { key: "email", header: "אימייל" }]}
                    data={data}
                    onClick={el => alert(el.firstname)} />
            </div>
            <div className="container-buttons">
                <PortalButtonSet buttons={[{ key: 1, label: "עובדים פעילים" }, { key: 0, label: "לא פעילים" }]}
                    shadowBox="top" onClick={onButtonSetClick} pressedKey={userStatus} />

            </div>
        </div>
    );
}

export default UsersPage;
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
    const [userInfo , setUserInfo ] = useState(null);

    useEffect(() => {
        const data = { desc: false, page: currentPage, search: textSearch, sorting: "userid", userstatus: userStatus };
        server(activeUser, data, "SearchStaffUnderMe")
            .then(res => {
                if (res.data.error) {
                    alert("Something going wrong")
                } else {
                    if (res.data.pages !== pages) {
                        setPages(res.data.pages);
                    }
                    setData(res.data.users);
                }
            })
    }, [currentPage, textSearch, userStatus]);


    

    const onButtonSetClick = (btn) => {
        setUserStatus(btn.key);
        setCurrentPage(0);
    }
    const onSearchChange = (txt) => {
        setTextSearch(txt);
        setCurrentPage(0);
    }
  
    if (!activeUser) {
        return <Redirect to='/' />
    }

    if(userInfo){
        return <Redirect to={`/users/:${userInfo.userid}`} />     
    }

    return (
        <div className="p-users">
            <PortalNavbar handleLogout={handleLogout} />
                <PortalSearchPager placeholder={"חיפוש עובד"}
                    pages={pages} currentPage={currentPage}
                    onSearchChange={onSearchChange}
                    onPageChange={setCurrentPage} />
                <PortalTable headers={[{ key: "firstname", header: "שם" }, { key: "lastname", header: "שם משפחה" }, { key: "email", header: "אימייל" }]}
                    data={data}
                    onClick={setUserInfo} />
                <PortalButtonSet buttons={[{ key: 1, label: "עובדים פעילים" }, { key: 0, label: "לא פעילים" }]}
                    shadowBox="top" onClick={onButtonSetClick} pressedKey={userStatus} />
        </div>
    );
}

export default UsersPage;
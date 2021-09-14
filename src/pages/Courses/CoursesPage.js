import React, { useContext, useEffect } from 'react';
import './CoursesPage.css'
import PortalNavbar from '../../components/navbar/PortalNavbar';
import ActiveUserContext from '../../shared/activeUserContext'
import server from '../../shared/server'
import { Redirect } from 'react-router-dom'
import PortalSearchPager from '../../components/PortalSearchPager/PortalSearchPager';
import PortalTable from '../../components/PortalTable/PortalTable';
import PortalButtonSet from '../../components/PortalButtonSet/PortalButtonSet';

const CoursesPage = (props) => {
    const { handleLogout } = props;
    const activeUser = useContext(ActiveUserContext);
    const headers = [{key: "subname", header: "שם קורס מקוצר"}, {key: "project", header: "פרויקט"}, {key: "teachers", header: "מדריך"}];

    const [pages, setPages] = React.useState(10);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [pressedKey, setPressedKey] = React.useState(1);
    const [searchQuery, setSeachQuery] = React.useState ("");
    const [coursesData, setCoursesData] = React.useState ([]);
    const buttons = [{label: "קורסים פעילים", key: 1 }, { label: "לא פעילים", key: 0 }];
    const [shadowBox, setShadowbox] = React.useState ("top");

    useEffect(()=>{
        const data = {coursestatus: pressedKey, desc: false, page: currentPage, search: searchQuery, sorting: "courseid"};
        server(activeUser, data, "SearchCourses" ).then(res => {
            
            if (res.data.error) {
                alert("error in data");
            } else {
                setCoursesData(res.data.courses);
            }    console.log(res.data);
        })
     }, [currentPage, pressedKey]);

    function buttonClick(btn){
        setPressedKey(btn.key);
    }

    function clickedEntry (user){
        alert (user);
        console.log(user);
    }
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    return (
        <div className="p-courses">
            <PortalNavbar handleLogout={handleLogout}/>
            <h1>קורסים</h1>
            {/* <PortalSearchPager placeholder={"חיפוש קורס"} pages={pages} currentPage={currentPage} onSearchChange={querySearch} onPageChange={pageChanger} />  */}
            <PortalTable headers={headers} data={coursesData} onClick={clickedEntry}/>
            <PortalButtonSet buttons={buttons} onClick={buttonClick} pressedKey={pressedKey} shadowBox={shadowBox} />

        </div>
    );
}

export default CoursesPage;
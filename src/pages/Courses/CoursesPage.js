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

    const [pages, setPages] = React.useState(0);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [pressedKey, setPressedKey] = React.useState(1);
    const [searchQuery, setSeachQuery] = React.useState ("");
    const [coursesData, setCoursesData] = React.useState ([]);
    const [courseID, setCourseID] = React.useState (null);
    const buttons = [{label: "קורסים פעילים", key: 1 }, { label: "לא פעילים", key: 0 }];

    useEffect(()=>{
        const data = {coursestatus: pressedKey, desc: false, page: currentPage, search: searchQuery, sorting: "courseid"};
        server(activeUser, data, "SearchCourses" ).then(res => {
            
            if (res.data.error) {
                alert("error in data");
            } else {
                setCoursesData(res.data.courses);
                setPages(res.data.pages); //if?
            }    
        })
     }, [currentPage, pressedKey, searchQuery]);

    function buttonClick(btn){
        setPressedKey(btn.key);
        setCurrentPage(0);
    }

    function pageChanger(num){
        setCurrentPage(num);
    }

    function querySearch(querytext){
        setSeachQuery(querytext);
        setCurrentPage(0);
    }
    
    if (!activeUser) {
        return <Redirect to='/' />
    }

    if (courseID) {
        return <Redirect to={'/courses/' + courseID}/>
    }
    

    return (
        <div className="p-courses">
            <PortalNavbar handleLogout={handleLogout}/>
            <PortalSearchPager placeholder="חיפוש קורס" pages={pages} currentPage={currentPage} onSearchChange={querySearch} onPageChange={pageChanger} /> 
            <PortalTable headers={headers} data={coursesData} onClick={(course) => setCourseID(course.courseid)}/>
            <PortalButtonSet buttons={buttons} onClick={buttonClick} pressedKey={pressedKey} shadowBox="top" />

        </div>
    );
}

export default CoursesPage;
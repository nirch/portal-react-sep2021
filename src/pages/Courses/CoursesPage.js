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

    const [pages, setPages] = React.useState(10);
    const [currentPage, setCurrentPage] = React.useState(0);
    const [pressedKey, setPressedKey] = React.useState(0);
    const [searchQuery, setSeachQuery] = React.useState ("");
    const [coursesData, setCoursesData] =React.useState ([]);



    useEffect(()=>{
        const data = {coursestatus: pressedKey, desc: false, page: currentPage, search: searchQuery, sorting: "courseid"};
        server(activeUser, data, "SearchCourses" ).then(res => {
            
            if (res.data.error) {
                alert("error in data");
            } else {
                setCoursesData(res.data);
            }    console.log(res.data);
        })
     }, [currentPage, pressedKey]);

    function buttonclick(){

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
            {/* <PortalTable headers={headers} data={data} onClick={clickedEntry}/> */}
            {/*, , shadowBox  */}
            {/* <PortalButtonSet buttons={buttons} onClick={buttonClick} pressedKey={pressedKey} /> */}

        </div>
    );
}

export default CoursesPage;
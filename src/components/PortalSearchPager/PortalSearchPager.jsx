import React from 'react';
import './PortalSearchPager.css'
import arrowImg from '../../assets/images/arrow/arrow_down.png'
function PortalSearchPager({placeholder ,pages,currentPage,handleSearch, pageChange}) {
    function onArrowRight(){
        if(currentPage>1){
            pageChange(currentPage-1);
        }
    }

  function onArrowLeft(){
        if(currentPage<pages){
            pageChange(currentPage+1);
        }
    }

    function handleKeyDown(e,text){
        if(e.key==='Enter'){
            // handleSearch(text);
            console.log(text);
        }
    }
    return (
        <div className="c-search-pager">
          <input className="search-input" type="text" placeholder={placeholder} ></input>
          <div className="pages-container">
                <img className="img-arrow-right" src={arrowImg} onClick={onArrowRight} alt="" />  
                <span>{currentPage}</span> 
               {pages>0? <img className="img-arrow-left" src={arrowImg} onClick={onArrowLeft} alt="" />:null   }
          </div>
        </div>
    );
}

export default PortalSearchPager;
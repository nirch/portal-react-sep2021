import React from 'react';
import './PortalSearchPager.css'
import arrowImg from '../../assets/images/arrow/arrow_down.png'
import { useState } from 'react';

function PortalSearchPager({ placeholder, pages, currentPage, onSearchChange, onPageChange }) {

    const [textValue, setTextValue] = useState("");

    const onArrowRight = () => {
        if (currentPage > 0) {
            onPageChange(currentPage - 1);
        }
    }
    const onArrowLeft = () => {
        if (currentPage < pages-1) {
            onPageChange(currentPage + 1);
        }
    }

    const pressOnEnter = (event) => {
        onSearchChange(textValue);
         event.preventDefault();
    }

    return (
        <div className="c-search-pager">
            <form onSubmit={pressOnEnter}>
                <input className="search-input" type="text" placeholder={placeholder} value={textValue} onChange={e => setTextValue(e.target.value)}></input>
            </form>
            {pages ? <div className="pages-container">
                <img className={`img-arrow-right ${currentPage === 0 ? " opacity" : ""}`} src={arrowImg} onClick={onArrowRight} alt="" />
                <span className="pages-num ">{currentPage+1}</span>
                <img className={`img-arrow-left ${currentPage === pages-1 ? " opacity" : ""}`} src={arrowImg} onClick={onArrowLeft} alt="" />
            </div> : null}
        </div>
    );
}

export default PortalSearchPager;
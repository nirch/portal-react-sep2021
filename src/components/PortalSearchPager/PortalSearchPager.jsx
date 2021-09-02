import React from 'react';
import './PortalSearchPager.css'
function PortalSearchPager({placeholder ,pages,handleSearch, pageChange}) {
    return (
        <div className="c-search">
          <input className="search-input" type="text"></input>
        </div>
    );
}

export default PortalSearchPager;
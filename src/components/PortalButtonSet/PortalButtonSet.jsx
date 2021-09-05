import React from 'react';
import './PortalButtonSet.css'
function PortalButtonSet({buttons,handleClick}) {
    const length = buttons.length;
    // const keys= buttons.map(btn=>Object.keys(btn));
    // console.log(keys);
    const btns = buttons.map(btn=><div className="btn-set">{btn.key}</div>);
    return (
        <div className="c-button-set" >
          <div className="btns-row">
                {btns}
          </div>
            
        </div>
    );
}

export default PortalButtonSet;
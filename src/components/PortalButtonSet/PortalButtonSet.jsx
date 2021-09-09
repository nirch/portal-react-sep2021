import React from 'react';
import './PortalButtonSet.css';

//prop shadowBox get 'top' ,'bottom' or emty string value
function PortalButtonSet({ buttons, handleClick, pressed, shadowBox }) {
    const btns = buttons.map(btn => <div key={btn.label} className={`${btn.label === pressed.label ? "btn-pressed" : "single-btn"}`} onClick={() => handleClick(btn)}>{btn.label}</div>);

    return (
        <div className="c-button-set">
            <div className={`row-buttons ${shadowBox ? shadowBox : ""}`}>
                {btns}
            </div>
        </div>
    );
}


export default PortalButtonSet;
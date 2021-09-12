import React from 'react';
import './PortalButtonSet.css';

/** ======= Props =======
 * - buttons : get array of objects {key:"key","label:label"}
 * - onClick : function return object that pressed on
 * - pressedKey : get pressed button
 * - shadowBox: get 'top' ,'bottom' or emty string value
 *  
 * ======= Example =======
 *  
 * const buttons = [{ label: "פעילים עובדים", key: 0 }, { label: "לא פיעילים", key: 2 }, { label: "כולם", key: 3 }];
 *  <PortalButtonSet buttons={buttons} onClick={ btn=> alert(btn.label)} pressedKey={buttons[0].key} shadowBox={"top"}/>
 */

function PortalButtonSet({ buttons, onClick, pressedKey, shadowBox }) {
    const btns = buttons.map(btn =>
        <div key={btn.key}
            className={`${btn.key === pressedKey ? "btn-pressed" : ""}`}
            onClick={() => onClick(btn)} >
            {btn.label}
        </div>);

    return (
        <div className="c-button-set">
            <div className={`row-buttons ${shadowBox ? shadowBox : ""}`}>
                {btns}
            </div>
        </div>
    );
}


export default PortalButtonSet;
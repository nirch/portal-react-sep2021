import React from 'react';
import './PortalTable.css';

function PortalTable ({headers, data, onClick}) {

    function tableHeader()
    {
        return headers.map((item, index) => <th key={index}>{item.header}</th>)
    }
    
    function tableBody()
    {
       return data.map((dataEntry,index) => <tr key={index} onClick = {() => onClick(dataEntry)}>
            {headers.map((item, index) => <td key={index}>{dataEntry[item.key]}</td>)}
        </tr>) 
    }

    return (
        <div>
          <table className="c-table">
            <thead>
                <tr> 
               {tableHeader()}
               </tr>
            </thead>            
            <tbody>
                {tableBody()}
            </tbody>
          </table>
        </div>
      )
}

export default PortalTable;
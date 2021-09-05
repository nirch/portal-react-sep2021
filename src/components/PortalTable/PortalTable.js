import React from 'react';
import './PortalTable.css';

function PortalTable ({headers, data, onClick}) {

    function tableHeader()
    {
        return headers.map(item => <th>{item.header}</th>)
    }
    
    function tableBody()
    {
       return data.map(dataEntry => <tr onClick = {onclick}>
            {headers.map(item => <td>{dataEntry[item.key]}</td>)}
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
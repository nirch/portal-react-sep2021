import React from 'react';
import './PortalTable.css';

function PortalTable ({headers, data, onClick}) {

    function tableHeader()
    {
        return headers.map(item => <th>{headers.header}</th>)
    }
    
    function tableBody()
    {
       return data.map(dataEntry => <tr>
            {headers.map(item => <td>{data[headers.key]}</td>)}
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
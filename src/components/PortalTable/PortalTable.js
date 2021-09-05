import React from 'react';
import './PortalTable.css';

function PortalTable ({headers, data, onClick}) {

    function tableHeader({headers})
    {
        headers.map(item => <th>{headers.header}</th>)
    }

    function tableBody({headers, data}){
        function row (headers, data) 
        {
            for (i= 0 ; i<=headers.length ; i++) 
            {
                return(
                    <td>{data.header}</td>
                )
            }
        }
        return(
            <tr>
                <title/>
            </tr>
        )

    }

    return (
        <div>
          <table className="c-table">
            <thead>
              <tr>
               <tableHeader/>
              </tr>
            </thead>
            <tbody>
                <tableBody/>
            </tbody>
          </table>
        </div>
      )
}

export default PortalTable;
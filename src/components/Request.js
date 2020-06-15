import React, { useState } from 'react';
import { getUser, removeUserSession } from '../Utils/Common.js';
 
function Request (props) {
  // const user = getUser();
 
  const [requestList, setRequestList] = useState([]);
  const [loading, setLoading] = useState(false);
 

  // handle click event of logout button
//   const handleLogout = () => {
//     removeUserSession();
//     props.history.push('/login');
//   }
 
  const getRequestList = () => {
    setLoading(true);
    fetch('https://runsend.herokuapp.com/api/admins/requests/57ejrjdfnd6489rtkjghe9ptiyngrnotgui9ergunr95')
      .then(res => res.json())
      .then(res => {
       
        setRequestList(res.data.docs);
        setLoading(false);
      });
    }
 
    // const getList = (id) => {
    //   fetch(`https://runsend.herokuapp.com/api/admins/confirm-trans/${id}`, {
    //             method: 'POST'
                
    //         }).then((res) => res.json())
    //         .then((data) => {
    //           setmessage(data);
    //           console.log(data)
    //         }

    //         )
    //         .catch((err)=>console.log(err))
    //     }
     
    

  return (
    <div>
      Request for withdrawal<br /><br />

      
<div className="container App">
 
      
      <button
        className="btn btn-info float-right"
        onClick={getRequestList}
        disabled={loading}>
        {loading ? 'Loading...' : 'Get User List'}
      </button>
      <div className="clearfix"></div>
 
      <table class="table mt-3">
        <thead class="thead-dark">
          {/* <th>UserId</th> */}
          <th>Username</th>
          <th>Hots total</th>
          <th>Requested</th>
          <th> Hots left</th>
          <th>Cash Amount</th>
          <th>Date</th>
          <th>Confirm withdrawal</th>
        </thead>
        <tbody>

          {requestList.map(x =>
             <tr>
            {/* <td>{x.toID}</td> */}
            <td>{x.owner.username}</td>
            <td>{x.lastAmount}</td>
            <td>{x.amount}</td>
            <td>{x.currentAmount }</td>
            <td>{x.amountNGN }</td>
            <td>{x.created_at}</td>

            {x.confirm == false?
            <td>false</td>
        :
        <td>true</td>
        }
            

        

          </tr>)
          }

      
          {requestList.length === 0 && <tr>
            <td className="text-center" colSpan="4">
              <b>No data found to display.</b>
            </td>
          </tr>}


        </tbody>
      </table>
 
    </div>

    </div>


  );
}
 
export default Request;
import React, { useState } from 'react';
import { getUser, removeUserSession } from '../Utils/Common.js';
 
function Fund (props) {
  // const user = getUser();
 
  const [fundList, setFundList] = useState([]);
  const [loading, setLoading] = useState(false);
 

  // handle click event of logout button
//   const handleLogout = () => {
//     removeUserSession();
//     props.history.push('/login');
//   }
 
  const getFundList = () => {
    setLoading(true);
    fetch('https://runsend.herokuapp.com/api/admins/funds/57ejrjdfnd64894689469849684njkrhtng98e46ny95')
      .then(res => res.json())
      .then(res => {
       
        setFundList(res.data.docs);
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
      Welcome to Fund Dashboard<br /><br />

      
<div className="container App">
 
      
      <button
        className="btn btn-info float-right"
        onClick={getFundList}
        disabled={loading}>
        {loading ? 'Loading...' : 'Get User List'}
      </button>
      <div className="clearfix"></div>
 
      <table class="table mt-3">
        <thead class="thead-dark">
          {/* <th>UserId</th> */}
          <th>Username</th>
          <th>From</th>
          <th>Amount</th>
          <th>Hots</th>
          <th>Confirm</th>
          <th>Check</th>
          <th>message</th>
        </thead>
        <tbody>

          {fundList.map(x =>
             <tr>
            {/* <td>{x.toID}</td> */}
            <td>{x.to.username}</td>
            <td>{x.from.username}</td>
            <td>{x.amount}</td>
            <td>{x.amount *40}</td>
            {
              x.confirm === true ?
               <td>true</td>
               :
               <td>false</td>
            }

        

          </tr>)
          }

      
          {fundList.length === 0 && <tr>
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
 
export default Fund;
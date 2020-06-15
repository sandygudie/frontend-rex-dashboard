import React, { useState } from 'react';
import { getUser, removeUserSession } from '../Utils/Common.js';
 
function Dashboard(props) {
  const user = getUser();
 
  const [userList, setUserList] = useState([]);
  const [loading, setLoading] = useState(false);
  const [getmessage, setmessage] = useState([]);

  // handle click event of logout button
  const handleLogout = () => {
    removeUserSession();
    props.history.push('/login');
  }
 
  const getUserList = () => {
    setLoading(true);
    fetch('https://runsend.herokuapp.com/api/admins/trans/357ejrjdfndjsdgbjuhdgjgehuetnwkendsttwerjuwyreuwerjhkernhuk')
      .then(res => res.json())
      .then(res => {
       
        setUserList(res.data.docs);
        setLoading(false);
      });
    }
 
    const getList = (id) => {
      fetch(`https://runsend.herokuapp.com/api/admins/confirm-trans/${id}`, {
                method: 'POST'
                
            }).then((res) => res.json())
            .then((data) => {
              setmessage(data);
              console.log(data)
            }

            )
            .catch((err)=>console.log(err))
        }
     
    

  return (
    <div>
      Welcome sandy!<br /><br />

      <input type="button" onClick={handleLogout} value="Logout" />
<div className="container App">
 
      
      <button
        className="btn btn-info float-right"
        onClick={getUserList}
        disabled={loading}>
        {loading ? 'Loading...' : 'Get User List'}
      </button>
      <div className="clearfix"></div>
 
      <table class="table mt-3">
        <thead class="thead-dark">
        
          <th>Username</th>
          <th>From</th>
          <th>Amount</th>
          <th>Hots</th>
          <th>Confirm</th>
          <th>Check</th>
          <th>message</th>
        </thead>
        <tbody>

          {userList.map(x =>
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

              {
              x.confirm === false ?
               <td> 
                 <button
                   onClick={getList(x._id)} 
                  className="btnlist"
                  >
                  Confirm
                  </button>
               </td>
              :
              <td>Done</td>
            }
            
            {getmessage.map(msg =>

                <td>{msg.message}</td>
            )}


          </tr>)
          }

      
          {userList.length === 0 && <tr>
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
 
export default Dashboard;
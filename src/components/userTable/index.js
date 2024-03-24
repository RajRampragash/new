// UserTable.js
import React from 'react';
import './style.css'

function UserTable({ users }) {
  return (
    <div >
      <h2 s>Registered Users</h2>
      <table  className="table">
        <thead>
          <tr>
           
            <th>First Name</th>
            <th>Last Name</th>
            <th>Email</th>
            <th>Blood Group</th>
            <th>Loaction</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr key={index}>
             
              <td>{user.firstName}</td>
              <td>{user.lastName}</td>
              <td>{user.mobile}</td>
              <td>{user.bloodGroup}</td>
              <td>{user.location}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}



export default UserTable;

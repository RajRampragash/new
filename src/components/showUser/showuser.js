// App.js
import React, { useState } from 'react';
import RegistrationForm from '../form/index.js';
import UserTable from '../userTable/index.js'

function ShowUser() {
  const [users, setUsers] = useState([]);

  const addUser = (user) => {
    setUsers([...users, user]);
  };

  return (
    <div style={styles.container} className='showuser'>
      <h1 style={styles.heading}>Blood Donation RegistrationForm</h1>
      <RegistrationForm addUser={addUser} />
      <UserTable users={users} />
    </div>
  );
}

const styles = {
  container: {
    
    margin: '0 auto',
    padding: '20px',
  },
  heading: {
    textAlign: 'center',
    marginBottom: '20px',
  },
};

export default ShowUser;

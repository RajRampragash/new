// RegistrationForm.js
import React, { useState } from 'react';
import "./style.css"

function RegistrationForm({ addUser }) {
  const [formData, setFormData] = useState({
    No: '',
    firstName: '',
    lastName: '',
    mobile: '',
    bloodGroup: '',
    location:'' // Corrected typo: loaction to location
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    addUser(formData);
    setFormData({ No: '',  firstName: '', lastName: '', mobile: '', bloodGroup: '', location:'' }); // Corrected typo: loaction to location
  };

  return (
    <form onSubmit={handleSubmit} className='form' >
      <h2>Register for Blood Donation</h2>
    
      <label>
        First Name:
        <input type="text" name="firstName" value={formData.firstName} onChange={handleChange} required/>
      </label>
      <br />
      <label>
        Last Name:
        <input type="text" name="lastName" value={formData.lastName} onChange={handleChange} required/>
      </label>
      <br />
      <label>
        Mobile:
        <input type="number" name="mobile" value={formData.mobile} onChange={handleChange} required/>
      </label>
      <br />
      <label>
        Blood Group:
        <input type="text" name="bloodGroup" value={formData.bloodGroup} onChange={handleChange}required />
      </label>
      <br />
      <label>
        Location: {/* Corrected typo: loaction to location */}
        <input type="text" name="location" value={formData.location} onChange={handleChange} required/>
      </label>
      <br />
      <button type="submit">Submit</button>
    </form>
  );
}

export default RegistrationForm;

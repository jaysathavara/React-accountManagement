import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const RegisterPage = () => {
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [mobile, setMobile] = useState('');
  const [address, setAddress] = useState({
    street: '',
    city: '',
    state: '',
    postalCode: ''
  });
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const user = {
      firstName,
      lastName,
      mobile,
      address,
      email,
      password
    };
    localStorage.setItem(email, JSON.stringify(user));
    alert('Registration successful!');
    navigate('/login');
  };

  const onClick = () =>{
    navigate('/login')
  }

  return (
    <div className="container mt-5">
      <h2>Register</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>First Name</label>
          <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Last Name</label>
          <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Mobile Number</label>
          <input type="tel" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Street</label>
          <input type="text" className="form-control" name="street" value={address.street} onChange={handleAddressChange} required />
        </div>
        <div className="mb-3">
          <label>City</label>
          <input type="text" className="form-control" name="city" value={address.city} onChange={handleAddressChange} required />
        </div>
        <div className="mb-3">
          <label>State</label>
          <input type="text" className="form-control" name="state" value={address.state} onChange={handleAddressChange} required />
        </div>
        <div className="mb-3">
          <label>Postal Code</label>
          <input type="text" className="form-control" name="postalCode" value={address.postalCode} onChange={handleAddressChange} required />
        </div>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary mb-3">Register</button>
        <div className='mb-3'>

        <a className='bs-info bs-info' role='button' onClick={onClick}>Already have an account?</a>
        </div>
      </form>
    </div>
  );
};

export default RegisterPage;

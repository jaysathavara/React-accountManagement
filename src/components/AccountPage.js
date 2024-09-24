import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const AccountPage = () => {
  const [user, setUser] = useState(null);
  const [editing, setEditing] = useState(false);
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

  useEffect(() => {
    const loggedInEmail = localStorage.getItem('loggedInUser');
    if (!loggedInEmail) {
      navigate('/login');
    } else {
      const storedUser = JSON.parse(localStorage.getItem(loggedInEmail));
      setUser(storedUser);
      setFirstName(storedUser.firstName);
      setLastName(storedUser.lastName);
      setMobile(storedUser.mobile);
      setAddress(storedUser.address);
      setEmail(storedUser.email);
      setPassword(storedUser.password);
    }
  }, [navigate]);

  const handleAddressChange = (e) => {
    setAddress({ ...address, [e.target.name]: e.target.value });
  };

  const handleSave = () => {
    const updatedUser = { firstName, lastName, mobile, address, email, password };
    localStorage.setItem(email, JSON.stringify(updatedUser));
    setUser(updatedUser);
    setEditing(false);
  };

  const handleLogout = () => {
    localStorage.removeItem('loggedInUser');
    navigate('/login');
  };

  if (!user) return null;

  return (
    <div className="container mt-5">
      <h2>Account Information</h2>
      {editing ? (
        <div>
          <div className="mb-3">
            <label>First Name</label>
            <input type="text" className="form-control" value={firstName} onChange={(e) => setFirstName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Last Name</label>
            <input type="text" className="form-control" value={lastName} onChange={(e) => setLastName(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Mobile Number</label>
            <input type="tel" className="form-control" value={mobile} onChange={(e) => setMobile(e.target.value)} />
          </div>
          <div className="mb-3">
            <label>Street</label>
            <input type="text" className="form-control" name="street" value={address.street} onChange={handleAddressChange} />
          </div>
          <div className="mb-3">
            <label>City</label>
            <input type="text" className="form-control" name="city" value={address.city} onChange={handleAddressChange} />
          </div>
          <div className="mb-3">
            <label>State</label>
            <input type="text" className="form-control" name="state" value={address.state} onChange={handleAddressChange} />
          </div>
          <div className="mb-3">
            <label>Postal Code</label>
            <input type="text" className="form-control" name="postalCode" value={address.postalCode} onChange={handleAddressChange} />
          </div>
          <button className="btn btn-primary" onClick={handleSave}>Save</button>
          <button className="btn btn-secondary ms-2" onClick={() => setEditing(false)}>Cancel</button>
        </div>
      ) : (
        <div>
          <p><strong>First Name: </strong>{user.firstName}</p>
          <p><strong>Last Name: </strong>{user.lastName}</p>
          <p><strong>Mobile Number: </strong>{user.mobile}</p>
          <p><strong>Street: </strong>{user.address.street}</p>
          <p><strong>City: </strong>{user.address.city}</p>
          <p><strong>State: </strong>{user.address.state}</p>
          <p><strong>Postal Code: </strong>{user.address.postalCode}</p>
          <p><strong>Email: </strong>{user.email}</p>
          <button className="btn btn-secondary" onClick={() => setEditing(true)}>Edit</button>
        </div>
      )}
      <button className="btn btn-danger mt-3" onClick={handleLogout}>Logout</button>
    </div>
  );
};

export default AccountPage;

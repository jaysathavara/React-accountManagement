import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';

const LoginPage = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    const registeredUser = JSON.parse(localStorage.getItem(email));
    if (registeredUser && registeredUser.password === password) {
      localStorage.setItem('loggedInUser', email);
      navigate('/account');
    } else {
      alert('Invalid credentials!');
    }
  };

  const onClick = () =>{
    navigate('/register')
  }

  return (
    <div className="container mt-5">
      <h2>Login</h2>
      <form onSubmit={handleSubmit}>
        <div className="mb-3">
          <label>Email</label>
          <input type="email" className="form-control" value={email} onChange={(e) => setEmail(e.target.value)} required />
        </div>
        <div className="mb-3">
          <label>Password</label>
          <input type="password" className="form-control" value={password} onChange={(e) => setPassword(e.target.value)} required />
        </div>
        <button type="submit" className="btn btn-primary mb-3">Login</button>
        <div className=''>

        <a className='bs-info' role='button' onClick={onClick}>Don't have an account?</a>
        </div>
      </form>
    </div>
  );
};

export default LoginPage;

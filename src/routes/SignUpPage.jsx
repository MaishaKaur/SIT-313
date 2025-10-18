import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function SignUpPage(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const { signup } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      await signup(email,password);
      navigate('/');
    }catch(e){ alert(e.message); }
  };

  return (
    <div className="container">
      <div className="gray-box"><h2>Sign Up</h2></div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit">Sign Up</button>
      </form>
    </div>
  );
}
export default SignUpPage;


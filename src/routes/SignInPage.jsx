import React, { useState } from "react";
import { useAuth } from "../AuthContext";
import { useNavigate } from "react-router-dom";

function SignInPage(){
  const [email,setEmail]=useState('');
  const [password,setPassword]=useState('');
  const { signin } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = async (e) =>{
    e.preventDefault();
    try{
      await signin(email,password);
      navigate('/');
    }catch(e){ alert(e.message); }
  };

  return (
    <div className="container">
      <div className="gray-box"><h2>Sign In</h2></div>
      <form onSubmit={handleSubmit}>
        <label>Email</label>
        <input value={email} onChange={(e)=>setEmail(e.target.value)} required />
        <label>Password</label>
        <input type="password" value={password} onChange={(e)=>setPassword(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
}
export default SignInPage;


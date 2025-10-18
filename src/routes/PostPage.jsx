import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db } from "../firebase";
import Header_item from "../Header_item";

function PostPage(){
  const [postType,setPostType]=useState('');
  const [title,setTitle]=useState('');
  const [description,setDescription]=useState('');

  const handleSubmit=async(e)=>{
    e.preventDefault();
    try{
      await addDoc(collection(db,'posts'),{ type:postType, title, description, createdAt: new Date() });
      alert('Posted');
      setTitle(''); setDescription(''); setPostType('');
    }catch(e){ console.error(e); }
  };

  return (
    <div className="container">
      <div className="gray-box"><Header_item text="New Post" /></div>
      <select value={postType} onChange={(e)=>setPostType(e.target.value)}>
        <option value="">-- Select --</option>
        <option value="question">Question</option>
        <option value="article">Article</option>
      </select>
      {postType && (
        <form onSubmit={handleSubmit}>
          <label>Title</label>
          <input value={title} onChange={(e)=>setTitle(e.target.value)} required />
          <label>Description</label>
          <textarea value={description} onChange={(e)=>setDescription(e.target.value)} required />
          <div style={{display:'flex', justifyContent:'flex-end'}}><button type="submit">Post</button></div>
        </form>
      )}
    </div>
  );
}
export default PostPage;

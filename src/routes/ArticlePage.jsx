import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { db } from "../firebase";

function ArticlePage(){
  const { id } = useParams();
  const [post,setPost]=useState(null);

  useEffect(()=>{
    const load = async()=>{
      const ref = doc(db,'posts',id);
      const snap = await getDoc(ref);
      if(snap.exists()) setPost(snap.data());
    };
    load();
  },[id]);

  if(!post) return <div className="container"><p>Loading...</p></div>;

  return (
    <div className="container">
      <div className="gray-box"><h2>{post.title}</h2></div>
      <p>{post.description}</p>
    </div>
  );
}
export default ArticlePage;
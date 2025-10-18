import React, { useEffect, useState } from "react";
import { collection, query, where, orderBy, onSnapshot, deleteDoc, doc } from "firebase/firestore";
import { db } from "../firebase";

function FindQuestionPage(){
  const [questions,setQuestions]=useState([]);
  const [filter,setFilter]=useState('');

  useEffect(()=>{
    const q = query(collection(db,'posts'), where('type','==','question'), orderBy('createdAt','desc'));
    const unsub = onSnapshot(q,(snap)=>{
      setQuestions(snap.docs.map(d=>({ id:d.id, ...d.data() })));
    });
    return unsub;
  },[]);

  const handleDelete = async(id)=>{
    if(!window.confirm('Delete this?')) return;
    try{ await deleteDoc(doc(db,'posts',id)); }
    catch(e){ console.error(e); }
  };

  const filtered = questions.filter(q=> q.title?.toLowerCase().includes(filter.toLowerCase()));

  return (
    <div className="container">
      <div className="gray-box"><h2>Find Questions</h2></div>
      <input placeholder="Filter by title" value={filter} onChange={(e)=>setFilter(e.target.value)} />
      <div style={{marginTop:12}}>
        {filtered.length===0 ? <p>No matching questions</p> : filtered.map(q=> (
          <div key={q.id} style={{borderBottom:'1px solid #eee', padding:8}}>
            <h4>{q.title}</h4>
            <p className="small-muted">{q.description}</p>
            <div style={{display:'flex', gap:8}}>
              <a href={`/question/${q.id}`}>Open</a>
              <button onClick={()=>handleDelete(q.id)}>Delete</button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
export default FindQuestionPage;


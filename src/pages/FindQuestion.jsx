import React, { useEffect, useState } from "react";
import {
  collection,
  query,
  where,
  orderBy,
  onSnapshot,
  deleteDoc,
  doc,
} from "firebase/firestore";
import { db } from "../firebase";
import QuestionCard from "../QuestionCard";

function FindQuestion() {
  const [questions, setQuestions] = useState([]);
  const [titleFilter, setTitleFilter] = useState("");

  useEffect(() => {
    const q = query(
      collection(db, "posts"),
      where("type", "==", "question"),
      orderBy("createdAt", "desc")
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const items = snapshot.docs.map((docItem) => ({
        id: docItem.id,
        ...docItem.data(),
      }));
      setQuestions(items);
    });

    return () => unsubscribe();
  }, []);

  const handleDelete = async (id) => {
    const confirmDelete = window.confirm("Are you sure you want to delete this question?");
    if (!confirmDelete) return;

    try {
      // Optimistic UI: remove item before deleting in Firestore
      setQuestions((prev) => prev.filter((item) => item.id !== id));

      await deleteDoc(doc(db, "posts", id));
      console.log("Question deleted successfully:", id);
    } catch (error) {
      console.error("Error deleting question:", error);
      alert("Error deleting question. Please try again.");
    }
  };

  const filtered = questions.filter((q) => {
    const titleMatch = q.title
      ? q.title.toLowerCase().includes(titleFilter.toLowerCase())
      : false;
    return titleMatch;
  });

  return (
    <div className="container">
      <div className="gray-box">
        <h2>Find Questions</h2>
        <p>Filter, expand, or delete questions below.</p>
      </div>

      <div className="filter-row">
        <input
          type="text"
          placeholder="Filter by title"
          value={titleFilter}
          onChange={(e) => setTitleFilter(e.target.value)}
        />
      </div>

      <div style={{ marginTop: 12 }}>
        {filtered.length === 0 ? (
          <p>No matching questions found.</p>
        ) : (
          filtered.map((q) => (
            <QuestionCard
              key={q.id}
              question={q}
              onDelete={() => handleDelete(q.id)}
            />
          ))
        )}
      </div>
    </div>
  );
}

export default FindQuestion;

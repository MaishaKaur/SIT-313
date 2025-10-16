import React, { useState } from "react";

function QuestionCard({ question, onDelete }) {
  const [open, setOpen] = useState(false);

  const createdAtText =
    question.createdAt && question.createdAt.toDate
      ? new Date(question.createdAt.toDate()).toLocaleString()
      : "Unknown";

  return (
    <div className="question-card" onClick={() => setOpen((s) => !s)}>
      <div className="q-header">
        <div>
          <h3 style={{ margin: 0 }}>{question.title}</h3>
          <small style={{ color: "#666" }}>{question.tags}</small>
        </div>
        <div className="q-actions">
          <small>{createdAtText}</small>
          <button
            onClick={(e) => {
              e.stopPropagation();
              onDelete();
            }}
            className="delete-btn"
          >
            Delete
          </button>
        </div>
      </div>

      {open && (
        <div className="q-body">
          <p><strong>Description:</strong></p>
          <p>{question.description}</p>
          {question.imageUrl && (
            <img
              src={question.imageUrl}
              alt="attached"
              style={{
                width: "100%",
                maxHeight: "300px",
                objectFit: "cover",
                marginTop: "8px",
                borderRadius: "6px",
              }}
            />
          )}
        </div>
      )}
    </div>
  );
}

export default QuestionCard;

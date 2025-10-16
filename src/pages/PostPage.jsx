import React, { useState } from "react";
import { collection, addDoc } from "firebase/firestore";
import { db, serverTimestamp } from "../firebase";
import Header_item from "../Header_item";
import Normal_text from "../Normal_text";
import Input from "../Input";
import Description from "../Description";
import Option from "../Option";
import Button from "../Button";

function PostPage() {
  const [postType, setPostType] = useState("");
  const [title, setTitle] = useState("");
  const [abstract, setAbstract] = useState("");
  const [description, setDescription] = useState("");
  const [tags, setTags] = useState("");
  const [imageUrl, setImageUrl] = useState("");
  const [submitting, setSubmitting] = useState(false);

  const resetForm = () => {
    setPostType("");
    setTitle("");
    setAbstract("");
    setDescription("");
    setTags("");
    setImageUrl("");
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!postType) {
      alert("Please select a post type.");
      return;
    }
    setSubmitting(true);

    try {
      const postsRef = collection(db, "posts");
      const newPost = {
        type: postType,
        title,
        abstract: postType === "article" ? abstract : "",
        description,
        tags,
        imageUrl: imageUrl || "",
        createdAt: serverTimestamp(),
      };

      await addDoc(postsRef, newPost);
      alert("Post saved to Firestore!");
      resetForm();
    } catch (err) {
      console.error("Error saving post:", err);
      alert("Error saving post. Check console.");
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div>
      <div className="gray-box">
        <Header_item text="New Post" />
      </div>

      <Normal_text text="Choose Post Type:" />
      <select value={postType} onChange={(e) => setPostType(e.target.value)}>
        <Option value="" label="-- Select --" />
        <Option value="question" label="Question" />
        <Option value="article" label="Article" />
      </select>

      <div className="gray-box">
        <h3>What do you want to write?</h3>
      </div>

      {postType && (
        <form onSubmit={handleSubmit}>
          <Input label="Title" value={title} setValue={setTitle} />

          {postType === "article" && (
            <Input label="Abstract" value={abstract} setValue={setAbstract} />
          )}

          <Description
            label="Description"
            value={description}
            setValue={setDescription}
          />

          {postType === "question" && (
            <Input label="Tags (for question)" value={tags} setValue={setTags} />
          )}
          {postType === "article" && (
            <Input
              label="Category (for article)"
              value={tags}
              setValue={setTags}
            />
          )}

          {postType === "article" && (
            <div style={{ marginBottom: "12px" }}>
              <label>Paste Image URL (optional):</label>
              <input
                type="text"
                placeholder="https://example.com/myimage.jpg"
                value={imageUrl}
                onChange={(e) => setImageUrl(e.target.value)}
                style={{ marginTop: "8px", width: "100%", padding: "8px" }}
              />
              {imageUrl && (
                <div style={{ marginTop: "8px" }}>
                  <em>Preview:</em>
                  <div>
                    <img
                      src={imageUrl}
                      alt="preview"
                      style={{
                        maxWidth: "100%",
                        borderRadius: 6,
                        marginTop: 6,
                      }}
                    />
                  </div>
                </div>
              )}
            </div>
          )}

          <div className="button-right">
            <Button text={submitting ? "Posting..." : "Post"} />
          </div>
        </form>
      )}
    </div>
  );
}

export default PostPage;
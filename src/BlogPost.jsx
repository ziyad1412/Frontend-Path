import { useState } from "react";

function BlogPost(props) {
  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState(""); // State untuk input komentar
  const [comments, setComments] = useState([]); // State untuk daftar komentar

  const handleLike = () => {
    setLikes(likes + 1);
  };

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]); // Tambahkan komentar ke list
      setComment(""); // Reset input setelah submit
    }
  };

  return (
    <div className="blog-post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={handleLike}>Like ({likes})</button>

      {/* Form untuk menambahkan komentar */}
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Tulis komentar..."
          value={comment}
          onChange={handleCommentChange}
        />
        <button type="submit">Kirim</button>
      </form>

      {/* Menampilkan daftar komentar */}
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default BlogPost;

import { useParams } from "react-router-dom";
import { useState, useRef } from "react";
import useCounter from "../hooks/useCounter"; // Import Custom Hook

const articles = [
  { id: 1, title: "Belajar React", content: "React itu keren!" },
  {
    id: 2,
    title: "Kenapa Harus JSX?",
    content: "JSX membuat UI lebih mudah ditulis.",
  },
];

function ArticleDetail() {
  const { id } = useParams();
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) return <h2>Artikel tidak ditemukan</h2>;

  const [likes, incrementLikes] = useCounter(0); // Gunakan useCounter untuk likes
  const [views] = useCounter(0); // Gunakan useCounter untuk views
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const commentInputRef = useRef(null);

  const handleCommentChange = (event) => {
    setComment(event.target.value);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    if (comment.trim() !== "") {
      setComments([...comments, comment]);
      setComment("");
    }
  };

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>👀 Views: {views}</p>
      <button onClick={incrementLikes}>Like ({likes})</button>

      {/* Form untuk menambahkan komentar */}
      <form onSubmit={handleSubmit}>
        <input
          ref={commentInputRef}
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

export default ArticleDetail;

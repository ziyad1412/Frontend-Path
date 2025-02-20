import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";
import { useLikes } from "../context/LikesContext"; // Import useLikes

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

  const { likes, views, addLike, addView } = useLikes(); // Ambil state dari Context
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const commentInputRef = useRef(null);

  useEffect(() => {
    addView(id); // Tambahkan view saat artikel dibuka
  }, [id, addView]);

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
      <p>👀 Views: {views[id] || 0}</p>
      <button onClick={() => addLike(id)}>Like ({likes[id] || 0})</button>

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

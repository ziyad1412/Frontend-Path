import { useParams } from "react-router-dom";
import { useState, useEffect, useRef } from "react";

const articles = [
  { id: 1, title: "Belajar React", content: "React itu keren!" },
  {
    id: 2,
    title: "Kenapa Harus JSX?",
    content: "JSX membuat UI lebih mudah ditulis.",
  },
];

function ArticleDetail() {
  const { id } = useParams(); // Ambil ID dari URL
  const article = articles.find((a) => a.id === parseInt(id));

  if (!article) return <h2>Artikel tidak ditemukan</h2>;

  const [likes, setLikes] = useState(0);
  const [comment, setComment] = useState(""); // State untuk input komentar
  const [comments, setComments] = useState([]); // State untuk daftar komentar
  const [views, setViews] = useState(0); // State untuk menyimpan jumlah views
  const commentInputRef = useRef(null); // useRef untuk referensi input komentar

  useEffect(() => {
    setViews((prevViews) => prevViews + 1); // Tambah views setiap kali halaman dibuka
    commentInputRef.current.focus(); // Fokus otomatis ke input komentar saat halaman dibuka
  }, []); // Dependency array kosong agar hanya dijalankan saat pertama kali render

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
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>👀 Views: {views}</p>
      <button onClick={handleLike}>Like ({likes})</button>

      {/* Form untuk menambahkan komentar */}
      <form onSubmit={handleSubmit}>
        <input
          ref={commentInputRef} // Tambahkan ref untuk fokus otomatis
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

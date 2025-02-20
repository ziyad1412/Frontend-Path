import { useParams } from "react-router-dom";
import { useState, useEffect } from "react";
import useLikesStore from "../store/likesStore";

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

  const { likes, views, addLike, addView } = useLikesStore();
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);

  useEffect(() => {
    addView(id);
  }, [id, addView]);

  return (
    <div>
      <h1>{article.title}</h1>
      <p>{article.content}</p>
      <p>👀 Views: {views[id] || 0}</p>
      <button onClick={() => addLike(id)}>Like ({likes[id] || 0})</button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          if (comment.trim()) setComments([...comments, comment]);
          setComment("");
        }}
      >
        <input
          type="text"
          placeholder="Tulis komentar..."
          value={comment}
          onChange={(e) => setComment(e.target.value)}
        />
        <button type="submit">Kirim</button>
      </form>
      <ul>
        {comments.map((c, index) => (
          <li key={index}>{c}</li>
        ))}
      </ul>
    </div>
  );
}

export default ArticleDetail;

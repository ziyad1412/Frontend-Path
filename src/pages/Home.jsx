import { Link } from "react-router-dom";

const articles = [
  { id: 1, title: "Belajar React", content: "React itu keren!" },
  {
    id: 2,
    title: "Kenapa Harus JSX?",
    content: "JSX membuat UI lebih mudah ditulis.",
  },
];

function Home() {
  return (
    <div>
      <h1>Kajicode Blog</h1>
      {articles.map((article) => (
        <div key={article.id} className="blog-post">
          <h2>
            <Link to={`/article/${article.id}`}>{article.title}</Link>
          </h2>
          <p>{article.content}</p>
        </div>
      ))}
    </div>
  );
}

export default Home;

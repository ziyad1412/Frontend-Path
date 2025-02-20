import { useState } from "react";

function BlogPost(props) {
  // State untuk menyimpan jumlah Like
  const [likes, setLikes] = useState(0);

  // Function untuk menambah Like
  const handleLike = () => {
    setLikes(likes + 1);
  };

  return (
    <div className="blog-post">
      <h2>{props.title}</h2>
      <p>{props.content}</p>
      <button onClick={handleLike}>Like ({likes})</button>
    </div>
  );
}

export default BlogPost;

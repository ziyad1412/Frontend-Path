import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import BlogPost from "./BlogPost";

function App() {
  const name = "Kajicode";

  return (
    <>
      <h1>{name} Blog</h1>
      <BlogPost
        title="Belajar React"
        content="React itu keren dan mudah dipahami!"
      />
      <BlogPost
        title="Kenapa Harus JSX?"
        content="JSX membuat penulisan UI lebih simpel dan jelas."
      />
    </>
  );
}

export default App;

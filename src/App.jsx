import "./App.css";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import ArticleDetail from "./pages/ArticleDetail";

function App() {
  const name = "Kajicode";

  return (
    <>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/article/:id" element={<ArticleDetail />} />
      </Routes>
    </>
  );
}

export default App;

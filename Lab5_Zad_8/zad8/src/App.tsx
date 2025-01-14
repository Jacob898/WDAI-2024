import './App.css'
import { BrowserRouter, Routes, Route} from "react-router-dom";
import Homepage from "./pages/Homepage"
import Blog from "./pages/Blog.tsx";
import AddArticle from "./pages/AddArticle.tsx";
import ArticleContent from "./pages/AritcleContent.tsx";

function App() {
  return(
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<Homepage />} />
              <Route path="/blog" element={<Blog />} />
              <Route path="/dodaj" element={<AddArticle />} />
              <Route path="/article/:id" element={<ArticleContent />} />
          </Routes>
      </BrowserRouter>
  );
}

export default App

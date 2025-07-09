import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import BlogList from "./components/BlogList";
import BlogDetails from "./components/BlogDetails";
import CreateBlogForm from "./components/CreateBlogForm";
import NotFound from "./components/NotFound";
import './App.css';


function App() {
  return (
    <Router>
      <div className="App">
        <h1>Dojo Blog</h1>
        <Routes>
          <Route path="/" element={<BlogList />} />
          <Route path="/create" element={<CreateBlogForm />} />
          <Route path="/blogs/:id" element={<BlogDetails />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;

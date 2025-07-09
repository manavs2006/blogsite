import { Link } from "react-router-dom";
import { useEffect, useState } from "react";

function BlogList() {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    fetch("http://localhost:8000/blogs")
      .then(res => res.json())
      .then(data => setBlogs(data));
  }, []);

  return (
    <div>
      <h2>All Blogs</h2>
      {blogs && blogs.map(blog => (
        <div className="blog-preview" key={blog.id}>
          <Link to={`/blogs/${blog.id}`}>
            <h3>{blog.title}</h3>
            <p>By {blog.author}</p>
          </Link>
        </div>
      ))}
    </div>
  );
}

export default BlogList;

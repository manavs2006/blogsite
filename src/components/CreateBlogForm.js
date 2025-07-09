import { useParams, useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";

function BlogDetails() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);

  useEffect(() => {
    fetch(`http://localhost:8000/blogs/${id}`)
      .then(res => res.json())
      .then(data => setBlog(data));
  }, [id]);

  const handleDelete = () => {
    fetch(`http://localhost:8000/blogs/${id}`, {
      method: "DELETE"
    }).then(() => {
      navigate("/");
    });
  };

  return (
    <div>
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p><b>By:</b> {blog.author}</p>
          <p>{blog.body}</p>
          <button onClick={handleDelete}>Delete Blog</button>
        </article>
      )}
    </div>
  );
}

export default BlogDetails;

import { useParams, useNavigate } from 'react-router-dom';
import { useEffect, useState } from 'react';

const BlogDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [blog, setBlog] = useState(null);
  const [isPending, setIsPending] = useState(true);

  useEffect(() => {
    fetch('http://localhost:8000/blogs/' + id)
      .then(res => res.json())
      .then(data => {
        setBlog(data);
        setIsPending(false);
      });
  }, [id]);

  const handleDelete = () => {
    fetch('http://localhost:8000/blogs/' + id, {
      method: 'DELETE'
    }).then(() => {
      navigate('/');
    });
  };

  return (
    <div className="blog-details">
      {isPending && <div>Loading...</div>}
      {blog && (
        <article>
          <h2>{blog.title}</h2>
          <p>Written by {blog.author}</p>
          <div>{blog.body}</div>
          <button onClick={handleDelete}>Delete</button>
        </article>
      )}
    </div>
  );
};

export default BlogDetails;

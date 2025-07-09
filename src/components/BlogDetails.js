import { useState, useEffect } from "react";
import BlogList from "./BlogList";

const Home = () => {
  const [blogs, setBlogs] = useState(null);

  useEffect(() => {
    setBlogs([
      {
        title: "Startup thoughts",
        body: "Ideas are easy, execution is everything.",
        author: "Manav",
        id: 1
      },
      {
        title: "Design is power",
        body: "Good design is invisible but impactful.",
        author: "Pratham",
        id: 2
      },
      {
        title: "Code & Coffee",
        body: "Nothing beats a debugging session at 2AM.",
        author: "Khushank",
        id: 3
      },
      {
        title: "Productivity hack",
        body: "A focused 30 minutes beats 3 distracted hours.",
        author: "Anshuman",
        id: 4
      },
      {
        title: "Build fast, break fast",
        body: "Ship it. Fix it. Improve it.",
        author: "Karthik",
        id: 5
      },
      {
        title: "Stay curious",
        body: "The best ideas come from asking better questions.",
        author: "Krishna",
        id: 6
      }
    ]);
  }, []);

  return (
    <div className="home">
      {blogs && <BlogList blogs={blogs} title="All Blogs" />}
    </div>
  );
};

export default Home;

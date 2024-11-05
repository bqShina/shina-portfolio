import React from "react";
import movieSearch from "@/public/images/movie-search.png";
import blog from "@/public/images/blog.png";
import githubUserSearch from "@/public/images/github-user-search-app.png";

const AllPracticesPage = () => {
  const practices = [
    {
      name: "Movie Search",
      image: movieSearch,
      link: "https://bqshina.github.io/Movie-Search/",
      description: "Build by React and Bootstrap",
    },
    {
      name: "Blog",
      image: blog,
      link: "https://shina-blog.herokuapp.com/",
      description: "Build by Python with Flake",
    },
    {
      name: "Github User Search App",
      image: githubUserSearch,
      link: "https://bqshina.github.io/My-Portfolio/projects/github-user-search-app/index.html",
      description: "Build by Pure HTML, CSS and Javascript",
    },
  ];
  return <div className="pt-32">AllPracticesPage</div>;
};

export default AllPracticesPage;

import React from "react";
import Header from "../../components/Home/Header";
import Searchbar from "../../components/Home/SearchBar";
import BlogList from "../../components/Home/BlogList";
import { blogList } from "../../config/data";
import { useState } from "react";
import EmptyList from "../../components/common/EmptyList";

const Home = () => {
  const [blogs, setBlogs] = useState(blogList);
  const [searchKey, setSearchKey] = useState("");

  // Search Submit
  const handleSearchSubmit = (event) => {
    event.preventDefault();
    handleSearchResults();
  };

  // Search for blogs by category
  const handleSearchResults = () => {
    const allBlogs = blogList;
    const filteredBlogs = allBlogs.filter((blog) =>
      blog.category
        .toLocaleLowerCase()
        .includes(searchKey.toLocaleLowerCase().trim())
    );
    setBlogs(filteredBlogs);
  };

  const handleClearSearch = () => {
    setBlogs(blogList);
    setSearchKey("");
  };

  return (
    <div>
      {/* Page Header */}
      <Header />

      {/* Search Bar */}
      <Searchbar
        value={searchKey}
        clearSearch={handleClearSearch}
        formSubmit={handleSearchSubmit}
        handleSearchKey={(e) => setSearchKey(e.target.value)}
      />

      {/* Blog List & Empty list */}
      {!blogs.length ? <EmptyList /> : <BlogList blogs={blogs} />}
    </div>
  );
};

export default Home;

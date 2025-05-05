import React from "react";
import BlogListBanner from "./BlogListBanner/BlogListBanner";
import DigitalFuture from "../../HomePage/DigitalFuture/DigitalFuture";
import AllBlogList from "./AllBlogList/AllBlogList";

const BlogList = () => {
  return (
    <div>
      <BlogListBanner />
      <AllBlogList />
      <DigitalFuture status={true} />
    </div>
  );
};

export default BlogList;

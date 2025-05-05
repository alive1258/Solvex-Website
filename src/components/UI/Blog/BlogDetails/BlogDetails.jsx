import React from "react";
import BlogDetailsBanner from "./BlogDetailsBanner/BlogDetailsBanner";
import DigitalFuture from "../../HomePage/DigitalFuture/DigitalFuture";
import BlogDetailSection from "./BlogDetailSection/BlogDetailSection";
import TagSection from "./TagSection/TagSection";

const BlogDetails = () => {
  return (
    <div>
      <BlogDetailsBanner />
      <BlogDetailSection />
      <TagSection />
      <DigitalFuture status={true} />
    </div>
  );
};

export default BlogDetails;

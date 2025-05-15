import React from "react";
import BlogDetails from "@/components/UI/Blog/BlogDetails/BlogDetails";

const page = async ({ params }) => {
  const id = await params;
  return (
    <>
      <BlogDetails id={id} />
    </>
  );
};

export default page;

"use client"
import DetailBlogCard from "@/app/components/detailblogcard";
import { useParams } from "next/navigation";
import blogData from '../../../data/data.json'

export default function BlogDetailPage(){  
  const { id } = useParams(); // Get blog ID from URL

  // Find the specific blog post from JSON
  const blogPost = blogData.find((blog) => blog.id === id);

  // If the blog is not found, show a message
  if (!blogPost) {
    return <h1 className="text-red-500">Blog post not found!</h1>;
  }

  return (
    <DetailBlogCard
      topic={blogPost.topic}
      author={blogPost.author}
      date={blogPost.date}
      img={blogPost.img}
      summary={blogPost.summary}
    />
  );
  return  
 
}

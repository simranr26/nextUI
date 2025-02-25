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
   <div 
   >
     <h1 className = "text-3xl font-bold mx-4">{blogPost.topic}</h1>
     <p className = "text-gray-500 mx-4"> {blogPost.author} - {blogPost.date}</p>
     <img src = {blogPost.img} className = "w-2/3 h-64 object-cover mt-4 mx-4 rounded-lg shadow-lg "/>
     <p className = "mt-4 mx-4  text-gray-600">{blogPost.summary}</p>
   </div>
  );
 
}

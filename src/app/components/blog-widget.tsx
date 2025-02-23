import Link from "next/link";
import blogData from "../../data/data.json";

export default function BlogWidget(){
  return (
<div className = "container mx-auto px-4 sm:px-6 lg:px-8">
    <div  className = "grid grid-cols-1 mr-4 sm:grid-cols-2 md:grid-col-3 gap-6 mt-4">
   {blogData.map((blog) =>
  ( 
     <div className="max-w-sm sm:max-w-md md:max-w-lg bg-white rounded-lg shadow-lg overflow-hidden mt-4 ml-4 p-4">
   <img src ={blog.img}
   alt="Blog Image"
   className="w-full h-48 object-cover"
   />
   <div className="mr-4">
   <Link key =  {blog.id}  href={`/blog-detail-page/${blog.id}`}><h1 className= "text-black text-sm font-bold"> {blog.topic}</h1></Link>
   <p className = "text-gray-400 mt-2 mr-10"> Summary of the blog</p>
    </div>
    <div className= "flex justify-between items-center mt-4 text-gray-500-sm ">
      <span className = "font-semibold"> {blog.author}</span>
      <span> {blog.date}</span>
    </div>
    
    </div>
    ))}
    </div>
    </div>
  );
}
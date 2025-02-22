interface BlogProps{
  topic?: string;
  author?: string;
  date?: string;
  img?: string;
  summary?: string;

}



export default function DetailBlogCard({topic, author, date, img, summary}: BlogProps){
return (
  <div className = "mx-auto max-w-4xl p-6 bg-white rounded-lg shadow-lg mt-10">
    <img src = {img} alt = {topic} className = " text-gray-500 w-full h-80 object-cover rounded-md" />
    <h1 className ="text-4xl font-bold text-black mt-6">{topic}</h1>
    <p className = "text-gray-500 text-sm mt-2">{author} | {date}</p>
    <p className = "text-gray-500 text-sm mt-2">{summary}</p>
  </div>
);
}
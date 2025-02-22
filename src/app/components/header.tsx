interface HeaderProps{
  title: string;
}

export default function Header({ title }: HeaderProps){
  return(
   <header className="bg-blue-200">
     <div className= "xl:container xl:mx-auto flex items-center justify-center h-20 px-4 sm:px-6 lg:px-8">
       <h1 className= "text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-gray-800 text-center">{title}
       </h1>
         </div>
   </header>
  );
}
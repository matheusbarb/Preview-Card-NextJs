import Image from "next/image";
import '@fontsource/figtree'

export default function Home() {
  return (
    <div className="flex justify-center items-center h-screen font-figtree m-3 ml-6 ">
      <div className="flex flex-col justify-center  items-center bg-white w-[384px] h-[522px] rounded-[30px] hover:-translate-x-1  hover:-translate-y-1 hover:scale-105  transition-all border-r-8 border-b-8 border-black hover:border-b-[15px] hover:border-r-[15px]">
        <div className="flex flex-col items-start w-full px-6">
          <Image
            className="  rounded-xl"
            src="/images/illustration-article.svg"
            alt="Ilustration Article"
            width={336}
            height={200}
          />
          <button className="mt-4 bg-[#F4D04E]  text-black font-extrabold py-1 px-4 rounded mb-4 text-sm">
            Learning
          </button>
          <p className="text-[16px] font-[500px] mb-4 text">Published 21 Dec 2023</p>
          <h1 className="text-2xl font-extrabold mb-4 hover:cursor-pointer hover:text-[#F4D04E]">
            HTML & CSS foundations
          </h1>
          <p className=" text-[16px] font-[500px] text-gray-500 mb-4">
            These languages are the backbone of every website, defining
            structure, content, and presentation.
          </p>
          <div className="flex items-center mt-2">
            <Image
              className="mr-2"
              src="/images/image-avatar.webp"
              alt="Avatar"
              width={32}
              height={32}
              
            />
            <p className="text-sm font-bold">Greg Hooper</p>
          </div>
        </div>
      </div>
    </div>
  );
}

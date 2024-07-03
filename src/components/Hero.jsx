import React from "react";
import Button from "./Button"

const Hero = () => {
  return (
    <div className="min-h-screen flex flex-col gap-10 items-center justify-center text-center max-w-[800px] w-full mx-auto p-4">
      <div className="flex flex-col gap-4">
      <p>IT'S TIME TO GET</p>
      <h1 className="uppercase font-semibold text-4xl sm:text-5xl md:text-6xl lg:text-7xl">
        GYM <span className="text-blue-400">FIT</span>
      </h1>
      </div>
      <p className="text-sm md:text-base font-light ">
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Sapiente
        officiis placeat molestias deleniti eaque necessitatibus repellat natus,
        consequatur incidunt veniam quo voluptatem, iusto laboriosam cumque unde
        et reprehenderit nostrum nulla.
      </p>
      <Button text={"Accept & Begin"} func={()=>{
        window.location.href = "#generate"
      }}/>
    </div>
  );
};

export default Hero;

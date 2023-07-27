import React from "react";
import Head from "./Head";
function App() {
  return (
    <div className=" flex  justify-center items-center mt-5">
      <div className=" md:w-[40%]  text-white rounded-lg  p-7  bg-slate-800 gap-6">
        <h1 className=" text-center font-bold mb-6 text-4xl">Todo App</h1>
        <Head />
      </div>
    </div>
  );
}

export default App;

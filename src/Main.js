import React from "react";
import CallContainer from "./CallUI/CallContainer";
import TaskQueue from "./TaskQueue";

const Main = () => {
  return (
    <main className="flex justify-center  bg-white h-5/6 m-4 rounded-3xl drop-shadow-2xl">
      <TaskQueue />
      <CallContainer />
    </main>
  );
};

export default Main;

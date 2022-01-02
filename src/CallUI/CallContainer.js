import React from "react";
import CallControl from "./CallControl";
import CallInfo from "./CallInfo";

const CallContainer = () => {
  return (
    <div className="flex grow bg-gray-50 rounded-3xl m-5 drop-shadow-md p-4">
      <div className="flex flex-col justify-center m-auto grow bg-white rounded-3xl mx-16 mt-3 drop-shadow-md h-4/5 p-2">
        <CallInfo />
        <CallControl />
      </div>
    </div>
  );
};

export default CallContainer;

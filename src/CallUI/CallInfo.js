import { UserIcon } from "@heroicons/react/outline";
import React from "react";
import { PauseIcon } from "@heroicons/react/solid";
const CallInfo = () => {
  return (
    <div className="flex grow bg-gray-50 m-12 mt-8 h-4/6 rounded-2xl shadow-inner">
      <div className="flex items-center justify-center m-auto">
        <div className="flex flex-col bg-blue-100 h-24 w-24 m-2 justify-center items-center rounded-xl border border-gray-300">
          <UserIcon className="h-10 text-gray-500" />
          <PauseIcon className="h-8 text-blue-400 mt-1" />
        </div>
      </div>
    </div>
  );
};

export default CallInfo;

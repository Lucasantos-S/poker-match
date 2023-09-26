import React from "react";

export default function LoadingButton() {
  return (
    <div className="w-full h-full flex items-center justify-center gap-2">
      <span className="w-2 h-2 bg-gray-50 rounded-full animate-[loadingButton_1s_ease-in-out_infinite]"></span>
      <span className="w-2 h-2 bg-gray-50 rounded-full animate-[loadingButton_1s_ease-in-out_0.2s_infinite]"></span>
      <span className="w-2 h-2 bg-gray-50 rounded-full animate-[loadingButton_1s_ease-in-out_0.4s_infinite]"></span> 
    </div>
  );
}

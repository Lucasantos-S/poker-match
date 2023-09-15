import React from "react";

export default function PokedexMetchList() {
  return (
    <main className="w-full bg-gray-0 dark:bg-gray-10 rounded-2xl pr-5 py-4 z-50 animate-modalOpenCenter">
      <aside className="flex items-center flex-col gap-4 overflow-y-auto overflow-x-hidden max-h-[calc(100vh-100px)] h-full scrollbar-thin scrollbar-track-gray-6 scrollbar-thumb-primary-dark scrollbar-thumb-rounded-lg px-10">
        <div className="w-full h-14 min-h-[56px] bg-primary rounded-2xl grid grid-cols-[20%,15%,1fr,15%repeat(2,1fr),90px] gap-4 items-center border-b-[1px] break-words px-10 hover:scale-105 cursor-pointer">
          <span>ok</span>
          <span>ok</span>
          <span>ok</span>
          <span>ok</span>
          <span>ok</span>
        </div>
      </aside>
    </main>
  );
}

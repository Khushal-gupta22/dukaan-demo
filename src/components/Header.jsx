import React from "react";

const Header = () => {
  return (
    <div className="w-full bg-white flex justify-between items-center border-b-[1px] px-8 py-3 border-[#D9D9D9]">
      <div className="flex items-center ">
        <h1 className="text-[#1A181E] font-medium text-xl pr-4">Payouts</h1>
        <img src="/misc/ques.svg" alt="ques" className="w-3.5 h-3.5" />
        <p className="text-xs ml-2 font-normal">How it works</p>
      </div>
      <div className="bg-[#F2F2F2] px-4 py-2.5 rounded-[6px] w-[25rem] text-[#808080] font-normal text-[0.9375rem] flex">
        <img
          src="/misc/searchIcon.svg"
          alt="search-icon"
          className="w-4.5 h-4.5"
        />
        <input
          type="text"
          className="ml-2 bg-transparent outline-none w-full"
          placeholder="Search features, tutorials, etc."
          style={{}}
        />
      </div>
      <div className="flex gap-3 items-end">
        <img src="/misc/menu1.svg" alt="menu-1" className="w-10 h-10" />
        <img src="/misc/menu2.svg" alt="menu-2" className="w-10 h-10" />
      </div>
    </div>
  );
};

export default Header;

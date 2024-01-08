import React from "react";

const Button = ({ text, icon, iconSize }) => {
  return (
    <div className="bg-white border-[1px] border-solid border-[#D9D9D9] px-3 flex items-center justify-center gap-2 h-[2.25rem] rounded-[4px]">
      {text && <p className="text-[#4D4D4D] text-base">{text}</p>}
      {icon && (
        <img src={icon} alt="icon" className={`w-${iconSize} h-${iconSize}`} />
      )}
    </div>
  );
};

export default Button;

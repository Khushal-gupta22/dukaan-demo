import React from "react";

const Card = ({ title, amount, orders, isChip, payoutDate }) => {
  return (
    <div
      className={`pb-0 ${
        isChip
          ? "bg-[#146EB4] text-white"
          : "bg-white text-[#1A181E] pb-4 xl:pb-0 h-auto md:h-[7.375rem]"
      } font-medium rounded-lg w-full shadow-md`}
      style={{
        boxShadow: !isChip && "0 2px 4px rgba(26, 100, 30, 0.04)",
      }}
    >
      <div className="p-3 md:p-5 pb-0">
        <div className="flex gap-2 items-center">
          <p className={`text-sm md:text-base ${!isChip && "text-[#4D4D4D]"}`}>
            {title}
          </p>
          <img
            src={isChip ? "/misc/whiteQues.svg" : "/misc/ques.svg"}
            alt="ques-mark"
            className="w-4 h-4"
          />
        </div>
        <div className="my-2 md:my-4 flex flex-wrap justify-between items-center">
          <p
            className={`text-xl md:text-[2rem] pb-3 md:pt-0 ${
              !isChip && "text-[#4D4D4D]"
            }`}
          >
            {amount}
          </p>
          {orders > 0 && (
            <div className="flex items-center gap-1 cursor-pointer">
              <p
                className={`underline text-sm md:text-base ${
                  !isChip && "text-[#146EB4]"
                }`}
              >
                {`${orders} orders`}
              </p>
              <img
                src={isChip ? "/misc/chevronRight.svg" : "/misc/rightArrow.svg"}
                alt=""
                className="w-5 h-5"
              />
            </div>
          )}
        </div>
      </div>
      {isChip && (
        <div className="rounded-lg pb-2 bg-[#0E4F82] py-1.5 px-5 flex justify-between text-xs md:text-sm text-[#F2F2F2]">
          <p className="font-normal ">Next payout date: </p>
          <p>{payoutDate}</p>
        </div>
      )}
    </div>
  );
};

export default Card;

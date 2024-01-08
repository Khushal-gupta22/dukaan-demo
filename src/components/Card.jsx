import React from "react";

const Card = ({ title, amount, orders, isChip, payoutDate }) => {
  return (
    <div
      className={`pb-0 ${
        isChip
          ? "bg-[#146EB4] text-white"
          : "bg-white text-[#1A181E] h-[7.375rem]"
      } font-medium  rounded-md w-full`}
      style={{
        boxShadow: !isChip && "0 2px 4px rgba(26, 100, 30, 0.04)",
      }}
    >
      <div className="p-5 pb-0">
        <div className="flex gap-2 items-center">
          <p className={`text-base ${!isChip && "text-[#4D4D4D]"}`}>{title}</p>
          {isChip ? (
            <img
              src="/misc/whiteQues.svg"
              alt="ques-mark"
              className="w-4 h-4"
            />
          ) : (
            <img src="/misc/ques.svg" alt="ques-mark" className="w-4 h-4" />
          )}
        </div>
        <div className="my-4 flex justify-between items-center">
          <p className={`text-[2rem] ${!isChip && "text-[#4D4D4D]"}`}>
            {amount}
          </p>
          {orders != 0 && (
            <div className="flex items-start gap-0 cursor-pointer">
              <p
                className={`underline text-base ${!isChip && "text-[#146EB4]"}`}
              >{`${orders} orders`}</p>
              {isChip ? (
                <img src="/misc/chevronRight.svg" alt="" className="w-6 h-6" />
              ) : (
                <img src="/misc/rightArrow.svg" alt="" className="w-6 h-6" />
              )}
            </div>
          )}
        </div>
      </div>
      {isChip && (
        <div className="rounded-lg bg-[#0E4F82] py-1.5 px-5 flex justify-between text-sm text-[#F2F2F2]">
          <p className="font-normal ">Next payout date: </p>
          <p className="">{payoutDate}</p>
        </div>
      )}
    </div>
  );
};

export default Card;

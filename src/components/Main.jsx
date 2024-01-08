import React from "react";
import Card from "./Card";
import Button from "./Button";

const Main = () => {
  const cardConfig = [
    {
      title: "Next Payout",
      amount: "₹2,123.23",
      orders: 23,
      isChip: true,
      payoutDate: "Today, 04:00pm",
    },
    {
      title: "Amount Pending",
      amount: "₹92,312.20",
      orders: 13,
      isChip: false,
    },
    {
      title: "Amount Processed",
      amount: "₹23,92,312.19",
      orders: 0,
      isChip: false,
    },
  ];

  return (
    <div className="">
      <div className="flex justify-between items-center">
        <h1 className="text-[#1A181E] font-medium text-xl pr-4 my-4">
          Overview
        </h1>
        <Button text={`This Month`} icon={`/misc/downArrow.svg`} />
      </div>

      <div className="mt-2 flex justify-between gap-8">
        {cardConfig.map((card, index) => (
          <Card {...card} key={index} />
        ))}
      </div>
      <div className="my-10">
        <h1 className="text-[#1A181E] font-medium text-xl pr-4 my-4 mb-6">
          Transactions | This Month
        </h1>
        <div className="flex gap-4 text-sm font-medium">
          <p className="text-[#808080] bg-[#E6E6E6] px-4 py-1.5 rounded-[2.5rem]">
            Payouts (22)
          </p>
          <p className="text-white bg-[#146EB4] px-4 py-1.5 rounded-[2.5rem]">
            Refunds (6)
          </p>
        </div>
      </div>
      <div
        className="bg-white rounded-lg p-3"
        style={{
          boxShadow: "0 2px 4px rgba(26, 100, 30, 0.04)",
        }}
      >
        <div className="flex items-center justify-between mb-4">
          <div className="bg-white px-4 py-2.5 rounded-[6px] w-[15rem] text-[#808080] font-normal text-[0.9375rem] flex border-[1px] border-[#D9D9D9]">
            <img
              src="/misc/searchIcon.svg"
              alt="search-icon"
              className="w-4.5 h-4.5"
            />
            <input
              type="text"
              className="ml-2 bg-transparent outline-none w-full"
              placeholder="Order Id or transaction Id"
              style={{}}
            />
          </div>
          <div className="flex items-start justify-end gap-4">
            <Button text={`Sort`} icon={`/misc/sortIcon.svg`} />
            <Button icon={`/misc/downloadIcon.svg`} iconSize={`5`} />
          </div>
        </div>
        <div className="flex bg-[#F2F2F2]  text-sm text-[#4D4D4D] py-2.5 px-3 rounded">
          <p className="w-1/5 font-semibold">Order Id</p>
          <p className="w-1/5 text-start font-semibold">Status</p>
          <p className="w-1/5 text-center font-semibold">Transaction ID</p>
          <p className="w-1/5 text-center font-semibold">Refund Date</p>
          <p className="w-1/5 text-end font-semibold">Order amount</p>
        </div>

        <div className="bg-white px-3.5 py-3 flex justify-between font-normal text-sm">
          <p className="w-1/5 font-medium text-[#146EB4]">#281209</p>
          <div className="w-1/5 flex items-center justify-start gap-1">
            <span
              style={{
                backgroundColor: "#17B31B",
                width: "0.625rem",
                height: "0.625rem",
                borderRadius: "50%",
              }}
            ></span>
            <p>Successful</p>
          </div>
          <p className="w-1/5 text-center">131634495747</p>
          <p className="w-1/5 text-center">Today, 08:45 PM</p>
          <p className="w-1/5 text-end">₹1,125.00</p>
        </div>
        <div className="h-[0.5px] bg-[#D9D9D9] mx-4"></div>
        <div className="bg-white px-3.5 py-3 flex justify-between font-normal text-sm">
          <p className="w-1/5 font-medium text-[#146EB4]">#281209</p>
          <div className="w-1/5 flex items-center justify-start gap-1">
            <span
              style={{
                backgroundColor: "#17B31B",
                width: "0.625rem",
                height: "0.625rem",
                borderRadius: "50%",
              }}
            ></span>
            <p>Successful</p>
          </div>
          <p className="w-1/5 text-center">131634495747</p>
          <p className="w-1/5 text-center">Today, 08:45 PM</p>
          <p className="w-1/5 text-end">₹1,125.00</p>
        </div>
        <div className="h-[1px] bg-[#D9D9D9] mx-4"></div>
        <div className="bg-white px-3.5 py-3 flex justify-between font-normal text-sm">
          <p className="w-1/5 font-medium text-[#146EB4]">#281209</p>
          <div className="w-1/5 flex items-center justify-start gap-1">
            <span
              style={{
                backgroundColor: "#17B31B",
                width: "0.625rem",
                height: "0.625rem",
                borderRadius: "50%",
              }}
            ></span>
            <p>Successful</p>
          </div>
          <p className="w-1/5 text-center">131634495747</p>
          <p className="w-1/5 text-center">Today, 08:45 PM</p>
          <p className="w-1/5 text-end">₹1,125.00</p>
        </div>
        <div className="h-[1px] bg-[#D9D9D9] mx-4"></div>
        <div className="bg-white px-3.5 py-3 flex justify-between font-normal text-sm">
          <p className="w-1/5 font-medium text-[#146EB4]">#281209</p>
          <div className="w-1/5 flex items-center justify-start gap-1">
            <span
              style={{
                backgroundColor: "#17B31B",
                width: "0.625rem",
                height: "0.625rem",
                borderRadius: "50%",
              }}
            ></span>
            <p>Successful</p>
          </div>
          <p className="w-1/5 text-center">131634495747</p>
          <p className="w-1/5 text-center">Today, 08:45 PM</p>
          <p className="w-1/5 text-end">₹1,125.00</p>
        </div>
        {/* <div className="h-[1px] bg-[#D9D9D9] mx-4"></div> */}
      </div>
    </div>
  );
};

export default Main;

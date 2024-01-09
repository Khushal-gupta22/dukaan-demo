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
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center my-4">
          <h1 className="text-lg md:text-xl lg:text-2xl font-medium text-[#1A181E]">
            Overview
          </h1>
          <Button text="This Month" icon="/misc/downArrow.svg" />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mb-8">
          {cardConfig.map((card, index) => (
            <Card {...card} key={index} />
          ))}
        </div>
      </div>
      <div className="my-10">
        <h1 className="text-[#1A181E] font-medium text-xl pr-4 my-4 mb-6">
          Transactions | This Month
        </h1>
        <div className="flex flex-wrap gap-4 text-sm font-medium">
          <p className="text-[#808080] bg-[#E6E6E6] px-4 py-1.5 rounded-[2.5rem]">
            Payouts (22)
          </p>
          <p className="text-white bg-[#146EB4] px-4 py-1.5 rounded-[2.5rem]">
            Refunds (6)
          </p>
        </div>
      </div>
      <div
        className="bg-white rounded-lg p-3 shadow"
        style={{ boxShadow: "0 2px 4px rgba(26, 100, 30, 0.04)" }}
      >
        <div className="overflow-x-scroll">
          <div className="flex flex-wrap bg-[#F2F2F2] text-sm text-[#4D4D4D] py-2.5 px-3 rounded">
            <p className="min-w-[20%] font-semibold">Order Id</p>
            <p className="min-w-[20%] text-start font-semibold">Status</p>
            <p className="min-w-[20%] text-center font-semibold">
              Transaction ID
            </p>
            <p className="min-w-[20%] text-center font-semibold">Refund Date</p>
            <p className="min-w-[20%] text-end font-semibold">Order amount</p>
          </div>

          {Array.from({ length: 10 }).map((_, index) => (
            <div className="">
              <div
                key={index}
                className="flex flex-wrap justify-between font-normal text-sm bg-white px-3.5 py-3"
              >
                <p className="min-w-[20%] font-medium text-[#146EB4]">
                  #281209
                </p>
                <div className="min-w-[20%] flex items-center justify-start gap-1">
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
                <p className="min-w-[20%] text-center">131634495747</p>
                <p className="min-w-[20%] text-center">Today, 08:45 PM</p>
                <p className="min-w-[20%] text-end">₹1,125.00</p>
              </div>
              {index != 9 && <div className="h-[1px] bg-[#D9D9D9] mx-4"></div>}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Main;

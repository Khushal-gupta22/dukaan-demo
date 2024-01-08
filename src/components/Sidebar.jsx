import React from "react";

const Sidebar = () => {
  const sideBar = [
    {
      name: "Home",
      icon: "/sidebarIcons/home.svg",
    },
    {
      name: "Orders",
      icon: "/sidebarIcons/orders.svg",
    },
    {
      name: "Products",
      icon: "/sidebarIcons/products.svg",
    },
    {
      name: "Delivery",
      icon: "/sidebarIcons/delivery.svg",
    },
    {
      name: "Marketing",
      icon: "/sidebarIcons/marketing.svg",
    },
    {
      name: "Analytics",
      icon: "/sidebarIcons/analytics.svg",
    },
    {
      name: "Payouts",
      icon: "/sidebarIcons/payouts.svg",
    },
    {
      name: "Discounts",
      icon: "/sidebarIcons/discounts.svg",
    },
    {
      name: "Audience",
      icon: "/sidebarIcons/audience.svg",
    },
    {
      name: "Appearance",
      icon: "/sidebarIcons/appearance.svg",
    },
    {
      name: "Plugins",
      icon: "/sidebarIcons/plugins.svg",
    },
  ];

  return (
    <div className="bg-[#1e2640] py-4 px-2.5 w-full h-full">
      <div className="flex items-center justify-between pb-8">
        <div className="flex items-start justify-start">
          <img
            src="/sidebarIcons/Image.png"
            alt="brand-logo"
            className="w-[2.75rem] h-[2.75rem] rounded-[4px] object-cover"
          />
          <div className="flex flex-col text-white font-medium text-[0.9375rem] ml-2 ">
            <p>Nishyan</p>
            <p className="underline cursor-pointer text-sm">Visit store</p>
          </div>
        </div>
        <img src="/misc/chevronDown.svg" alt="chev-down" className="w-5 h-5" />
      </div>
      <div className="pl-2 h-[82%]">
        {sideBar.map((item, index) => (
          <div className="flex items-center py-2" key={index}>
            <img src={item.icon} alt={item.name} className="w-5 h-5" />
            <p className="text-white text-sm font-medium ml-3">{item.name}</p>
          </div>
        ))}
      </div>
      <div className="rounded-[4px] bg-[#353c53] py-1.5 px-3 mr-2">
        <div className="flex items-center text-white">
          <div className="bg-gray-600 p-2 rounded-[4px]">
            <img
              src="/sidebarIcons/wallet.svg"
              alt="wallet"
              className="w-6 h-6"
            />
          </div>
          <div className="ml-3 flex flex-col items-start">
            <p className="font-normal text-[0.9375rem]">Available credits</p>
            <p className="font-medium text-base">222.10</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Sidebar;

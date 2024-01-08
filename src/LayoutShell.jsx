import React from "react";
import Sidebar from "./components/Sidebar";

const LayoutShell = ({ children }) => {
  const isDesktop = window.innerWidth > 768;

  return (
    <>
      {isDesktop ? (
        <div className="flex w-full overflow-x-hidden">
          <div
            className="h-screen overflow-y-auto sidebar-scrollbar"
            style={{ width: "14rem" }}
          >
            <Sidebar />
          </div>
          <div
            className="h-screen overflow-y-auto"
            style={{
              width: "calc(100vw - 14rem)",
            }}
          >
            {children}
          </div>
        </div>
      ) : (
        <div>{children}</div>
      )}
    </>
  );
};

export default LayoutShell;

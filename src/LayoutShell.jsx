import React, { useCallback, useEffect, useMemo, useState } from "react";
import Sidebar from "./components/Sidebar";
const hamburgerIcon = "/misc/burgermenu.svg";

const LayoutShell = ({ children }) => {
  const [isDesktop, setIsDesktop] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth < 768);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  // check for the width of the screen , if it is less than have to set the isDesktop to false and not render the sidebar component then

  const useMediaQuery = (query) => {
    const mql = useMemo(() => window.matchMedia(query));

    const [match, setMatch] = useState(mql.matches);

    useEffect(() => {
      const handler = (e) => setMatch(e.matches);
      mql.addListener(handler);

      return () => {
        mql.removeListener(handler);
      };
    }, [mql]);

    return match;
  };

  const close = useMediaQuery("(max-width: 768px)");

  const handleResize = useCallback(() => {
    if (window.innerWidth < 768) {
      setIsMobile(true);
      setIsSidebarOpen(false); // Close sidebar when switching to mobile view
    } else {
      setIsMobile(false);
    }
  }, []);

  useEffect(() => {
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [handleResize]);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  };

  return (
    <>
      {!close ? (
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
        <>
          <div>{children}</div>
        </>
      )}
    </>
  );
};

export default LayoutShell;

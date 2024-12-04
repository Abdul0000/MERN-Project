import { useState } from "react";
import { TfiAlignJustify } from "react-icons/tfi";
const SideBar = () => {
  const [isCollapsed, setIsCollapsed] = useState(false);

  const toggleSidebar = () => {
    setIsCollapsed(!isCollapsed);
  };

  return (
    <div className={`side-bar ${isCollapsed ? "collapsed" : ""}`}>
      <div onClick={toggleSidebar} className="icon-container">
        <TfiAlignJustify />
      </div>
      {!isCollapsed && (
        <div className="menu-content">
          {/* Add menu items here */}
          <ul>
            <li>Home</li>
            <li>Sign Up</li>
            <li>Contact</li>
          </ul>
        </div>
      )}
    </div>
  );
};

export default SideBar;

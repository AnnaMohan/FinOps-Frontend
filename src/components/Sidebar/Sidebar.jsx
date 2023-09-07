/* eslint-disable react/prop-types */
import "./sidebar.css";
import { SIDEBAR_ITEMS } from "../../constants/common";
const Sidebar = ({ activeTab, handleActiveTab }) => {
  return (
    <div className="d-flex flex-column flex-shrink-0 p-3 w-25 border-end sidebar-vh-85">
      <ul className="nav nav-pills flex-column mb-auto">
        {SIDEBAR_ITEMS.map((item) => (
          <li
            key={item}
            className={`sidebar-item ${
              item === activeTab ? "sidebar-active" : ""
            }`}
            onClick={() => {
              handleActiveTab(item);
            }}
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Sidebar;

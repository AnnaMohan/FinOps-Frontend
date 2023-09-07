/* eslint-disable react/prop-types */
import { FILTERS } from "../../constants/common";
import { usePolicies } from "../../context/PoliciesContext";
import "./filters.css";

const Filters = () => {
  const { selectedFilter, updateFilter } = usePolicies();
  return (
    <ul className="nav nav-pills ps-3 pe-3">
      {FILTERS.map((item) => (
        <li
          key={item}
          className={`filters-item ${
            item === selectedFilter ? "filters-active" : ""
          }`}
          onClick={() => {
            updateFilter(item);
          }}
        >
          {item}
        </li>
      ))}
    </ul>
  );
};

export default Filters;

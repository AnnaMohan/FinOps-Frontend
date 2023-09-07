/* eslint-disable react/prop-types */
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import { Link } from "react-router-dom";
import { usePolicies } from "../../context/PoliciesContext";
import { useEffect } from "react";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartData = {
  datasets: [
    {
      data: [15, 5],
      backgroundColor: ["green", "red"],
      borderColor: ["green", "red"],
      borderWidth: 1,
    },
  ],
};

const PoliciesContent = () => {
  const { getPolicyCards, policyCards } = usePolicies();
  useEffect(() => {
    getPolicyCards();
  }, []);
  return (
    <div className="w-75 ps-3">
      <div className="d-flex p-3 flex-wrap justify-center">
        {policyCards.map((item) => {
          const newData = {
            ...chartData,
            datasets: [
              {
                ...chartData.datasets[0],
                data: [item.compliant_policies, item.non_compliant_policies],
              },
            ],
          };
          const compliantPercentage = Math.floor(
            (item.compliant_policies / item.total_policies) * 100
          );
          const nonCompliantPercentage = Math.floor(
            (item.non_compliant_policies / item.total_policies) * 100
          );
          let pageUrl = () => {
            if (item.label.toLowerCase() === "costoptimization") {
              return "/cost-optimization";
            }
            if (item.label.toLowerCase() === "security") {
              return "/security";
            }
            if (item.label.toLowerCase() === "reliability") {
              return "/reliability";
            }
            if (item.label.toLowerCase() === "performanceefficiency") {
              return "/performance-efficiency";
            }
            if (item.label.toLowerCase() === "operationalefficiency") {
              return "/operational-efficiency";
            }
            return "/";
          };
          let getLabel = () => {
            if (item.label.toLowerCase() === "costoptimization") {
              return "Cost Optimization";
            }
            if (item.label.toLowerCase() === "security") {
              return "Security";
            }
            if (item.label.toLowerCase() === "reliability") {
              return "Reliability";
            }
            if (item.label.toLowerCase() === "performanceefficiency") {
              return "Performance Efficiency";
            }
            if (item.label.toLowerCase() === "operationalefficiency") {
              return "Operational Efficiency";
            }
          };
          return (
            <div key={item.label} className="card me-5 mb-5">
              <div className="card-body">
                <Link to={pageUrl()} className="color-black">
                  <h5 className="card-title fw-bolder">{getLabel()}</h5>
                </Link>
                <div className="d-flex pt-3 justify-content-between">
                  <div className="d-flex flex-column">
                    <h6>Total available policies</h6>
                    <p className="fw-bolder">{item.total_policies}</p>
                  </div>
                  <div className="d-flex flex-column">
                    <h6>Deployed Policies</h6>
                    <p className="fw-bolder">{item.deployed_policies}</p>
                  </div>
                </div>
                <p className="pt-3">Compliance Status</p>
                <div>
                  <Doughnut data={newData} />
                </div>
                <div className="d-flex justify-content-around pt-3">
                  <div className="d-flex flex-column">
                    <div className="dot-green">Compliant</div>
                    <p className="pt-3">
                      <span className="color-green fw-bold">
                        {item.compliant_policies}
                      </span>{" "}
                      <span className="color-gray">
                        ({compliantPercentage}%)
                      </span>
                    </p>
                  </div>
                  <div className="d-flex flex-column">
                    <div className="dot-red">Non Compliant</div>
                    <p className="pt-3">
                      <span className="color-red fw-bold">
                        {item.non_compliant_policies}
                      </span>{" "}
                      <span className="color-gray">
                        ({nonCompliantPercentage}%)
                      </span>
                    </p>
                  </div>
                </div>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default PoliciesContent;

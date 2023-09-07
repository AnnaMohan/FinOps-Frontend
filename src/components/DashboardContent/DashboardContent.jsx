import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
import "./dashboardContent.css";

ChartJS.register(ArcElement, Tooltip, Legend);

const chartOptions = {
  plugins: {
    legend: {
      position: "bottom",
      labels: {
        usePointStyle: true,
      },
    },
  },
};

const data = {
  labels: ["Compliant", "Non-Compliant"],
  datasets: [
    {
      label: "Compliance Status",
      data: [15, 5],
      backgroundColor: ["green", "red"],
      borderColor: ["green", "red"],
      borderWidth: 1,
      position: "bottom",
    },
  ],
};
const DashboardContent = () => {
  return (
    <div className="w-75 p-3">
      <div className="d-flex p-3">
        <div className="card card-width">
          <div className="card-body">
            <p className="card-title">Total no of available policies</p>

            <h6 className="card-text">1390</h6>
          </div>
        </div>
        <div className="card card-width">
          <div className="card-body">
            <p className="card-title">Deployed policies</p>

            <h6 className="card-text">100</h6>
          </div>
        </div>
      </div>
      <div className="d-flex p-3">
        <div className="card">
          <div className="card-body">
            <h5 className="card-title">Compliance Status</h5>
            <h6 className="card-subtitle mb-2 text-body-secondary">Policies</h6>
            <Doughnut data={data} options={chartOptions} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DashboardContent;

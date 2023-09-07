import { useState } from "react";
import Header from "../components/Header";
import Sidebar from "../components/Sidebar";
import DashboardContent from "../components/DashboardContent";
import ReliabilityContent from "../components/ReliabilityContent";
import UsersContent from "../components/UsersContent";
import PoliciesContent from "../components/PoliciesContent";
import OrganisationContent from "../components/OrganisationContent";
import ResourcesContent from "../components/ResourcesContent";

const Dashboard = () => {
  const [activeTab, setActiveTab] = useState("Policies");
  const handleActiveTab = (tabName) => {
    console.log(tabName);
    setActiveTab(tabName);
  };

  const renderContent = () => {
    switch (activeTab) {
      case "Dashboard":
        return <DashboardContent />;
      case "Reliability":
        return <ReliabilityContent />;
      case "Users":
        return <UsersContent />;
      case "Policies":
        return <PoliciesContent />;
      case "Organisation":
        return <OrganisationContent />;
      case "Resources":
        return <ResourcesContent />;
      default:
        return <DashboardContent />;
    }
  };

  return (
    <>
      <Header />
      <main className="d-flex">
        <Sidebar activeTab={activeTab} handleActiveTab={handleActiveTab} />
        {renderContent()}
      </main>
    </>
  );
};

export default Dashboard;

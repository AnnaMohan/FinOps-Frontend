import Filters from "../components/Filters";
import Header from "../components/Header";
import PolicyList from "../components/PolicyList";

const CostOptimization = () => {
  return (
    <>
      <Header />
      <main>
        <h1 className="display-7 ps-3 pe-3 pt-3">Cost Optimization</h1>
        <Filters />
        <PolicyList />
      </main>
    </>
  );
};

export default CostOptimization;

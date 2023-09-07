/* eslint-disable react/prop-types */
import { createContext, useContext, useEffect, useState } from "react";
import axios from "axios";

const PoliciesContext = createContext();

const PoliciesProvider = ({ children }) => {
  const [selectedFilter, setSelectedFilter] = useState("AWS");
  const [policies, setPolicies] = useState([]);
  const [securities, setSecurities] = useState([]);
  const [policyDetails, setPolicyDetails] = useState(null);
  const [securityDetails, setSecurityDetails] = useState(null);
  const [updateSecurityMsg, setupdateSecurityMsg] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [isFullScreenLoader, setIsFullScreenLoader] = useState(false);
  const [isDeployLoader, setIsDeployLoader] = useState(false);
  const [updateMsg, setUpdateMsg] = useState("");
  const [deployMsg, setDeployMsg] = useState("");
  const [deploySecurityMsg, setDeploySecurityMsg] = useState("");
  const [policyCards, setPolicyCards] = useState([]);
  const [reliability, setReliability] = useState([]);
  const [reliabilityDetails, setReliabilityDetails] = useState(null);
  const [updateReliabilityMsg, setupdateReliabilityMsg] = useState(null);
  const [deployReliabilityMsg, setDeployReliabilityMsg] = useState("");
  const [performance, setPerformance] = useState([]);
  const [performanceDetails, setPerformanceDetails] = useState(null);
  const [updatePerformanceMsg, setupdatePerformanceMsg] = useState(null);
  const [deployPerformanceMsg, setdeployPerformanceMsg] = useState("");
  const [operational, setOperational] = useState([]);
  const [operationalDetails, setOperationalDetails] = useState(null);
  const [updateOperationalMsg, setupdateOperationalMsg] = useState(null);
  const [deployOperationalMsg, setdeployOperationalMsg] = useState("");







  

  

  const updateFilter = (filterValue) => {
    setSelectedFilter(filterValue);
  };

  const clearDetails = () => {
    setPolicyDetails(null);
    setDeployMsg("");
    setUpdateMsg("");
    setupdateSecurityMsg("");
    setDeploySecurityMsg("");
    setupdateReliabilityMsg("");
    setDeployReliabilityMsg("")

  };


const getPolicyCards = async () => {
  const url = "http://34.228.43.137:5004/api/categories";
  try {
    const response = await axios.get(url);
    setPolicyCards(response?.data);
    setIsLoading(false);
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};
// Newly Added start

  const getSecurityPolicyList = async () => {
    setIsLoading(true);
    const url = "http://34.228.43.137:5000/policyDetails/Security";
    try {
      const response = await axios.get(url);
      setSecurities(response?.data?.policy_files);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getOnePolicy = async (policyId) => {
    setIsFullScreenLoader(true);

    const url = `http://34.228.43.137:5001/policyDetails/Security/${policyId}`;
    try {
      const response = await axios.get(url);
      setSecurityDetails(response?.data);
      setIsFullScreenLoader(false);
    } catch (error) {
      console.log(error);
      setIsFullScreenLoader(false);
    }
  };

  const updatePolicyFile = async (
    policyId,
    email,
    scheduleType,
    units,
    unitValue
  ) => {
    setIsFullScreenLoader(true);
    const url = `http://34.228.43.137:5002/policyDetails/Security/${policyId}`;
    try {
      const response = await axios.post(
        url,
        {
          policy_id: policyId,
          schedule: {
            schedule_type: scheduleType,
            schedule_value: {
              // minutes: unitValue,
              unit: units,
              rate: unitValue,
              // value: unitValue,
            },
          },
          notificationDetails: {
            Emails: email,
            notificationType: "sqs",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setupdateSecurityMsg(response?.data?.message);
      setIsFullScreenLoader(false);
      getSecurityPolicyList();
    } catch (error) {
      console.log(error);
      setIsFullScreenLoader(false);
    }
  };

  const deployPolicyFile = async (policyId) => {
    setIsDeployLoader(true);
    const url = `http://34.228.43.137:5003/policyDetails/Deploy/${policyId}`;
    try {
      const response = await axios.post(url, {}, { timeout: 180000 });
      setIsFullScreenLoader(false);
      setDeploySecurityMsg(response.data.result);
      getSecurityPolicyList();
    } catch (error) {
      console.log(error);
      setIsDeployLoader(false);
    }
  };

  // Operational Start

  const getOperationalPolicyList = async () => {
    setIsLoading(true);
    const url = "http://34.228.43.137:5000/policyDetails/OperationalEfficiency";
    try {
      const response = await axios.get(url);
      setOperational(response?.data?.policy_files);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  
  const getOperationalOnePolicy = async (policyId) => {
    setIsFullScreenLoader(true);
  
    const url = `http://34.228.43.137:5001/policyDetails/OperationalEfficiency/${policyId}`;
    try {
      const response = await axios.get(url);
      setOperationalDetails(response?.data);
      setIsFullScreenLoader(false);
    } catch (error) {
      console.log(error);
      setIsFullScreenLoader(false);
    }
  };
  
  const updateOperationalPolicyFile = async (
    policyId,
    email,
    scheduleType,
    units,
    unitValue
  ) => {
    setIsFullScreenLoader(true);
    const url = `http://34.228.43.137:5002/policyDetails/OperationalEfficiency/${policyId}`;
    try {
      const response = await axios.post(
        url,
        {
          policy_id: policyId,
          schedule: {
            schedule_type: scheduleType,
            schedule_value: {
              // minutes: unitValue,
              unit: units,
              rate: unitValue,
              // value: unitValue,
            },
          },
          notificationDetails: {
            Emails: email,
            notificationType: "sqs",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setupdateOperationalMsg(response?.data?.message);
      setIsFullScreenLoader(false);
      getOperationalPolicyList();
    } catch (error) {
      console.log(error);
      setIsFullScreenLoader(false);
    }
  };
  
  const deployOperationalPolicyFile = async (policyId) => {
    setIsDeployLoader(true);
    const url = `http://34.228.43.137:5003/policyDetails/Deploy/${policyId}`;
    try {
      const response = await axios.post(url, {}, { timeout: 180000 });
      setIsFullScreenLoader(false);
      setdeployOperationalMsg(response.data.result);
      getOperationalPolicyList();
    } catch (error) {
      console.log(error);
      setIsDeployLoader(false);
    }
  };
  
  //Operational End

  // PerformanceEfficiency Start
  const getPerformancePolicyList = async () => {
    setIsLoading(true);
    const url = "http://34.228.43.137:5000/policyDetails/PerformanceEfficiency";
    try {
      const response = await axios.get(url);
      setPerformance(response?.data?.policy_files);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };
  
  const getPerformanceOnePolicy = async (policyId) => {
    setIsFullScreenLoader(true);
  
    const url = `http://34.228.43.137:5001/policyDetails/PerformanceEfficiency/${policyId}`;
    try {
      const response = await axios.get(url);
      setPerformanceDetails(response?.data);
      setIsFullScreenLoader(false);
    } catch (error) {
      console.log(error);
      setIsFullScreenLoader(false);
    }
  };
  
  const updatePerformancePolicyFile = async (
    policyId,
    email,
    scheduleType,
    units,
    unitValue
  ) => {
    setIsFullScreenLoader(true);
    const url = `http://34.228.43.137:5002/policyDetails/PerformanceEfficiency/${policyId}`;
    try {
      const response = await axios.post(
        url,
        {
          policy_id: policyId,
          schedule: {
            schedule_type: scheduleType,
            schedule_value: {
              // minutes: unitValue,
              unit: units,
              rate: unitValue,
              // value: unitValue,
            },
          },
          notificationDetails: {
            Emails: email,
            notificationType: "sqs",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setupdatePerformanceMsg(response?.data?.message);
      setIsFullScreenLoader(false);
      getPerformancePolicyList();
    } catch (error) {
      console.log(error);
      setIsFullScreenLoader(false);
    }
  };
  
  const deployPerformancePolicyFile = async (policyId) => {
    setIsDeployLoader(true);
    const url = `http://34.228.43.137:5003/policyDetails/Deploy/${policyId}`;
    try {
      const response = await axios.post(url, {}, { timeout: 180000 });
      setIsFullScreenLoader(false);
      setdeployPerformanceMsg(response.data.result);
      getPerformancePolicyList();
    } catch (error) {
      console.log(error);
      setIsDeployLoader(false);
    }
  };
  
  //Performance End
  

//Reliability Start

const getReliabilityPolicyList = async () => {
  setIsLoading(true);
  const url = "http://34.228.43.137:5000/policyDetails/Reliability";
  try {
    const response = await axios.get(url);
    setReliability(response?.data?.policy_files);
    setIsLoading(false);
  } catch (error) {
    console.log(error);
    setIsLoading(false);
  }
};

const getReliabilityOnePolicy = async (policyId) => {
  setIsFullScreenLoader(true);

  const url = `http://34.228.43.137:5001/policyDetails/Reliability/${policyId}`;
  try {
    const response = await axios.get(url);
    setReliabilityDetails(response?.data);
    setIsFullScreenLoader(false);
  } catch (error) {
    console.log(error);
    setIsFullScreenLoader(false);
  }
};

const updateReliabilityPolicyFile = async (
  policyId,
  email,
  scheduleType,
  units,
  unitValue
) => {
  setIsFullScreenLoader(true);
  const url = `http://34.228.43.137:5002/policyDetails/Reliability/${policyId}`;
  try {
    const response = await axios.post(
      url,
      {
        policy_id: policyId,
        schedule: {
          schedule_type: scheduleType,
          schedule_value: {
            // minutes: unitValue,
            unit: units,
            rate: unitValue,
            // value: unitValue,
          },
        },
        notificationDetails: {
          Emails: email,
          notificationType: "sqs",
        },
      },
      {
        headers: {
          "Content-Type": "application/json",
        },
      }
    );
    setupdateReliabilityMsg(response?.data?.message);
    setIsFullScreenLoader(false);
    getReliabilityPolicyList();
  } catch (error) {
    console.log(error);
    setIsFullScreenLoader(false);
  }
};

const deployReliabilityPolicyFile = async (policyId) => {
  setIsDeployLoader(true);
  const url = `http://34.228.43.137:5003/policyDetails/Deploy/${policyId}`;
  try {
    const response = await axios.post(url, {}, { timeout: 180000 });
    setIsFullScreenLoader(false);
    setDeployReliabilityMsg(response.data.result);
    getReliabilityPolicyList();
  } catch (error) {
    console.log(error);
    setIsDeployLoader(false);
  }
};

//Reliability End



  const getPoliciesList = async () => {
    setIsLoading(true);
    const url = "http://34.228.43.137:5000/policyDetails/CostOptimization";
    try {
      const response = await axios.get(url);
      setPolicies(response?.data?.policy_files);
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const getSinglePolicy = async (policyId) => {
    setIsFullScreenLoader(true);

    const url = `http://34.228.43.137:5001/policyDetails/CostOptimization/${policyId}`;
    try {
      const response = await axios.get(url);
      setPolicyDetails(response?.data);
      setIsFullScreenLoader(false);
    } catch (error) {
      console.log(error);
      setIsFullScreenLoader(false);
    }
  };

  const updatePolicy = async (
    policyId,
    email,
    scheduleType,
    units,
    unitValue
  ) => {
    setIsFullScreenLoader(true);
    const url = `http://34.228.43.137:5002/policyDetails/CostOptimization/${policyId}`;
    try {
      const response = await axios.post(
        url,
        {
          policy_id: policyId,
          schedule: {
            schedule_type: scheduleType,
            schedule_value: {
              // minutes: unitValue,
              unit: units,
              rate: unitValue,
              // value: unitValue,
            },
          },
          notificationDetails: {
            Emails: email,
            notificationType: "sqs",
          },
        },
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      setUpdateMsg(response?.data?.message);
      setIsFullScreenLoader(false);
      getPoliciesList();
    } catch (error) {
      console.log(error);
      setIsFullScreenLoader(false);
    }
  };

  const deployPolicy = async (policyId) => {
    setIsDeployLoader(true);
    const url = `http://34.228.43.137:5003/policyDetails/Deploy/${policyId}`;
    try {
      const response = await axios.post(url, {}, { timeout: 180000 });
      setIsFullScreenLoader(false);
      setDeployMsg(response.data.result);
      getPoliciesList();
    } catch (error) {
      console.log(error);
      setIsDeployLoader(false);
    }
  };

  useEffect(() => {
    getPoliciesList();
  }, []);

  return (
    <PoliciesContext.Provider
      value={{
        selectedFilter,
        policies,
        getSinglePolicy,
        getPoliciesList,
        updatePolicy,
        deployPolicy,
        updateFilter,
        policyDetails,
        isLoading,
        isFullScreenLoader,
        updateMsg,
        deployMsg,
        deploySecurityMsg,
        clearDetails,
        isDeployLoader,
        getPolicyCards,
        policyCards,
        // Newly Added
        deployPolicyFile,
        getSecurityPolicyList,
        getOnePolicy,
        updatePolicyFile,
        securities,
        securityDetails,
        updateSecurityMsg,
        deployReliabilityMsg,
        updateReliabilityMsg,
        getReliabilityPolicyList,
        getReliabilityOnePolicy,
        updateReliabilityPolicyFile,
        deployReliabilityPolicyFile,
        reliability,
        reliabilityDetails,
        deployPerformancePolicyFile,
        updatePerformancePolicyFile,
        getPerformanceOnePolicy,
        getPerformancePolicyList,
        deployPerformanceMsg,
        updatePerformanceMsg,
        performance,
        performanceDetails,
        getOperationalPolicyList,
        getOperationalOnePolicy,
        updateOperationalPolicyFile,
        deployOperationalPolicyFile,
        operational,
        operationalDetails,
        updateOperationalMsg,
        deployOperationalMsg,
      }}
    >
      {children}
    </PoliciesContext.Provider>
  );
};

const usePolicies = () => {
  const context = useContext(PoliciesContext);
  return context;
};

export { PoliciesProvider, usePolicies };

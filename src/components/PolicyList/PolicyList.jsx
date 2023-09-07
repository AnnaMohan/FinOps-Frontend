// /* eslint-disable react/prop-types */
// import Table from "react-bootstrap/Table";
// import { POLICY_LIST_COLUMNS } from "../../constants/common";
// import UpdateModal from "../UpdateModal/UpdateModal";
// import { useState } from "react";
// import FullScreenLoader from "../FullScreenLoader/FullScreenLoader";
// import Loader from "../Loader/Loader";
// import { usePolicies } from "../../context/PoliciesContext";

// const formattedDate = (date) => {
//   const newDate = new Date(date);
//   return newDate.toLocaleDateString("en-US", {
//     year: "numeric",
//     month: "2-digit",
//     day: "2-digit",
//     hour: "2-digit",
//     minute: "2-digit",
//     second: "2-digit",
//     hour12: false,
//   });
// };

// const PolicyList = () => {
//   const [showModal, setShowModal] = useState(false);
//   const [policyName, setPolicyName] = useState("");
//   const [policyId, setPolicyId] = useState("");
//   const [currentPage, setCurrentPage] = useState(1);
//   const itemsPerPage = 5; // Adjust as needed

//   const {
//     policies,
//     getSinglePolicy,
//     policyDetails,
//     updatePolicy,
//     deployPolicy,
//     isLoading,
//     isFullScreenLoader,
//     updateMsg,
//     clearDetails,
//     isDeployLoader,
//   } = usePolicies();

//   const cancel = () => {
//     setShowModal(false);
//     clearDetails();
//   };
//   const paginate = (array, page_number, page_size) => {
//     return array.slice((page_number - 1) * page_size, page_number * page_size);
//   };

//   return (
//     <div className="ps-3 pe-3 pt-3">
//       {isFullScreenLoader ? <FullScreenLoader /> : ""}
//       {isLoading ? (
//         <Loader />
//       ) : (
//         <Table responsive className="table table-striped table-primary w-auto">
//           <thead className="table-secondary text-nowrap">
//             <tr>
//               {POLICY_LIST_COLUMNS.map((item) => (
//                 <th key={item}>{item}</th>
//               ))}
//             </tr>
//           </thead>

//           <tbody className="text-wrap">
//             {policies.map((policy) => (
//               <tr key={policy.policy_id}>
//                 <td className="align-middle">{policy.policy_name}</td>
//                 <td className="align-middle">{policy.description}</td>
//                 <td className="align-middle">{policy.environment_name}</td>
//                 <td className="align-middle">{policy.resource}</td>
                // <td className="align-middle">{policy.compliance}</td>
                // <td className="align-middle">
                //   {policy.non_compliance_resource}
                // </td>
                // <td className="align-middle">
                //   {formattedDate(policy.last_modified)}
                // </td>
                // <td className="align-middle">
                //   {formattedDate(policy.last_deployed)}
                // </td>
                // <td className="align-middle">{policy.deployment_status}</td>
                // {policy.deployment_status === "Not-Deployed" && (
                //   <td className="align-middle">
                //     {isDeployLoader && policyId === policy.policy_id ? (
                //       <button className="btn btn-warning rounded">In Progress..</button>
                //     ) : (
                //       <button
                //         className="btn btn-primary rounded"
                //         onClick={() => {
                //           setPolicyId(policy.policy_id);
                //           deployPolicy(policy.policy_id);
                //         }}
                //       >
                //         Deploy
                //       </button>
                //     )}
                //   </td>
                // )}
                // {policy.deployment_status === "Deployed" && <td></td>}
                // {policy.deployment_status === "Update Available" && <td></td>}
                // {policy.deployment_status === "SUCCESS" && (
                //   <td className="align-middle">
                //     {/* <button className="btn btn-warning rounded">Wait</button> */}
                //   </td>
                // )}
                // {policy.deployment_status.toLowerCase() === "failure" && (
                //   <td className="align-middle">
                //     {isDeployLoader && policyId === policy.policy_id ? (
                //       <button className="btn btn-warning rounded">In Progress..</button>
                //     ) : (
                //       <button
                //         className="btn btn-warning rounded"
                //         onClick={() => {
                //           setPolicyId(policy.policy_id);
                //           deployPolicy(policy.policy_id);
                //         }}
                //       >
                //         Re-Deploy
                //       </button>
                //     )}
                //   </td>
                // )}
                // <td className="align-middle">
                //   <button
                //     type="button"
                //     disabled={isDeployLoader && policyId === policy.policy_id}
                //     className="btn btn-secondary rounded-pill"
                //     onClick={() => {
                //       setShowModal(true);
                //       setPolicyName(policy.policy_name);
                //       setPolicyId(policy.policy_id);
                //       getSinglePolicy(policy.policy_id);
                //     }}
                //   >
                //     {/* Update */}
                //     Edit
                //   </button>
                // </td>
//               </tr>
//             ))}
//           </tbody>
//         </Table>
//       )}
//       {showModal && policyDetails && (
//         <UpdateModal
//           cancel={cancel}
//           policyName={policyName}
//           policyDetails={policyDetails}
//           policyId={policyId}
//           updatePolicy={updatePolicy}
//           updateMsg={updateMsg}
//           isFullScreenLoader={isFullScreenLoader}
//         />
//       )}
//       {/* {deployMsg && (
//         <div
//           className="modal fade show modal-block"
//           tabIndex="-1"
//           role="dialog"
//         >
//           <div className="modal-dialog modal-dialog-centered" role="document">
//             <div className="modal-content">
//               <div className="modal-body">Policy Deployement {deployMsg}</div>
//               <div className="modal-footer">
//                 <button
//                   type="button"
//                   className="btn btn-secondary"
//                   data-dismiss="modal"
//                   onClick={cancel}
//                 >
//                   Close
//                 </button>
//               </div>
//             </div>
//           </div>
//         </div>
//       )} */}
//     </div>
//   );
// };

// export default PolicyList;



import React, { useState } from "react";
import Table from "react-bootstrap/Table";
import Pagination from "react-bootstrap/Pagination";
import { POLICY_LIST_COLUMNS } from "../../constants/common";
import UpdateModal from "../UpdateModal/UpdateModal";
import FullScreenLoader from "../FullScreenLoader/FullScreenLoader";
import Loader from "../Loader/Loader";
import { usePolicies } from "../../context/PoliciesContext";

const formattedDate = (date) => {
  const newDate = new Date(date);
  return newDate.toLocaleDateString("en-US", {
    year: "numeric",
    month: "2-digit",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
    hour12: false,
  });
};

const PolicyList = () => {
  const [showModal, setShowModal] = useState(false);
  const [policyName, setPolicyName] = useState("");
  const [policyId, setPolicyId] = useState("");
  const [currentPage, setCurrentPage] = useState(1);
  const itemsPerPage = 5; // Adjust as needed
  const {
    policies,
    getSinglePolicy,
    policyDetails,
    updatePolicy,
    deployPolicy,
    isLoading,
    isFullScreenLoader,
    updateMsg,
    clearDetails,
    isDeployLoader,
  } = usePolicies();

  const cancel = () => {
    setShowModal(false);
    clearDetails();
  };

  const paginate = (array, page_number, page_size) => {
    return array.slice((page_number - 1) * page_size, page_number * page_size);
  };

  return (
    <div className="ps-3 pe-3 pt-3">
      {isFullScreenLoader ? <FullScreenLoader /> : ""}
      {isLoading ? (
        <Loader />
      ) : (
        <div>
          <Table responsive className="table table-striped table-primary w-auto">
            <thead className="table-secondary text-nowrap">
              <tr>
                {POLICY_LIST_COLUMNS.map((item) => (
                  <th key={item}>{item}</th>
                ))}
              </tr>
            </thead>
            <tbody className="text-wrap">
              {paginate(policies, currentPage, itemsPerPage).map((policy) => (
                <tr key={policy.policy_id}>
                  <td className="align-middle">{policy.policy_name}</td>
                  <td className="align-middle">{policy.description}</td>
                  <td className="align-middle">{policy.environment_name}</td>
                  <td className="align-middle">{policy.resource}</td>
                  <td className="align-middle">{policy.compliance}</td>
                <td className="align-middle">
                  {policy.non_compliance_resource}
                </td>
                <td className="align-middle">
                  {formattedDate(policy.last_modified)}
                </td>
                <td className="align-middle">
                  {formattedDate(policy.last_deployed)}
                </td>
                <td className="align-middle">{policy.deployment_status}</td>
                {policy.deployment_status === "Not-Deployed" && (
                  <td className="align-middle">
                    {isDeployLoader && policyId === policy.policy_id ? (
                      <button className="btn btn-warning rounded">In Progress..</button>
                    ) : (
                      <button
                        className="btn btn-primary rounded"
                        onClick={() => {
                          setPolicyId(policy.policy_id);
                          deployPolicy(policy.policy_id);
                        }}
                      >
                        Deploy
                      </button>
                    )}
                  </td>
                )}
                {policy.deployment_status === "Deployed" && <td></td>}
                {policy.deployment_status === "Update Available" && <td></td>}
                {policy.deployment_status === "SUCCESS" && (
                  <td className="align-middle">
                    {/* <button className="btn btn-warning rounded">Wait</button> */}
                  </td>
                )}
                {policy.deployment_status.toLowerCase() === "failure" && (
                  <td className="align-middle">
                    {isDeployLoader && policyId === policy.policy_id ? (
                      <button className="btn btn-warning rounded">In Progress..</button>
                    ) : (
                      <button
                        className="btn btn-warning rounded"
                        onClick={() => {
                          setPolicyId(policy.policy_id);
                          deployPolicy(policy.policy_id);
                        }}
                      >
                        Re-Deploy
                      </button>
                    )}
                  </td>
                )}
                <td className="align-middle">
                  <button
                    type="button"
                    disabled={isDeployLoader && policyId === policy.policy_id}
                    className="btn btn-secondary rounded-pill"
                    onClick={() => {
                      setShowModal(true);
                      setPolicyName(policy.policy_name);
                      setPolicyId(policy.policy_id);
                      getSinglePolicy(policy.policy_id);
                    }}
                  >
                    {/* Update */}
                    Edit
                  </button>
                </td>
                </tr>
              ))}
            </tbody>
          </Table>
          <Pagination className="mt-3">
            {Array.from({ length: Math.ceil(policies.length / itemsPerPage) }).map(
              (_, index) => (
                <Pagination.Item
                  key={index}
                  active={index + 1 === currentPage}
                  onClick={() => setCurrentPage(index + 1)}
                >
                  {index + 1}
                </Pagination.Item>
              )
            )}
          </Pagination>
        </div>
      )}
      {showModal && policyDetails && (
        <UpdateModal
          cancel={cancel}
          policyName={policyName}
          policyDetails={policyDetails}
          policyId={policyId}
          updatePolicy={updatePolicy}
          updateMsg={updateMsg}
          isFullScreenLoader={isFullScreenLoader}
        />
      )}
    </div>
  );
};

export default PolicyList;


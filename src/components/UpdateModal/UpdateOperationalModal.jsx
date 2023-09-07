/* eslint-disable react/prop-types */
import { useState } from "react";
import { HOURS, MINUTES, UNITS } from "../../constants/common";
import "./updateModal.css";
import Loader from "../Loader/Loader";
const UpdateOperationalModal = ({
  cancel,
  policyName,
  operationalDetails,
  // operationalDetails,
  updateOperationalPolicyFile,
  policyId,
  updateOperationalMsg,
  isFullScreenLoader,
}) => {
  const [units, setUnits] = useState(
    operationalDetails?.schedule?.schedule_value?.unit
    
  );
  const [unitValue, setUnitValue] = useState(
    operationalDetails?.schedule?.schedule_value?.value
  );

  const [email, setEmail] = useState(
    operationalDetails?.notificationDetails?.Emails
  );
  const save = () => {
    updateOperationalPolicyFile(
      policyId,
      email,
      operationalDetails?.schedule?.schedule_type,
      units,
      unitValue
    );
  };
  return (
    <div className="modal fade show modal-block" tabIndex="-1" role="dialog">
      <div className="modal-dialog modal-dialog-centered" role="document">
        <div className="modal-content">
          <div className="modal-header">
            <h5 className="modal-title">Configure Policy</h5>
            <button
              type="button"
              className="close"
              data-dismiss="modal"
              aria-label="Close"
              onClick={cancel}
            >
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div className="modal-body">
            {isFullScreenLoader ? (
              <Loader />
            ) : updateOperationalMsg ? (
              <p>Policy updated and saved successfully</p>
            ) : (
              <form>
                <div className="form-group">
                  <label htmlFor="policyName" className="modal-pb fw-bold">
                    Policy Name
                  </label>
                  <input
                    type="text"
                    className="form-control pt-3"
                    id="policyName"
                    disabled
                    value={policyName}
                  />
                </div>
                <div className="form-group">
                  <label
                    htmlFor="notificationParameter"
                    className="modal-pb fw-bold"
                  >
                    Notification Parameter
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="notificationParameter"
                    onChange={(event) => setEmail(event.target.value)}
                    value={email}
                  />
                </div>
                {/* <div className="form-group">
                <label htmlFor="filterParams" className="modal-pb">
                  Filters Parameter
                </label>
                <div className="row">
                  <div className="col">
                    <select className="form-control" id="schedule">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="col">
                    <select className="form-control" id="schedule">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                  <div className="col">
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col">For</div>
                  <div className="col">
                    <input type="text" className="form-control" />
                  </div>
                  <div className="col">
                    <select className="form-control" id="schedule">
                      <option>1</option>
                      <option>2</option>
                      <option>3</option>
                      <option>4</option>
                      <option>5</option>
                    </select>
                  </div>
                </div>
              </div> */}
                <div className="form-group">
                  <div className="row">
                    <div className="modal-pb fw-bold">
                      Schedule Type : {operationalDetails?.schedule?.schedule_type}
                    </div>
                    <div className="col">Every</div>
                    {(units === "minutes" ||
                      units === "minute") && (
                        <div className="col">
                          <select
                            className="form-control"
                            onChange={(event) =>
                              setUnitValue(event.target.value)
                            }
                          >
                            <option
                              defaultValue={
                                operationalDetails?.schedule?.schedule_value?.value
                              }
                            >
                              {operationalDetails?.schedule?.schedule_value?.value}
                            </option>
                            {MINUTES.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}
                    {(units === "hours" ||
                      units === "hour") && (
                        <div className="col">
                          <select
                            className="form-control"
                            onChange={(event) =>
                              setUnitValue(event.target.value)
                            }
                          >
                            <option
                              defaultValue={
                                operationalDetails?.schedule?.schedule_value?.value
                              }
                            >
                              {operationalDetails?.schedule?.schedule_value?.value}
                            </option>
                            {HOURS.map((item) => (
                              <option key={item} value={item}>
                                {item}
                              </option>
                            ))}
                          </select>
                        </div>
                      )}

                    <div className="col">
                      <select
                        className="form-control"
                        onChange={(event) => setUnits(event.target.value)}
                      >
                        <option
                          defaultValue={
                            operationalDetails?.schedule?.schedule_value?.unit
                          }
                        >
                          {operationalDetails?.schedule?.schedule_value?.unit}
                        </option>
                        {UNITS.map((item) => (
                          <option key={item} value={item}>
                            {item}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </div>
              </form>
            )}
          </div>
          <div className="modal-footer">
            <button
              type="button"
              className="btn btn-secondary"
              data-dismiss="modal"
              onClick={cancel}
            >
              Close
            </button>
            {!updateOperationalMsg && (
              <button
                type="button"
                className="btn btn-primary"
                onClick={save}
                disabled={isFullScreenLoader}
              >
                Save
              </button>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default UpdateOperationalModal;

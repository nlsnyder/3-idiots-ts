import "../../assets/css/forms/Form.css";

import { ApiRequestError } from "../../models/interfaces/form-interfaces";
import { faX } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const ErrorsList: React.FC<{ errors: ApiRequestError[] }> = (props) => {
  const { errors } = props;
  const fields = new Set<string | undefined>();

  let finalErrors: ApiRequestError[] = [];

  errors.forEach((err) => {
    if (!fields.has(err?.param)) {
      finalErrors.push(err);
      fields.add(err?.param);
    }
  });

  return (
    <>
      <div className="errors-list">
        <div className="error-list-header">
          <FontAwesomeIcon icon={faX} className="error-icon" />
          <p>Something went wrong!</p>
        </div>
        <div className="errors-list-items">
          <ul>
            {finalErrors.map((err: ApiRequestError, index: number) => {
              return (
                <li key={index}>
                  <span>
                    <strong>
                      {err?.param
                        ? err?.param.charAt(0).toUpperCase() +
                          err?.param.slice(1) +
                          " - "
                        : ""}
                    </strong>
                    {err.msg}
                  </span>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </>
  );
};

export default ErrorsList;

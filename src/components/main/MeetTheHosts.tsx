import React from "react";
import SubHeading from "../layout/SubHeading";
import styles from "./MeetTheHosts.module.css";
import Host from "./Host";
import { hostProfiles } from "../../data/constants";

const MeetTheHosts: React.FC<{}> = (props) => {
  return (
    <>
      {/* Make Card wrapper container that has container div, row, div, col-10 div */}
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-10">
            <SubHeading sectionHeading="Hosts" title="Meet the Hosts" />
          </div>
        </div>
        <div className="row justify-content-center py-5">
          <div className="col-10">
            <div className={styles.hosts}>
              {hostProfiles.map((profile) => {
                return <Host key={profile.key} hostProfile={profile} />
              })}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default MeetTheHosts;

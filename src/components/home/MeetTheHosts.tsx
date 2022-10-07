import React from "react";
import SubHeading from "../layout/SubHeading";
import styles from "../../assets/css/home/MeetTheHosts.module.css";
import Host from "./Host";
import { hostProfiles } from "../../data/constants";
import RowCol from "../wrappers/RowCol";

const MeetTheHosts: React.FC<{}> = (props) => {
  return (
    <div id="meet-the-hosts">
      {/* Make Card wrapper container that has container div, row, div, col-10 div */}
      <RowCol
        rowClasses="row justify-content-center"
        colClasses="col-11 col-sm-10"
      >
        <SubHeading sectionHeading="Hosts" title="Meet the Hosts" />
      </RowCol>
      <RowCol
        rowClasses="row justify-content-center py-5"
        colClasses="col-11 col-sm-10"
      >
        <div className={styles.hosts}>
          {hostProfiles.map((profile) => {
            return <Host key={profile.id} hostProfile={profile} />;
          })}
        </div>
      </RowCol>
    </div>
  );
};

export default MeetTheHosts;

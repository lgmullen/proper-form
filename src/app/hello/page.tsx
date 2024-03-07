"use client";
import { useState } from "react";
import { InfoSection } from "../../../components/HelloPage/InfoSection";
import { PersonalBio } from "../../../components/HelloPage/PersonalBio";
import { HelloNavBar } from "../../../components/NavBar/HelloNavBar";
import { profiles } from "../../helpers/profiles";
import { CrewMember } from "../types";
import styles from "./hello.module.css";

export default function Hello() {
  const [crewMember, setCrewMember] = useState<CrewMember | undefined>(
    undefined
  );

  const handleClick = (id: number) => {
    const user = profiles.find((profile) => profile.id == id);
    setCrewMember(user);
  };

  return (
    <main>
      <div style={{ height: "100dvh" }}>
        <HelloNavBar
          optionalStyles={{
            color: "black",
            backgroundColor: "rgba(0, 0, 0)",
          }}
        />
        <div className={styles.pageContainer}>
          <div className={styles.infoSectionContainer}>
            <InfoSection handleClick={handleClick} />
          </div>
          <div className={styles.personalBioContainer}>
            <PersonalBio crewMember={crewMember} />
          </div>
        </div>
      </div>
    </main>
  );
}

"use client";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
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

  useGSAP(() => {
    if (document.querySelector(".personal-bio")) {
      gsap.fromTo(
        ".personal-bio",
        {
          opacity: 0,
          scale: 1,
        },
        { scale: 1, opacity: 1, duration: 1.5, ease: "power1.out" }
      );
    }
  }, [crewMember]);

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
        {crewMember !== undefined ? (
          <div className={styles.personalBioContainer}>
            <PersonalBio
              crewMember={crewMember}
              setCrewMember={setCrewMember}
            />
          </div>
        ) : (
          <div className={`${styles.logo} logo`}>
            <Image
              src="/proper_form_logo.png"
              alt={"proper-form"}
              height={25}
              width={136}
            />
          </div>
        )}
      </div>
    </div>
  </main>;
}

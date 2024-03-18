import { CrewMember } from "@/app/types";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";
import Image from "next/image";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import styles from "./PersonalBio.module.css";
interface PersonalBioProps {
  crewMember: CrewMember | undefined;
  setCrewMember: Dispatch<SetStateAction<CrewMember | undefined>>;
}
export const PersonalBio: FunctionComponent<PersonalBioProps> = ({
  crewMember,
  setCrewMember,
}) => {
  useGSAP(() => {
    if (document.querySelector(".personal-bio")) {
      gsap.fromTo(
        ".personal-bio",
        {
          opacity: 0,
        },
        { opacity: 1, duration: 1.5, ease: "power1.out" }
      );
    }
  }, [crewMember]);

  if (crewMember === undefined) {
    return (
      <div
        className="logo"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "100%",
        }}
      >
        <Image
          src="/proper_form_logo.png"
          alt={"proper-form"}
          height={25}
          width={136}
        />
      </div>
    );
  }

  return (
    <div
      className="personal-bio"
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "1rem",
        paddingTop: "1rem",
        gap: "2rem",
      }}
    >
      <button
        className={styles.moduleButtonMobile}
        onClick={() => setCrewMember(undefined)}
      >
        Close the module
      </button>
      <div
        style={{
          display: "flex",
          width: "300px",
          height: "300px",
          position: "relative",
          alignSelf: "center",
        }}
      >
        <Image
          src="/placeholder-image.jpg"
          alt="placeholder"
          layout="fill"
          objectFit="cover"
        />
      </div>
      <h3>
        {crewMember.name}, {crewMember.role}
      </h3>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non libero
        tempus, ultrices nisi sit amet, porta turpis. Fusce nec nulla ac sem
        posuere finibus. Fusce semper turpis eget tellus aliquam, at tempus
        neque tincidunt.
      </p>
    </div>
  );
};

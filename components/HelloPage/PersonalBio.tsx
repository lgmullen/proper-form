import { CrewMember } from "@/app/types";
import Image from "next/image";
import { Dispatch, FunctionComponent, SetStateAction } from "react";
import IconClose from "../Icons/IconClose";
import styles from "./PersonalBio.module.css";

interface PersonalBioProps {
  crewMember: CrewMember | undefined;
  setCrewMember: Dispatch<SetStateAction<CrewMember | undefined>>;
}
export const PersonalBio: FunctionComponent<PersonalBioProps> = ({
  crewMember,
  setCrewMember,
}) => {
  if (crewMember !== undefined) {
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
        <IconClose
          height="36px"
          width="36px"
          className={styles.moduleButtonMobile}
          onClick={() => setCrewMember(undefined)}
        />

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
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed non
          libero tempus, ultrices nisi sit amet, porta turpis. Fusce nec nulla
          ac sem posuere finibus. Fusce semper turpis eget tellus aliquam, at
          tempus neque tincidunt.
        </p>
      </div>
    );
  }
};

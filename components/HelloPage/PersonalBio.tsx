import { FunctionComponent } from "react";
import Image from "next/image";
import { CrewMember } from "@/app/types";

interface PersonalBioProps {
  crewMember: CrewMember | undefined;
}
export const PersonalBio: FunctionComponent<PersonalBioProps> = ({
  crewMember,
}) => {
  if (crewMember === undefined) {
    return <div> Click on a crew member {"(in development)"}</div>;
  }

  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        margin: "1rem",
        paddingTop: "1rem",
        gap: "2rem",
      }}
    >
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

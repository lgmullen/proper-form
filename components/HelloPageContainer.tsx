import { FunctionComponent, ReactNode } from "react";

interface LineItemProps {
  position?: string; // Define type for optional styles
  children?: ReactNode;
}

export const HelloPageContainer: FunctionComponent<LineItemProps> = ({
  position,
  children,
}) => {
  return (
    <div
      style={{
        width: "100%",
        position: "relative",
        margin: "1rem",
        paddingTop: "1rem",
      }}
    >
      <p style={{ position: "absolute", top: 0, right: 0 }}>{position}</p>
      {children}
    </div>
  );
};

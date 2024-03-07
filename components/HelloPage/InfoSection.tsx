import { FunctionComponent } from "react";
import { HelloPageContainer } from "../HelloPageContainer";
import { LineItem } from "../LineItem/LineItem";
import { Spacer } from "../Spacer";

interface InfoSectionProps {
  handleClick: (id: number) => void;
}
export const InfoSection: FunctionComponent<InfoSectionProps> = ({
  handleClick,
}) => {
  return (
    <>
      <h2>
        {`We are a creative production company with offices in New York, Los
              Angeles and London. We've cultivated a unique and diverse culture
              composed of some of the most influential filmmakers from the
              worlds of advertising, film, tv and photography.`}
      </h2>

      <HelloPageContainer position={"Producer"}>
        <LineItem handleClick={() => handleClick(0)} name={"Alex Holmes"} />
      </HelloPageContainer>
      <Spacer />
      <HelloPageContainer position={"Camera"}>
        <LineItem handleClick={() => handleClick(1)} name={"Bobby Rodgers"} />
        <LineItem handleClick={() => handleClick(3)} name={"John Tanner"} />
      </HelloPageContainer>
      <Spacer />
      <HelloPageContainer position={"Crew"}>
        <LineItem handleClick={() => handleClick(2)} name={"Cyrus Stowe"} />
      </HelloPageContainer>
    </>
  );
};

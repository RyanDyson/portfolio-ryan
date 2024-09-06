import { DisplayText } from "../text/DisplayText";
export const TitleComponent = (title: string) => {
  return [
    <div className="leading-[11vw] text-[11vw] w-full flex justify-between">
      {title.split("").map((item, index) => (
        <DisplayText key={index}>{item}</DisplayText>
      ))}
    </div>,
    <div className="leading-[11vw] text-[11vw] w-full flex justify-between">
      {title.split("").map((item, index) => (
        <DisplayText key={index}>{item}</DisplayText>
      ))}
    </div>,
    <div className="leading-[11vw] text-[11vw] w-full flex justify-between">
      {title.split("").map((item, index) => (
        <DisplayText key={index}>{item}</DisplayText>
      ))}
    </div>,
    <div className="leading-[11vw] text-[11vw] w-full flex justify-between">
      {title.split("").map((item, index) => (
        <DisplayText key={index}>{item}</DisplayText>
      ))}
    </div>,
  ];
};

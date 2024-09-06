import { CommonText } from "../text/CommonText";

export const SubtitleComponent = (subtitle: string) => {
  return [
    <div className="leading-[9vw] text-[9vw] font-extrabold w-full flex justify-between">
      {subtitle.split("").map((item, index) => (
        <div key={index}>
          <CommonText key={index}>{item}</CommonText>
        </div>
      ))}
    </div>,
    <div className="leading-[9vw] text-[9vw] font-extrabold w-full flex justify-between">
      {subtitle.split("").map((item, index) => (
        <div key={index}>
          <CommonText key={index}>{item}</CommonText>
        </div>
      ))}
    </div>,
    <div className="leading-[9vw] text-[9vw] font-extrabold w-full flex justify-between">
      {subtitle.split("").map((item, index) => (
        <div key={index}>
          <CommonText key={index}>{item}</CommonText>
        </div>
      ))}
    </div>,
    <div className="leading-[9vw] text-[9vw] font-extrabold w-full flex justify-between">
      {subtitle.split("").map((item, index) => (
        <div key={index}>
          <CommonText key={index}>{item}</CommonText>
        </div>
      ))}
    </div>,
  ];
};

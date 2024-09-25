import { CommonText } from "./text/CommonText";

export function Footer() {
  return (
    <div className="w-screen py-6 px-4 md:px-16 bg-blue-700">
      <CommonText className="text-sm text-right text-yellow-50 ">
        © 2024 Ryan Dyson Darmawan
      </CommonText>
    </div>
  );
}

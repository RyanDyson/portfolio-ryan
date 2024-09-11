import { archiveLists } from "../types/archiveList";
import { DisplayText } from "../text/DisplayText";
import { CustomButton } from "../CustomButton";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion } from "framer-motion";
import useMeasure from "react-use-measure";

type Props = {
  isHovered?: boolean;
  id: number;
  item: (typeof archiveLists)[number];
  className?: string;
};

const defaultClassName =
  "w-full h-1/6 flex justify-between overflow-x-clip p-2 gap-x-4 transition-all";

export function ArchiveListItem(props: Props) {
  let [ref, { width }] = useMeasure();

  return (
    <div className={defaultClassName}>
      <div className="text-2xl flex gap-x-4 items-center justify-between w-full">
        <DisplayText className="text-blue-200 text-7xl text-center w-20">
          {props.id + 1}
        </DisplayText>
        <motion.div
          className="text-white"
          transition={{ ease: "easeInOut", duration: 0.3 }}
        ></motion.div>
      </div>

      <motion.div
        className="flex pe-3 items-center justify-between gap-x-2 transition-all ease-in-out duration-300 relative after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-2 after:bg-gradient-to-l after:from-slate-900 after:to-transparent"
        initial={{ x: width + 32 }}
        animate={props.isHovered ? { x: 0 } : { x: width + 32 }}
        exit={{ x: "20vw" }}
        transition={{ ease: "easeInOut", duration: 0.3 }}
      >
        <DisplayText className={props.className}>
          {props.item.title}
        </DisplayText>
        <div ref={ref} className="flex gap-x-2">
          <Link
            href={props.item.demo ?? ""}
            className={props.item.demo === null ? "opacity-50" : "opacity-100"}
          >
            <CustomButton>
              <>
                <FaArrowUpRightFromSquare /> demo
              </>
            </CustomButton>
          </Link>
          <Link
            href={props.item.demo ?? ""}
            className={props.item.demo === null ? "opacity-50" : "opacity-100"}
          >
            <CustomButton>
              <>
                <FaGithub /> Repo
              </>
            </CustomButton>
          </Link>
        </div>
      </motion.div>
    </div>
  );
}

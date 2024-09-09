import { archiveLists } from "../types/archiveList";
import { DisplayText } from "../text/DisplayText";
import { CustomButton } from "../CustomButton";
import { FaArrowUpRightFromSquare } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";

type Props = {
  isHovered?: boolean;
  id: number;
  item: (typeof archiveLists)[number];
};

export function ArchiveListItem(props: Props) {
  return (
    <div className="w-full h-1/6 flex justify-between overflow-x-clip p-2 gap-x-4">
      <div className="text-2xl flex gap-x-4 items-center justify-between w-full">
        <DisplayText className="text-blue-200 text-7xl text-center w-20">
          {props.id + 1}
        </DisplayText>
        <motion.div
        //   initial={{ x: "5vw" }}
        //   animate={props.isHovered ? { x: 0 } : {}}
        //   exit={{ x: "10vw" }}
        //   transition={{ ease: "easeInOut", duration: 0.3 }}
        >
          <DisplayText>{props.item.title}</DisplayText>
        </motion.div>
      </div>
      {props.isHovered && (
        <AnimatePresence>
          <motion.div
            className="flex pe-3 items-center justify-between gap-x-2 transition-all ease-in-out duration-300 relative after:content-[''] after:absolute after:top-0 after:right-0 after:bottom-0 after:w-2 after:bg-gradient-to-l after:from-slate-900 after:to-transparent"
            initial={{ x: "20vw" }}
            animate={{ x: 0 }}
            exit={{ x: "20vw" }}
            transition={{ ease: "easeInOut", duration: 0.3 }}
          >
            <Link href={props.item.demo ?? ""}>
              <CustomButton>
                <>
                  <FaArrowUpRightFromSquare /> demo
                </>
              </CustomButton>
            </Link>
            <Link href={props.item.demo ?? ""}>
              <CustomButton>
                <>
                  <FaGithub /> Repo
                </>
              </CustomButton>
            </Link>
          </motion.div>
        </AnimatePresence>
      )}
    </div>
  );
}

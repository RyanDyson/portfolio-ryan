import { useEffect, type Dispatch, type SetStateAction } from "react";
import { MdCancel } from "react-icons/md";
import {
  motion,
  AnimatePresence,
  useTransform,
  easeInOut,
} from "framer-motion";
import { Document } from "react-pdf";

type CvDialogProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
  children?: React.ReactNode;
};

export function CvDialog({ isOpen, setOpen, children }: CvDialogProps) {
  useEffect(() => {
    if (isOpen) {
      document.body.style.overflowY = "hidden";
    } else {
      document.body.style.overflowY = "auto";
    }

    return () => {
      document.body.style.overflowY = "auto";
    };
  }, [isOpen]);

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          className="fixed top-0 left-0 w-screen h-screen bg-slate-950/90 p-12 overscroll-contain z-50 pb-0"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ ease: "easeInOut", duration: 0.1 }}
          // onClick={() => setOpen(!isOpen)}
        >
          <motion.div
            className="bg-slate-900 rounded w-full h-full p-8 transition-all ease-in-out duration-300"
            initial={{ y: "100vh" }}
            animate={isOpen ? { y: 0 } : { y: "100vh" }}
            exit={{ y: "100vh" }}
            transition={{ ease: easeInOut, duration: 0.2 }}
          >
            <MdCancel
              size={24}
              onClick={() => setOpen(!isOpen)}
              className="cursor-pointer"
            />
            <div className="w-full h-full">{children}</div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

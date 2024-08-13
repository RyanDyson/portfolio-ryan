import { useEffect, type Dispatch, type SetStateAction } from "react";
import { MdCancel } from "react-icons/md";
import { Document } from "react-pdf";

type CvDialogProps = {
  isOpen: boolean;
  setOpen: Dispatch<SetStateAction<boolean>>;
};

export function CvDialog({ isOpen, setOpen }: CvDialogProps) {
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
    <div className="fixed top-0 left-0 w-screen h-screen bg-slate-950/90 p-12 overscroll-contain">
      <div className="bg-slate-900 rounded w-full h-full p-8">
        <MdCancel size={24} onClick={() => setOpen(!isOpen)} />
      </div>
    </div>
  );
}

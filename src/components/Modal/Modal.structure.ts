import { Dispatch, SetStateAction } from "react";

export interface IModalProps {
  children: React.ReactNode;
  setModal: Dispatch<SetStateAction<boolean>>;
}

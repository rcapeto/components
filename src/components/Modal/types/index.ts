import { ReactNode } from "react";

export interface IModalProps {
   overlay?: boolean;
   animation?: boolean;
   overlayRatio?: number;
   overlayClick?: boolean;
};

export interface IDefaultModalProps extends IModalProps {
   isOpen: boolean;
   closeModal: () => void;
};

export interface IModalRefProps extends IModalProps {
   onCloseModal?: () => void;
   onOpenModal?: () => void;
   children: ReactNode;
};

export interface IModalActions {
   closeModal: () => void;
   openModal: () => void;
   showProps: () => IModalProps;
};
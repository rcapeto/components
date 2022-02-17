import { Dispatch, SetStateAction } from 'react';

export interface IModalProps {
   overlay?: boolean;
   animation?: boolean;
};

export interface IDefaultModalProps extends IModalProps {
   isOpen: boolean;
   closeModal: () => void;
};

export interface IModalRefProps extends IModalProps {
   onCloseModal?: () => void;
   onOpenModal?: () => void;
};

export interface IModalActions {
   closeModal: () => void;
   openModal: () => void;
   showProps: () => IModalProps;
};
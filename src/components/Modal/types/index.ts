import { Dispatch, SetStateAction } from 'react';

export interface IModalProps {
   overlay: boolean;
   animation: boolean;
};

export interface IDefaultModalProps extends IModalProps {
   isOpen: boolean;
   setIsOpen: () => void | Dispatch<SetStateAction<boolean>>;
};

export interface IModalActions {
   closeModal: () => void;
   openModal: () => void;
   showProps: () => IModalProps;
};
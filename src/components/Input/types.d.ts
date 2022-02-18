import { InputHTMLAttributes } from "react";
import { IconType } from "react-icons/lib";

export interface IInputProps extends InputHTMLAttributes<HTMLInputElement> {
   inputType?: IInputType;
   icon?: IconType,
   buttonClick?: () => void;
};

export type IInputType = 'with-button' | 'password' | 'normal';
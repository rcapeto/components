import { FunctionComponent, useState } from "react";
import { IoMdSend } from 'react-icons/io';
import { BsEyeSlashFill, BsEyeFill } from 'react-icons/bs';

import { classes } from "../../../../config/class";
import { colors } from "../../../../config/colors";
import { IInputProps } from "../../types";
import './styles.scss';

export const InputCustom: FunctionComponent<IInputProps> = ({ 
   inputType = 'with-button',
   icon = IoMdSend,
   buttonClick = () => {},
   ...rest
}) => {
   const [showText, setShowText] = useState<boolean>(false);
   const baseClass = classes.base;
   const Icon = icon;

   return(
      <div 
         aria-label="Input"
         className={`${baseClass}Input-Container`}
         data-input-custom
      >
         <input 
            placeholder="Please typing here..." 
            {...rest} 
            type={
               inputType === 'password' ? 
                  showText ? 'text' : 'password' 
                  :
                  rest.type
            }
            className={`${rest.className} ${inputType === 'password' ? 'is--password' : ''}`}
         />

         {
            inputType === 'password' && (
               <div 
                  className="input-button is--password" 
                  data-input-button aria-label="Botão do Input"
                  onClick={() => setShowText(!showText)}
               >
                  {
                     !showText ? 
                        <BsEyeFill color={colors.text} size={18}/> : 
                        <BsEyeSlashFill color={colors.text} size={18} />
                  }
               </div>
            )
         }

         {
            inputType === 'with-button' && (
               <div 
                  className="input-button" 
                  data-input-button aria-label="Botão do Input"
                  onClick={buttonClick}
               >
                  <Icon color={colors.white} size={18}/>
               </div>
            )
         }
      </div>
   );
};
import React, { FunctionComponent, useState, useRef, useEffect } from 'react';
import { BiChevronRight } from 'react-icons/bi';

import { IDropdown, IDropdownItem } from '../../types';
import { classes } from '../../../../config/class';
import { colors } from '../../../../config/colors';
import './styles.scss';

export const DropdownContainer: FunctionComponent<IDropdown> = ({ 
   items,
   onChangeValue
}) => {
   const [selectedValue, setSelectedValue] = useState<IDropdownItem>({ label: '', value: ''});
   const [active, setActive] = useState(false);
   const baseClass = classes.base;
   const dropdownRef= useRef<HTMLDivElement>(null);

   const handleSelectedItem = (value: IDropdownItem) => {
      setSelectedValue(value);
      setActive(false);
      onChangeValue && onChangeValue(value);
   };

   const checkClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      const dropdown = dropdownRef.current;

      if(target && dropdown && !dropdown.contains(target)) {
         setActive(false);
         document.removeEventListener('click', checkClick);
      }
   };

   useEffect(() => {
      if(active) {
         document.addEventListener('click', checkClick);
      }
   }, [active]);

   return(
      <div
         className={`${baseClass}Dropdown-Container ${active ? 'is--active' : ''}`}
         aria-label="Drowdown"
         onClick={() => setActive(!active)}
         ref={dropdownRef}
         data-selected-value={JSON.stringify(selectedValue)}
      >
         <h5 title={selectedValue.label ? selectedValue.label : 'Please choose one option'}>
            { selectedValue.label ? selectedValue.label : 'Please choose one option' }
         </h5>

         <BiChevronRight color={colors.black} size={18} />
         
         <div
            className={`${baseClass}Dropdown-Options-Container ${active ? 'is--active' : ''}`}
            aria-label="Drownpdown Options"
         >
           <ul>
              {items.map((item, index) => (
                 <li 
                     key={String(index)} 
                     title={item.label}
                     data-item-index={String(index)}
                     data-item-label={item.label}
                     data-item-value={item.value}
                     onClick={() => handleSelectedItem(item)}
                  >
                    <p>{item.label}</p>
                 </li>
              ))}
           </ul>
         </div>
      </div>
   );
};
import { ChangeEvent, FunctionComponent, useState, useEffect, KeyboardEvent, useRef } from 'react';
import { AiOutlineClose } from 'react-icons/ai';

import { classes } from '../../../../config/class';
import { colors } from '../../../../config/colors';
import { IAutoCompleteInput, Item } from '../../types';
import './styles.scss';

export const AutoCompleteInput: FunctionComponent<IAutoCompleteInput> = ({ 
   inputAttr,
   items,
   onSelectedItem,
   onRemoveItem
}) => {
   const [inputValue, setInputValue] = useState('');
   const [showSuggestions, setShowSuggestions] = useState(false);
   const [selectedItems, setSelectedItems] = useState<Item[]>([]);
   const [allItems, setAllItems] = useState<Item[]>(items);
   const [suggestions, setSuggestions] = useState<Item[]>([]);

   const baseClass = classes.base;
   const ref = useRef<HTMLDivElement>(null);

   const handleChangeValue = (e: ChangeEvent<HTMLInputElement>) => {
      if(inputAttr?.onChange) inputAttr.onChange(e);
      setInputValue(e.target.value);
   };


   const selectOption = (option: Item) => {
      onSelectedItem && onSelectedItem(option);
      setAllItems(allItems.filter(item => item.label !== option.label));
      setSelectedItems([...selectedItems, option]);
   };

   const removeOption = (option: Item) => {
      onRemoveItem && onRemoveItem(option);
      setSelectedItems(selectedItems.filter(item => item.label !== option.label));
      setAllItems([...allItems, option]);
   };

   const onFocus = () => {
      setShowSuggestions(true);
      document.addEventListener('click', checkClicks);
   };

   const onKeyDown = (event: KeyboardEvent) => {
      const tabKey = event.code === 'Tab';

      if(tabKey) {
         event.preventDefault();
         const option = suggestions[0];

         option && selectOption(option);
      }
   };

   const checkClicks = (event: MouseEvent) => {
      const target = event.target as HTMLElement;
      const elementRef = ref.current;

      if(target && elementRef && !elementRef.contains(target)) {
         setShowSuggestions(false);
         document.removeEventListener('click', checkClicks);
      };
   };

   useEffect(() => {
      if(inputAttr?.value || inputValue) {
         const value = (inputAttr?.value as string) ?? inputValue;

         setSuggestions(
            allItems.filter(item => item.label.toLowerCase().includes(value.toLowerCase()))
         )
      } else {
         setSuggestions(allItems);
      }
   }, [inputAttr?.value, inputValue, allItems]);

   return(
      <div
         aria-label="Input com Autocomplete"
         className={`${baseClass}AutoCompleteInput-Container`}
         data-input-autocomplete
         ref={ref}
      >
         <div className={`${baseClass}AutomCompleteInput-Selected-Items`}>
            {
               selectedItems.map((item, index) => (
                  <div
                     data-item-label={item.label}
                     data-item-value={JSON.stringify(item.value)}
                     key={String(index)}
                     className={`${baseClass}AutoCompleteInput-Item`}
                  >
                     <p>{item.label}</p>

                     <button 
                        onClick={()=> removeOption(item)}
                     >
                        <AiOutlineClose 
                           color={colors.white}
                           size={10}
                        />
                     </button>
                  </div>
               ))
            }
         </div>

         <input 
            placeholder="Digite aqui"
            {...inputAttr} 
            value={inputAttr?.value ?? inputValue}
            onChange={handleChangeValue}
            onFocus={onFocus}
            onKeyDown={onKeyDown}
         />

         <div className={`${baseClass}AutoCompleteInput-Suggestions ${showSuggestions ? 'is--active' : ''}`}>
            {
               suggestions.map((suggestion, index) => (
                  <p
                     data-suggestion-value={JSON.stringify(suggestion.value)}
                     title={suggestion.label}
                     key={String(index)}
                     onClick={() => selectOption(suggestion)}
                  >
                     {suggestion.label}
                  </p>
               ))
            }

            {
               suggestions.length === 0 && (<p>No suggestion</p>)
            }
         </div>
      </div>
   );
}; 
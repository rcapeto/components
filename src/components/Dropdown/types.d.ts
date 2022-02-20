export interface IDropdown {
   items: IDropdownItem[];
   onChangeValue?: (selectedValue: IDropdownItem) => void;
};

export interface IDropdownItem {
   label: string;
   value: string;
};
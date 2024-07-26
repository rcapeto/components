import { ReactElement, FunctionComponent, FC, ReactComponentElement } from 'react';

export interface ConditionLayoutProps {
   condition: boolean | ConditionItemArray[];
   Else?: ReactElement | FunctionComponent | FC | ReactComponentElement;
   conditionArrayType?: 'all' | 'only-one';
};

export interface ConditionItemArray {
   condition: boolean;
}
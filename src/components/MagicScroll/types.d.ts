export interface MagicScrollProps {
   size?: SizeType;
   position?: PositionType;
   animated?: boolean;
};

export type SizeType = 'sm' | 'md' | 'lg' | 'xl';
export type PositionType = 'top' | 'middle' | 'bottom' | 'between-top-middle' | 'between-bottom-middle';
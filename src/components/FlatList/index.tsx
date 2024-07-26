import { ReactNode, Fragment } from "react";

interface RenderItemParams<Type> {
   item: Type;
   index: number;
};

type KeyExtractor<Type> = (item: Type) => string;
type RenderItem<Type> = (params: RenderItemParams<Type>) => ReactNode;

interface FlatListProps<Type> {
   items: Type[];
   renderItem: RenderItem<Type>;
   keyExtractor: KeyExtractor<Type>;
};


export default function FlatList<Type>(props: FlatListProps<Type>) {
   const { items, keyExtractor, renderItem } = props;

   return(
      <Fragment>
         {
            items.map((item, index) => (
               <Fragment key={keyExtractor(item)}>
                  {renderItem({ item, index })}
               </Fragment>
            ))
         }
      </Fragment>
   );
}
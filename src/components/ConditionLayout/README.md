# Component [ConditionLayout]

## 🚀 How to use
- We can use it in two ways.
- If condition is true will render the children prop.
- If condition is false will render Else prop or nothing.

### ConditionLayout [1]
- Here we using only with one condition.

```jsx
   import { FunctionComponent } from 'react';

   const Example: FunctionComponent = () => {
      const isProduct = true;
      const isExample = true;

      return(
         <div>
            <h1>Condition Example</h1>
            <ConditionLayout 
               condition={isProduct && isExample}
               Else={<h1>Is not a product!</h1>}
            >
               <h1>Product: {isProduct ? 'Yes' : 'No'}</h1>
            </ConditionLayout>
         </div>
      )
   };
```

### ConditionLayout [2]
- Here we using with two or more conditions

```jsx
   import { FunctionComponent } from 'react';

   const Example: FunctionComponent = () => {
      const isProduct = true;

      return(
      <div>
         <h1>Condition Example</h1>

         {
            Array.from({ length: 10}).map((_, index) => (
               <ConditionLayout 
               condition={[
                  { condition: index % 2 == 0},
                  { condition: isProduct }
               ]}
               conditionArrayType='all'
               Else={<h1>Is not a product!</h1>}
               >
               <h1>Index={index}</h1>
               </ConditionLayout>
            ))
         }
         
      </div>
      );
   };
```

## 💻 Documentation

### ConditionLayout props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `condition`  | `bool` | `ConditionItem[]` | Condition to render the children `required`| `''` |
| `conditionArrayType`  | `string` | Condition configuration when condition is an array `all` or `only-one` | `only-one` |
| `Else`  | `ReactElement` | Using to render when condition is false | `undefined` |

### ConditionItem props

| Prop | Type | Description                                                                                                                                         | Default Value |
| --------- | -------- | ------------------------------------------------------------------------------------------------------------------------------------------------------- | ----------------- |
| `condition`  | `bool` | Condition that will be check `required`| `''` |

## 👨🏻‍💻 Developers
- Raphael Capeto



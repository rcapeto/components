import { Container, ContainerProps } from '../Container';

import { FormProvider } from '../../context/FormContext';

export function Wrapper({ children, ...props}: ContainerProps) {
   return(
      <FormProvider>
         <Container {...props}>
            { children }
         </Container>
      </FormProvider>
   );
}
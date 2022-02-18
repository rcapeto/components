import { FunctionComponent } from 'react';

import { AnimatedSection, useAnimatedSection  } from './components/AnimatedSections';

const App: FunctionComponent = () => {
   const { 
      sectionsActivated, 
      animatedSections, 
      currentPositionY, 
      handleAddActivedSection 
   } = useAnimatedSection();

  return(
    <div className="container">
       <div style={{ height: '150vh' }}/>
       <AnimatedSection>
          <h1>teste</h1>
       </AnimatedSection>
       <div style={{ height: '100vh' }}/>
       <AnimatedSection sectionTitle='Teste 2'>
         <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam deserunt veniam 
            illo obcaecati? Fuga, commodi dignissimos dolorum ratione dolor quae animi eum 
            tempora! Quas et impedit non. Exercitationem, perspiciatis architecto.
         </p>
       </AnimatedSection>
    </div>
  );
};

export default App;
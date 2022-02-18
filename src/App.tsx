import { FunctionComponent } from 'react';

import { AnimatedSection  } from './components/AnimatedSections';

const App: FunctionComponent = () => {
  return(
    <div className="container">
       <div style={{ height: '150vh' }}/>
       <AnimatedSection sectionTitle="First Content">
         <p>
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quisquam deserunt veniam 
            illo obcaecati? Fuga, commodi dignissimos dolorum ratione dolor quae animi eum 
            tempora! Quas et impedit non. Exercitationem, perspiciatis architecto.
         </p>
       </AnimatedSection>
       <div style={{ height: '150vh' }}/>
    </div>
  );
};

export default App;
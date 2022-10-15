import { useState } from 'react';
import { FaPhone } from 'react-icons/fa';
import { TestLayout } from './components/TestLayout';

import { TextInput } from './components/TextInput';
import { MaskInput } from './utils/masks';
import { PhoneCheck } from './utils/validations';

export default function App() {
  const [errorInput, setErrorInput] = useState(false);

  return(
    <TestLayout isDarkMode>
      <form action="" style={{ flex: 1, maxWidth: '360px' }}>
        <TextInput.Wrapper inputHasError={errorInput}>
          <TextInput.Icon>
            <FaPhone />
          </TextInput.Icon>

          <TextInput.Input 
            validation={PhoneCheck}
            errorMessage="Invalid phone"
            type="email"
            mask={value => MaskInput("cellphone", value)}
            placeholder='(XX) XXXXX-XXXX'
            onErrorValidation={error => setErrorInput(error)}
          />
        </TextInput.Wrapper>
      </form>
    </TestLayout>
  );
}
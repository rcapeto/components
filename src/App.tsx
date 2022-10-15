import { FaPhone, FaUser } from 'react-icons/fa';
import { TestLayout } from './components/TestLayout';
import { Form } from './lib/Form';
import { MaskInput } from './utils/masks';
import { PhoneCheck } from './utils/validations';

export default function App() {
  return(
    <TestLayout isDarkMode>
      <div style={{ width: '100%', maxWidth: 420 }}>
        <Form.Wrapper onHandleSubmit={(inputs, error) => {}}>
          <Form.Title>Register User</Form.Title>

          <Form.Field>
            <Form.Label htmlFor="phone">Phone</Form.Label>
            <Form.InputWrapper>
              <Form.InputIcon>
                <FaPhone/>
              </Form.InputIcon>
              <Form.Input 
                inputName="phone" 
                placeholder="Your phone" 
                inlineValidation 
                mask={text => MaskInput('cellphone', text)}
                validation={PhoneCheck}
              />
            </Form.InputWrapper>
          </Form.Field>

          <Form.Field>
            <Form.Label htmlFor="name">Name</Form.Label>
            <Form.InputWrapper>
              <Form.InputIcon>
                <FaUser/>
              </Form.InputIcon>
              <Form.Input inputName="name" placeholder="Your name" required />
            </Form.InputWrapper>
          </Form.Field>

          <Form.ErrorMessage message="Can not send this Form" />

          <Form.Button buttonText="Create account" />

        </Form.Wrapper>
      </div>
    </TestLayout>
  );
}
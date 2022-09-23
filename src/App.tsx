import { Form, PhoneCheck } from './components/Form';

const App = () => {
  return(
    <>
      <h1>Register Form</h1>
      <Form 
        style={{ padding: '10px 30px'}}
        handleSubmitForm={(fields, event) => {
          console.log({ fields, event })
        }}
      >
        
        <Form.Input 
          label='Name'
          inputName='name'
        />

        <Form.Input 
          label='Last Name'
          inputName='last_name'
        />

        <Form.Input 
          label='Phone'
          inputName='phone'
          validation={PhoneCheck}
          inlineValidation
          mask='cellphone'
          errorMessage='Invalid Phone'
        />

        <Form.SubmitButton btnText="Register" />
      </Form>
    </>
  );
}

export default App;
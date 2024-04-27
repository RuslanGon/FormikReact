import { Field, Form, Formik } from "formik";
import * as Yup from 'yup';

 const FORM_INITIAL_VALUES = {
    userEmail:'',
    userName:''
}

const mailBosSchema = Yup.object({
    userEmail: Yup.string().required('Email adress is reguired')
    .email('You must enter valid email adress!'),
    userName: Yup.string().required('User name is reguired')
 
});

const MailBoxForm = ({ onAddUsers }) => {
  const handleSubmit = (values, actions) => {
    onAddUsers(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={handleSubmit} >
      <Form>
        <h2>Add new users</h2>
        <label>
          <span>User email</span>
          <br />
          <Field type="email" name="userEmail" placeholder="@email" />
        </label>
        <br />
        <label>
          <span>User name</span>
          <br />
          <Field type="text" name="userName" placeholder="name" required />
        </label>
        <br />
        <br />
        <button type="submit"> ▶ Create new users</button>
      </Form>
    </Formik>
  );
};

export default MailBoxForm;

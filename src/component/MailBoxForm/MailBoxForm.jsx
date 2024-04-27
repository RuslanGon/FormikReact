import { ErrorMessage, Field, Form, Formik } from "formik";
import * as Yup from 'yup';
import { MAX_CHAR_NAME_VALIDATION } from "../../utils/constans";

 const FORM_INITIAL_VALUES = {
    userEmail:'',
    userName:''
}

const mailBosSchema = Yup.object({
    userEmail: Yup.string().required('Email adress is reguired')
    .email('You must enter valid email adress!'),
    userName: Yup.string().required('User name is reguired')
    .max(MAX_CHAR_NAME_VALIDATION, `Your user name must be less than ${MAX_CHAR_NAME_VALIDATION} sumbal`)
});

const MailBoxForm = ({ onAddUsers }) => {
  const handleSubmit = (values, actions) => {
    onAddUsers(values);
    actions.resetForm();
  };

  return (
    <Formik initialValues={FORM_INITIAL_VALUES} onSubmit={handleSubmit} validationSchema={mailBosSchema} >
      <Form>
        <h2>Add new users</h2>
        <label>
          <span>User email</span>
          <br />
          <Field type="email" name="userEmail" placeholder="@email" />
          <ErrorMessage component='p' name="userEmail" />
        </label>
        <br />
        <label>
          <span>User name</span>
          <br />
          <Field type="text" name="userName" placeholder="name" required />
          <ErrorMessage component='p' name="userName" />
        </label>
        <br />
        <br />
        <button type="submit"> ▶ Create new users</button>
      </Form>
    </Formik>
  );
};

export default MailBoxForm;

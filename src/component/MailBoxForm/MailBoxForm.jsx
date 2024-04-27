import { Field, Form, Formik } from "formik";

const MailBoxForm = ({ onAddUsers }) => {
  const handleSubmit = () => {
   
    
    // onAddUsers(formData);
    // event.currentTarget.reset();
  };

  return (
    <Formik initialValues={{}} onSubmit={handleSubmit}>
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

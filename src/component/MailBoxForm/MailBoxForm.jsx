import { Form, Formik } from "formik";

const MailBoxForm = ({ onAddUsers }) => {
  const handleSubmit = () => {
   
    
    // onAddUsers(formData);
    // event.currentTarget.reset();
  };

  return (
    <Formik initialValues={{}} onSubmit={() => {}}>
      <Form>
        <h2>Add new users</h2>
        <label>
          <span>User email</span>
          <br />
          <input type="email" name="userEmail" placeholder="@email" required />
        </label>

        <br />
        <label>
          <span>User name</span>
          <br />
          <input type="text" name="userName" placeholder="name" required />
        </label>
        <br />
        <br />
        <button type="submit"> ▶ Create new users</button>
      </Form>
    </Formik>
  );
};

export default MailBoxForm;

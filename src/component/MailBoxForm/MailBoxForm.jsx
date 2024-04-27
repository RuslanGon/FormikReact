
const MailBoxForm = ({onAddUsers}) => {
    const handleSubmit = (event) => {
        event.preventDefault()
        const userEmail = event.currentTarget.elements.userEmail.value
        const userName = event.currentTarget.elements.userName.value
        const formData = {
            userEmail,
            userName
        }
        onAddUsers(formData)
        event.currentTarget.reset()
    }
  return (
   <form onSubmit={handleSubmit}>
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
   </form>
  )
}

export default MailBoxForm
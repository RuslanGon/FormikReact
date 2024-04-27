import css from './mailBoxItem.module.css'

const MailBoxItem = ({user, onDeleteUsers}) => {
    return (
      
      <li>
        <p>Email: {user.userEmail}</p>
        <p className={css.name}>Name: <div className={css.color} /> {user.userName}</p>
        <button type="button" onClick={() => onDeleteUsers(user.id)}>❌ Delete user</button>
      </li>
      
    )
  }
  
  export default MailBoxItem
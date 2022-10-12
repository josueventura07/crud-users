import React from 'react'
import './styles/userCard.css'


const UsersCard = ({user, deleteUserById, setUpdatedInfo, setFormIsClosed}) => {

  const handleEdit = () => {
    setUpdatedInfo(user)
    setFormIsClosed(false)
  }

  return (
    <article className='user_card'>
        <h2 className='user_name'>{`${user.first_name} ${user.last_name}`}</h2>
        <ul className='user_list'>
            <li className='user_item'>
              <span className='user_span'>Email: </span>{user.email}
            </li>
            <li className='user_item'>
              <span className='user_span'>Birth Day: </span>
              <div className='user_item-date'>
              <i className="user_gift fa-solid fa-gift"></i> {user.birthday}
              </div>
            </li>
        </ul>
        <footer className='user_footer'>
        <buttom onClick={() => deleteUserById(user.id)} className='user_btn'>
        <i  className="fa-solid fa-trash-can"></i>
        </buttom>
        <buttom onClick={handleEdit} className='user_btn'>
        <i  className="fa-solid fa-pen-to-square"></i>
        </buttom>
        </footer>
    </article>
  )
}

export default UsersCard
import React, { useEffect } from 'react'
import message from './styles/message.css'

const Message = ({setMessageClose}) => {


const handleCloseMessage = () => {
    setMessageClose(true) 

}    

  return (
    <div className='message'>
      <h1 className='message_header'>Confirmation Message</h1>
      <div>
        <h3 className='message_title'>Done!</h3>
        <button className='check_btn-container'>
          <i onClick={handleCloseMessage} className="check_btn fa-solid fa-circle-check"></i>
        </button>
      </div>
    </div>
  )
}

export default Message
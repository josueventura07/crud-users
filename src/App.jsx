import axios from 'axios'
import { useEffect, useState } from 'react'
import './App.css'
import FormUsers from './components/FormUsers'
import UsersCard from './components/UsersCard'


const baseURL = 'https://users-crud1.herokuapp.com'


function App() {
  
  const [users, setUsers] = useState()
  const [updatedInfo, setUpdatedInfo] = useState()
  const [formIsClosed, setFormIsClosed] = useState(true)
  
  const getAllUsers = () => {
    const URL = `${baseURL}/users/`
    axios.get(URL)
    .then(res => setUsers(res.data))
    .catch(err => console.log(err))
  }

  useEffect(() => {
    getAllUsers()
  }, [])
  
  const createUsers = data => {
   
   const URL = `${baseURL}/users/`
    axios.post(URL, data)
    .then(res => {
      console.log(res.data)
      getAllUsers()
    })
    .catch(err => console.log(err))
  }

const deleteUserById = id => {
  const URL = `${baseURL}/users/${id}`
  axios.delete(URL)
  .then(res => {
    console.log(res.data)
    getAllUsers()
  })
  .catch(err => console.log(err))
}

const updatedUserById = (id, data) => {
  const URL =`${baseURL}/users/${id}/`
axios.patch(URL, data)
.then(res => {
    console.log(res.data)
    getAllUsers()
})
.catch(err => console.log(err))
}

const handleOpenForm = () => {
  setFormIsClosed(false)
}
  

  return (
    <div className="App">
      <div className='app_header'>
      <h1 className='app_title'>USERS CRUD</h1>
      <button onClick={handleOpenForm} className='app_btn'>Create a New User</button>
      </div>
      <div className={`form_container ${formIsClosed && 'disable_form'}`}>
        <FormUsers 
        createUsers={createUsers}
        updatedInfo={updatedInfo}
        updatedUserById={updatedUserById}
        setUpdatedInfo={setUpdatedInfo}
        setFormIsClosed={setFormIsClosed}
        />
      </div>
      <div className='cards_container'>
        {
          users?.map(user => (
            <UsersCard 
            key={user.id} 
            user={user}
            deleteUserById={deleteUserById}
            setUpdatedInfo={setUpdatedInfo}
            setFormIsClosed={setFormIsClosed}
            />
          ))
        }
      </div>
    </div>
    
  )
}

export default App

import React, { useEffect } from 'react'
import { useForm } from 'react-hook-form'
import './styles/formUsers.css'
// https://movies-crud-academlo.herokuapp.com/swagger/

const FormUsers = ({createUsers, updatedInfo, updatedUserById, setUpdatedInfo, setFormIsClosed}) => {

    
    const defaultValues = {
        email: '',
        password: '',
        first_name: '',
        last_name: '',
        birthday: ''
    }

useEffect(() => {
    if(updatedInfo){

        reset(updatedInfo)
    }
}, [updatedInfo])

const {handleSubmit, register, reset} = useForm() 

const submit = data => {
    if(updatedInfo){
        updatedUserById(updatedInfo.id, data)
        setUpdatedInfo()
    } else {
        createUsers(data)
    }
    reset(defaultValues)
    setFormIsClosed(true)
}

const handleCloseForm = () => {
    setFormIsClosed(true)
}

  return (
    <form className='form' onSubmit={handleSubmit(submit)}>
        <i onClick={handleCloseForm} className="fa-regular fa-circle-xmark"></i>
        <h2 className='form_title'>{updatedInfo ? 'Edit User' : 'New User'}</h2>
        <div className='form_div'>
            <label className='form_label_inputs' htmlFor="email">Email</label>
            <input className='form_input' placeholder='Enter your email' type="email" id='email' {...register('email')} />
        </div>
        <div className='form_div'>
            <label className='form_label_inputs' htmlFor="password">Password</label>
            <input className='form_input' placeholder='Enter your password' type="password" id='password' {...register('password')}/>
        </div>
        <div className='form_div'>
            <label className='form_label_inputs' htmlFor="first_name">First Name</label>
            <input className='form_input' placeholder='Enter your first name' type="text" id='first_name' {...register('first_name')}/>
        </div>
        <div className='form_div'>
        <label className='form_label_inputs' htmlFor="last_name">Last Name</label>
            <input className='form_input' placeholder='Enter your last name' type="text" id='last_name' {...register('last_name')}/>
        </div>
        <div className='form_div'>
            <label className='form_label_inputs' htmlFor="birth_day">Birthday</label>
            <input className='form_input' type="date" id='birth_day' {...register('birthday')}/>
        </div>
        <button className='form_btn'>{updatedInfo ? 'Edit' : 'Create'}</button>
    </form>
  )
}

export default FormUsers
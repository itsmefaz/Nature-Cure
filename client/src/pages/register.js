import React from 'react'
import { Form, Input } from 'antd'
import "../styles/registerStyles.css"
import {Link} from 'react-router-dom'

const register = () => {
  //formHandler
  const onFinishHandler = (values)=>{
    console.log(values)
  }
  return (
    <>
      <div className="form-container">
        <Form layout='vertical' onFinish={onFinishHandler} className='register-form'>
          <h3>Register form</h3>
          <Form.Item label='Name' name="name">
            <Input type='text' required/>
          </Form.Item>
          <Form.Item label='Email' name="email">
            <Input type='email' required/>
          </Form.Item>
          <Form.Item label='Password' name="password">
            <Input type='password' required/>
          </Form.Item>
          <button className='btn btn-red'><Link to='/login'>Already a user?</Link></button>
          <button className='btn btn-primary' type='submit'>Register</button>
        </Form>
      </div>
    </>
  )
}

export default register
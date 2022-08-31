import React, {useState} from 'react'

const Form = props => {
  const [firstName, setFirstName] = useState('')
  const [lastName, setLastName] = useState('')
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')


  return (
    <form className='col'>
      <label htmlFor="firstName">First Name:</label>
      <input type="text" name="firstName" id="" onChange={e => setFirstName(e.target.value)} />
      <label htmlFor="lastName">Last Name:</label>
      <input type="text" name="lastName" id="" onChange={e => setLastName(e.target.value)} />
      <label htmlFor="email">Email:</label>
      <input type="email" name="email" id="" onChange={e => setEmail(e.target.value)} />
      <label htmlFor="password">Password:</label>
      <input type="password" name="password" id="" onChange={e => setPassword(e.target.value)} />
      <label htmlFor="confirmPassword">Confirm Password:</label>
      <input type="password" name="confirmPassword" id="" onChange={e => setConfirmPassword(e.target.value)} />
      <p>First Name: {firstName}</p>
      <p>Last Name: {lastName}</p>
      <p>Email: {email}</p>
      <p>Password: {password}</p>
      <p>Confirm Password: {confirmPassword}</p>
    </form>
  )
}

Form.propTypes = {}

export default Form
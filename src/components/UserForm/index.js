import React from 'react'
import { useInputValue } from '../../hooks/useInputValue'
import { Error, Form, Input, Button, Title } from './styles'

export const UserForm = ({ disabled, error, onSubmit, title }) => {
  const email = useInputValue('')
  const password = useInputValue('')

  const handleSubmit = (event) => {
    event.preventDefault()
    onSubmit({ email, password })
  }

  return (
    <>
      <Form disabled={disabled} onSubmit={handleSubmit}>
        <Title>{title}</Title>
        <Input disabled={disabled} placeholder='email' name='email' {...email} />
        <Input disabled={disabled} placeholder='password' name='password' type='password' {...password} />
        <Button disabled={disabled}>{title}</Button>
      </Form>
      {error && <Error>{error}</Error>}
    </>
  )
}

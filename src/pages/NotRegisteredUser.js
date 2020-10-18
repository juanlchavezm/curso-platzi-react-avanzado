import React, { useContext } from 'react'
import { Context } from '../Context'
import { UserForm } from '../components/UserForm'
import { RegisterMutation } from '../container/RegisterMutation'
import { LoginMutation } from '../container/LoginMutation'
import { Layout } from '../components/Layout'

export const NotRegisteredUser = () => {
  const { activateAuth } = useContext(Context)

  return (
    <Layout title='Registrate o Inicia Sesion en la aplicacion para ver las mejores fotos de mascotas'>
      <RegisterMutation>
        {
          (register, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email: email.value, password: password.value }
              const variables = { input }
              register({ variables }).then(({ data }) => {
                const { signup } = data
                activateAuth(signup)
              })
            }
            const errorMsg = error && 'Usuario ya existe o hay algun problema'
            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Registrarse' />
          }
        }
      </RegisterMutation>
      <LoginMutation>
        {
          (login, { data, loading, error }) => {
            const onSubmit = ({ email, password }) => {
              const input = { email: email.value, password: password.value }
              const variables = { input }
              login({ variables }).then(({ data }) => {
                const { login } = data
                activateAuth(login)
              })
            }
            const errorMsg = error && 'El usuario o contraseña son incorrectos'
            return <UserForm disabled={loading} error={errorMsg} onSubmit={onSubmit} title='Iniciar Sesion' />
          }
        }
      </LoginMutation>
    </Layout>
  )
}

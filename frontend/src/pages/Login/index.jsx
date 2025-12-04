import'./style.css'
import { useContext, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import { loginCliente } from '../../api/cliente'
import { toast } from 'react-toastify'
import { AuthContext } from '../../auth/Context'

export default function Login() {
  const { login } = useContext(AuthContext)
  const navigate = useNavigate()
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')

  const handleBackClick = () => {
    navigate('/')
  }

  const handleLogin = async (e) => {
    e.preventDefault()

    try {
      const response = await loginCliente(email, senha)
      login(response.data.token)
      navigate('/clientes')
    } catch (error) {
      toast("Email ou senha inválida!")
    }
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" required value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input type="senha" id="senha" required value={senha} onChange={(e) => setSenha(e.target.value)} />
        </div>
        <p>Não possui conta? <span className="signup">Cadastre-se</span></p>
        <div className='bnts'>
          <button className="button" type="submit" onClick={handleLogin}>Entrar</button>
          <button className="button back-button" onClick={handleBackClick}>
            Voltar
          </button>
        </div>
      </form>
    </div>
  )
}
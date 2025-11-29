import { useContext, useState } from 'react';
 //import './styles.css'
import { useNavigate } from 'react-router-dom';
import { loginCliente } from '../../api/cliente';
import { AuthContext } from '../../auth/Context';
import { toast } from 'react-toastify'

export default function Login() {  
  const {login, token} = useContext(AuthContext)
  const navigate = useNavigate();
  const [email, setEmail] = useState('')
  const [senha, setSenha] = useState('')
  
  const handleBackClick = () => {
    navigate('/');
  };
  
  const handleLogin = async (e) => {
    e.preventDefault()
    try {
      const response = await loginCliente(email, senha )
      console.log()
      login(response.data.token)
      navigate('/clientes')
    } catch (error) {
      toast("email ou senha invalidos.")
    }
    
  }

  return (
    <div className="login-container">
      <form className="login-form">
        <h2>Login</h2>
        <div className="input-group">
          <label htmlFor="email">Email:</label>
          <input type="text" id="email" required value={email} onChange={(e) => setEmail(e.target.value)}/>
        </div>
        <div className="input-group">
          <label htmlFor="senha">Senha:</label>
          <input type="password" id="senha" required  value={senha}onChange={(e) => setSenha(e.target.value)}/>
        </div>
        <p>Não possui conta? <span className="signup">Cadastre-se</span></p>
        <button className="button" type="submit"
        onClick={handleLogin}
        >Entrar</button>
        <button className="button back-button" onClick={handleBackClick}>
          Voltar
        </button>
      </form>
    </div>
  );

   

}
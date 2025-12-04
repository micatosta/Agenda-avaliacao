// import './styles.css'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../auth/Context'
import { useContext } from 'react'

export default function Header() {
  const { token } = useContext(AuthContext)
  return (
    <header>
      <h1>Agenda Avaliação</h1>
      <nav>
        <Link to='/login'>
          <button>Login</button>
        </Link>
        
        {
          !token
            ? null
            : <Link to='/clientes'>
                <button>
                  Clientes
                </button>
              </Link>
        }

        <Link to='/create/cliente'>
          <button>Cadastrar</button>
        </Link>
        
        {
          !token
            ? null
            : <Link to='/create/atendimento'>
                <button>Criar Agendamento</button>
              </Link>
        }

        <Link to='/atendimento'>
          <button>Atendimentos</button>
        </Link>
      </nav>
    </header>
  )
}
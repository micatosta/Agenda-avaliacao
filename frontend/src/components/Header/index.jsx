import { Link } from 'react-router-dom'
import './styles.css'
//import { AuthContext } from '../../auth/Context'

export default function Header() {
    // pegar o token 
     const { token }  = useContext(AuthContext)
    return (
        <header>
            <h1>Minha Avaliação </h1>
            <nav>
                <Link to='/'>
                    <button>
                        Inicio
                    </button>
                </Link>
               {
                !token
                    ?null
                    :
                     <Link to='/clientes'>
                    <button>
                        Usuários
                    </button>
                </Link>
               }
                <Link to='/login'>
                    <button>
                        Login
                    </button>
                </Link>
            </nav>
        </header>
    )
}
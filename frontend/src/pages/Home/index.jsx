import { Link } from "react-router-dom"

function Home() {
    return (
        <>
            Outras informações e um
            <Link to='/Agenda-Avaliação'>
                <button>
                    Navegar para Agenda
                </button>
            </Link>
        </>
    )
}

export default Home
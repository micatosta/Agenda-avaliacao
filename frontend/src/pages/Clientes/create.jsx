import './styles.css'
import { useState } from "react"
import { createCliente } from "../../api/cliente"
import { useNavigate } from "react-router-dom"

const INITIAL_STATE = {
  nome: '',
  email: '',
  senha: ''
}

export default function createClientePage() {
  const navigate = useNavigate()

  const [cliente, setCliente] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const {id, value} = e.target
    setCliente({
      ...cliente,
      [id]: value
    })
  }

  const handleReset = (e) => {
    e.preventDefault()
    setCliente(INITIAL_STATE)
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const response = await createCliente(cliente)

    if (response.status === 201) {
      navigate('/clientes')
    }
    console.log(response)
  }

  return (
    <main>
      <form className="form">
        <div className='input-group'>
          <div>
            <label>Nome: </label>
            <input type="text" name="nome" id="nome" value={cliente.nome} onChange={handleChange} />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" name="email" id="email" value={cliente.email} onChange={handleChange} />
          </div>
          <div>
            <label>Senhaaaa: </label>
            <input type="senha" name="senha" id="senha" value={cliente.senha} onChange={handleChange} />
          </div>
        </div>

        <div className='bnts'>
          <button type="reset" onClick={handleReset}>Limpar</button>
          <button type="submit" onClick={handleSave}>Enviar</button>
        </div>
      </form>
    </main>
  )
}
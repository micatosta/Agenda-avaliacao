
import { useEffect, useState } from "react"
import { updateCliente } from "../../api/cliente"
import { useLocation, useNavigate } from "react-router-dom"

export default function updateClientePage() {
  const navigate = useNavigate()

  const [cliente, setCliente] = useState({
    nome: '',
    email: '',
    senha: ''
  })

  const location = useLocation()
  const { cliente: prevCliente } = location.state

  const handleChange = (e) => {
    const {id, value} = e.target
    setCliente({
      ...cliente,
      [id]: value
    })
  }

  const handleReset = (e) => {
    e.preventDefault()
    setCliente({...prevCliente, senha: ''})
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const response = await updateCliente(prevCliente.id, cliente)

    if (response.status === 200) {
      navigate('/customers')
    } else {
      console.log(response)
    }
  }

  useEffect(() => {
    setCliente({ ...prevCliente, senha: '' })
  }, [])

  return (
    <main>
      <form className="form-update">
        <div className='input-group'>
          <div>
            <label>Nome: </label>
            <input type="text" name="nome" id="nome" value={cliente.name} onChange={handleChange} />
          </div>
          <div>
            <label>Email: </label>
            <input type="email" name="email" id="email" value={cliente.email} onChange={handleChange} />
          </div>
          <div>
            <label>Senha: </label>
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
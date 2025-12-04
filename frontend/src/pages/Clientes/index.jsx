import { useEffect, useState } from 'react'
import { deleteCliente, getClientes } from '../../api/cliente'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Clientes() {
  const [ clientes, setClientes ] = useState([])
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    const response = await deleteCliente(id)

    if (response.status !== 204) {
      toast("Erro ao deletar, tentar novamente mais tarde.")
      return
    }

    setClientes(prev => prev.filter(cliente => cliente.id !== id))
  }

  const handleUpdate = async (cliente) => {
    navigate('/update/cliente', { state: { cliente } })
  }

  useEffect(() => {
    async function carregar() {
      const allClientes = await getClientes()
      setClientes(allClientes)
    }
    carregar()
  }, [])

  return (
    <main>
      <div className='list-group'>
        <Link to={'/create/cliente'}>
          <button className='bnt-create'>Criar</button>
        </Link>
        <div className='header'>
          <label>Nome</label>
          <label>Email</label>
          <label>Ações</label>
        </div>
        {
          clientes.length == 0
            ? <>Não tem ninguém</>
            : clientes.map(cliente =>
              <div className='list-items' key={cliente.id}>
                <label>{ cliente.name }</label>
                <label>{ cliente.email }</label>
                <div className='actions'>
                  <button type='button' onClick={() => handleUpdate(cliente)}>Alterar</button>
                  <button type='button' onClick={() => handleDelete(cliente.id)}>Deletar</button>
                </div>
              </div>)
        }
      </div>
    </main>
  )
}

export default Clientes
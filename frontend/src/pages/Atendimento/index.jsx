import './styles.css'
import { useEffect, useState } from 'react'
import { deleteAtendimento, getAtendimentos } from '../../api/atendimentos'
import { Link, useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'

function Atendimentos() {
  const [ atendimentos, setAtendimentos ] = useState([])
  const navigate = useNavigate()

  const handleDelete = async (id) => {
    const response = await deleteAtendimento(id)

    if (response.status !== 204) {
      toast("Erro ao deletar, tentar novamente mais tarde.")
      return
    }

    setAtendimentos(prev => prev.filter(atendimento => atendimento.id !== id))
  }

  const handleUpdate = async (atendimento) => {
    navigate('/update/atendimento', { state: { atendimento } })
  }

  useEffect(() => {
    async function carregar() {
      const allAtendimentos = await getAtendimentos()
      setAtendimentos(allAtendimentos)
    }
    carregar()
  }, [])

  return (
    <main>
      <div className='list-group'>
        <Link to={'/create/atendimento'}>
          <button className='bnt-create'>Criar</button>
        </Link>
        <div className='header'>
          <label>Dia</label>
          <label>Horário</label>
          <label>Valor</label>
          <label>Ações</label>
        </div>
        {
          atendimentos.length == 0
            ? <>Não tem ninguém</>
            : atendimentos.map(atendimento =>
              <div className='list-items' key={atendimento.id}>
                <label>{ atendimento.dia }</label>
                <label>{ atendimento.hora }</label>
                <label>R$ { atendimento.valor }</label>
                <div className='actions'>
                  <button type='button' onClick={() => handleUpdate(atendimento)}>Alterar</button>
                  <button type='button' onClick={() => handleDelete(atendimento.id)}>Deletar</button>
                </div>
              </div>)
        }
      </div>
    </main>
  )
}

export default Atendimentos
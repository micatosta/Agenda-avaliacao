import './styles.css'
import { useState } from "react"
import { createAtendimento } from "../../api/atendimentos"
import { useNavigate } from "react-router-dom"
import { toast } from 'react-toastify'

const INITIAL_STATE = {
  dia: '',
  hora: '',
  valor: '',
  concluido: false
}

export default function createAtendimento() {
  const navigate = useNavigate()
  const [atendimento, setAtendimento] = useState(INITIAL_STATE)

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setAtendimento({ 
      ...atendimento, 
      [id]: type === 'checkbox' ? checked : value
    })
  }

  const handleSave = async (e) => {
    e.preventDefault()
    try {
      await createAtendimento(atendimento)
      toast.success("Atendimento criado!")
      navigate('/atendimentos')
    } catch (error) {
      console.log(error)
      toast.error("Erro ao criar.")
    }
  }

  return (
    <main className="container">
      <form className="form-card">
        <h2>Atendimento</h2>
        <div className="input-group">
          <label>Dia</label>
          <input type="dia" id="dia" value={atendimento.dia} onChange={handleChange} required />
          
          <label>Hora</label>
          <input type="hora" id="hora" value={atendimento.hora} onChange={handleChange} required />
          
          <label>Valor (R$)</label>
          <input type="number" id="valor" value={atendimento.valor} onChange={handleChange} required />
          
          <div className='check'>
            <label>Concluído</label>
            <input type="checkbox" id="concluido" checked={atendimento.concluido} onChange={handleChange} />
          </div>
        </div>
        <div>
          <button type="submit" onClick={handleSave}>Enviar</button>
        </div>
      </form>
    </main>
  )
}
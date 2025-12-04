import './styles.css'
import { useEffect, useState } from "react"
import { updateAtendimento } from "../../api/atendiemnto"
import { useLocation, useNavigate } from "react-router-dom"

export default function UpdateAtendimento() {
  const navigate = useNavigate()

  const [atendimento, setAtendimento] = useState({
    dia: '',
    hora: '',
    valor: '',
    concluido: false
  })

  const location = useLocation()
  const { atendimento: prevAtendimento } = location.state

  const handleChange = (e) => {
    const { id, value, type, checked } = e.target
    setAtendimento({ 
      ...atendimento, 
      [id]: type === 'checkbox' ? checked : value
    })
  }

  const handleReset = (e) => {
    e.preventDefault()
    setAtendimento({...prevAtendimento, dia: '', hora:'', valor:''})
  }

  const handleSave = async (e) => {
    e.preventDefault()
    const response = await updateAtendimento(prevAtendimento.id, atendimento)

    if (response.status === 200) {
      navigate('/atendimentos')
    } else {
      console.log(response)
    }
  }

  useEffect(() => {
    setAtendimento({ ...prevAtendimento})
  }, [])

  return (
    <main>
      <form className="form-update">
        <h2>Alterar</h2>
        <div className='input-group'>
        <label>Dia</label>
          <input type="dia" id="dia" value={atendimento.dia} onChange={handleChange} required />
          
          <label>Hora</label>
          <input type="hora" id="hora" value={atendimento.hora} onChange={handleChange} required />
          
          <label>Valor (R$)</label>
          <input type="number" id="valor" value={atendimento.valor} onChange={handleChange} required />
          
          <div className='check'>
            <label>Concluído?</label>
            <input type="checkbox" id="concluido" checked={atendimento.concluido} onChange={handleChange} />
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
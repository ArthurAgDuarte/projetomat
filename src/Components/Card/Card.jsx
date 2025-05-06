import { useNavigate } from 'react-router-dom'
import './Card.css'

export default function Card({titulo, link, imagem}) {
//   const [count, setCount] = useState(0)
const navigate = useNavigate();

const handleClick = () =>{
    navigate(link)
} 
  return (
    <>
      <div className="card">
        <h2 className='nome'>{titulo}</h2>
        <img src={imagem} alt="" className="imagem" />
        <p className='descricao'>Clique aqui para acessar o conteúdo sobre {titulo}</p>
        <button onClick= {handleClick} className="botao-link"> 
            {titulo}
        </button>
      </div>
    </>
  )
}

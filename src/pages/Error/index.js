import { Link } from 'react-router-dom'
import { Logo } from '../../components/Logo'
import './index.css'

export default function Error(){
  return(
    <div className="error">
      <Logo />
      <h1>Page not found!</h1>
      <p>The page you are looking for does not exist!</p>

      <Link to={'/'} className="link">
        Voltar para Home!
      </Link>
    </div>
  )
}

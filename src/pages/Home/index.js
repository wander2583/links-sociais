import { Social } from '../../components/Social'
import {
  FaFacebook,
  FaInstagram,
  FaYoutube
} from 'react-icons/fa'
import './home.css'

export default function Home(){
  return(
    <div className="home-container">
      <h1>Wanderlei Pereira</h1>
      <span>👇Veja meus links👇</span>

      <main className="links">

        <section className="link-area">
          <a href="#">
            <p className="link-text">Canal do Telegram</p>
          </a>
        </section>

        <section className="link-area">
          <a href="#">
            <p className="link-text">Twitter</p>
          </a>
        </section>

        <section className="link-area">
          <a href="#">
            <p className="link-text">Koo</p>
          </a>
        </section>

        <footer>

          <Social url="https://facebook.com/wander.rodrigo.pe/">
            <FaFacebook size={35} color="#FFF" /> 
          </Social>
          <Social url="https://www.instagram.com/wanderlei.rodrigo/">
            <FaInstagram size={35} color="#FFF" />
          </Social>
          <Social url="https://www.youtube.com/channel/UC9RcBlILByiYZngE-rw6m7Q">
            <FaYoutube size={35} color="#FFF" />
          </Social>

        </footer>

      </main>

    </div>
  )
}

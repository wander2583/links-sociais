import { Social } from '../../components/Social'
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
          <Social>
          
          </Social>
        </footer>

      </main>

    </div>
  )
}

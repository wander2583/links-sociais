import { useState } from "react";
import { Header } from "../../components/Header";
import { Input } from "../../components/input";
import { Logo } from "../../components/Logo";
import { MdAddLink } from "react-icons/md"
import { FiTrash2 } from "react-icons/fi"

import './admin.css'



export default function Admin(){
  const [nameInput, setNameInput] = useState("");
  const [urlInput, setUrlInput] = useState("");
  const [backgroundColorInput, setBackgroundColorInput] = useState("#f1f1f1");
  const [textColorInput, setTextColorInput] = useState("#121212");

  return(
    <div className="admin-container">
      <Header />
      <Logo/>
      <form className="form">
        <label className="label">Nome do Link</label>
        <Input 
          placeholder="Nome do seu link..."
          value={nameInput}
          onChange={ (e) => setNameInput(e.target.value) }  
          />
        <label className="label">Url do link</label>
        <Input
          type="url"
          placeholder="Digite a url..."
          value={urlInput}
          onChange={ (e) => setUrlInput(e.target.value) }
          />
        <section className="container-colors">

          <div>
            <label className="label right">Fundo do Link</label>
            <input
              type="color"
              value={backgroundColorInput}
              onChange={ (e) => setBackgroundColorInput(e.target.value) }
              />
          </div>  

          <div>
            <label className="label right">Cor do Link</label>
            <input
              type="color"
              value={textColorInput}
              onChange={ (e) => setTextColorInput(e.target.value) }
              />
          </div>
        </section>

        { nameInput !== '' && (
          <div className="preview">
            <label className="label">Veja como esta ficando </label>
            <article className="list" style={{ marginTop: 8, backgroundColor: backgroundColorInput }}>
              <p style={{ color: textColorInput }} >{nameInput}</p>
            </article>
          </div>
        )}

        <button className="btn-register" type="submit">
          Cadastrar <MdAddLink size={24} color="#FFF" />
        </button>
      </form>

      <h2 className="title">
        Meus Links
      </h2>

      <article 
        className="list animate-pop"
        style={{ backgroundColor: "#000", color: "#FFF" }}
      >
        <p>Grupo Exclusivo do Telegram</p>
        <div>
          <button className="btn-delete">
            <FiTrash2 size={18} color="#FFF" />
          </button>
        </div>
      </article>
    </div>
  )
}

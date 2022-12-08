import { useState } from 'react'
import { Logo } from '../../components/Logo'

import './login.css'

export default function Login(){

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  function handleLogin(e){
    e.preventDefault();
    console.log(email)
    console.log(password)
  }
  return(
    <div className="login-container">

      <Logo/>

      <form className="form" onSubmit={handleLogin} >

        <input
          type="email"
          placeholder="Digite seu email"
          value={email}
          onChange={ (e) => setEmail(e.target.value) }
          />

        <input
          type="password"
          placeholder="***********"
          autoComplete="on"
          value={password}
          onChange={ (e) => setPassword(e.target.value) }
          />

        <button type="submit">Acessar</button>

      </form>
    </div>
  )
}

'use client'
import Link from 'next/link';
import { useState } from "react";

function cadastrar() {
  const [nome, setNome] = useState("");
  const [email, setEmail] = useState("");
  const [cidade, setcidade] = useState("");
  const [senha, setSenha] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log({ nome, email, senha });
  };

  return (

   

    <form onSubmit={handleSubmit}>

      <p>Cadastro de Autor</p>
      
      <label>
        Nome:
        <input type="text" value={nome} onChange={(e) => setNome(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        Email:
        <input type="email" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        cidade:
        <input type="cidade" value={email} onChange={(e) => setEmail(e.target.value)} />
      </label>
      <br />
      <br />
      <label>
        Senha:
        <input type="password" value={senha} onChange={(e) => setSenha(e.target.value)} />
      </label>
      <br />
      <br />
      <button type="submit">Cadastrar</button>
      
                                
      <Link href="/">Pagina principal</Link>

       
    </form>
    
  );
}

export default cadastrar;
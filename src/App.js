import React, { useEffect, useState } from 'react';

import './style.css';

//  https://sujeitoprogramador.com/rn-api/?api=posts


function App() {

  const [nutri, setNutri] = useState([]);

  useEffect(() => {
    function loadApi() {
      let url = 'https://sujeitoprogramador.com/rn-api/?api=posts';

      fetch(url)
      // o fetch faz as requisições http
      // nos parametros passamos qual a url que queremos fazer a requisição

      // promise: caso de sucesso. Vai fazer a requisição, se der certo cai no then
      // ele recebe um resultado. Esse resultado a gente tem que transformar ele em json, para podermos trabalhar com ele
      .then((resultado) => resultado.json())
      // ele também vai enviar uma promise também
      // eu vou ter todo o resultado dentro da variável json
      .then((json) => {
        console.log(json);
        // o console.log vai mostrar todo o conteúdo da nossa api

        // setar a nossa state, ou seja, colocar tudo o que está na api em uma veriável
        setNutri(json);
        // agora a gente pode usar os valores dessa state na nossa aplicação
      })
    }

    loadApi();

  }, []);
  // quando abrir o nosso site essa função que está dentro do useEffect vai ser chamada


  return (
    <div className="container">
      <header>
        <strong>React Nutri</strong>
      </header>
      {/* a gente faz um map para percorrer todos os itens que estavam dentro do array */}
      {nutri.map((item) => {
        return (
          // o primeiro item tem que ter uma key para o react saber qual que é cada item
          <article key={item.id} className='post'>
            <strong className='titulo'>{item.titulo}</strong>
            <img src={item.capa} alt={item.titulo} className='capa'/>
            <p className='subtitulo'>{item.subtitulo}</p>
            {/* <h1>Categoria: {item.categoria}</h1> */}
            <a className='botao'>Acessar</a>

          </article>
        )
      })}
    </div>
  );
}

export default App;

import React, { useEffect } from 'react';
import './App.css';
import axios from 'axios';



export type User = {
  [key: string]: string;
}
function App() {
  const [banco,setBanco] = React.useState<User>({});


  useEffect(() => {
    axios.get('https://toptank-6fe9f-default-rtdb.firebaseio.com/ranking.json')
    .then((response) => {
      setBanco(response.data);
    })

  },[])


  return (
    <div className='container'> 
    <h1>Jogo <small>Zombie</small></h1>
      {Object.keys(banco).map((key) => {
        return (
          <div className='formulario'>
            <table>
              <tr>
            <th>Nome: {key}</th>
            <th>Pontuação: {banco[key]}</th>
            </tr>
            </table>
          </div>
        )
      })}
      <a href='https://bucolic-buttercream-33e5fb.netlify.app'><button>Jogar</button></a>
    </div>
);
}

export default App;

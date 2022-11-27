import Chute from './Chute';
import Jogo from './Jogo'
import Letras from './Letras';
import palavras from '../palavras'
import React from 'react'

let palavraFake = ''
palavras.sort(comparador);
  function comparador() {
    return Math.random() - 0.5;
  }
  let palavra = Array.from(palavras[0])
export default function App() {
  
  const [comecou, setComecou] = React.useState(true)
  const [palavraVisual, setPalavraVisual] = React.useState('')
  const [erros, setErros] = React.useState(0)
  
  function comecar() {
    setComecou(false)
    for(let i = 0; i<palavra.length; i++){
      palavraFake += '_'
    }
    setPalavraVisual(palavraFake)
  }
  function clicar(letra){
      let indexes = [];
      for (let i = 0; i < palavra.length; i++){
        if(letra==palavra[i]){
          indexes.push(i)
        }      
      }
      console.log('palavra: ' + palavra.join(''))
      if(indexes.length!==0){
        let arrTemp = Array.from(palavraFake)
        for(let i = 0; i<indexes.length; i++){
          arrTemp[indexes[i]] = letra; 
        }
        palavraFake = arrTemp.join('')
        setPalavraVisual(palavraFake)
      } else{
        setErros(erros + 1)
      }
  }
  return (
    <>
      <Jogo erros={erros} comecou={!comecou} palavra={palavraVisual} funComecar={comecar} />
      <Letras funClicar={clicar} comecou={comecou} />
      <Chute comecou={comecou} />
    </>
  );
}
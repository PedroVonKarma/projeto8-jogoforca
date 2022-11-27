import Chute from './Chute';
import Jogo from './Jogo'
import Letras from './Letras';
import palavras from '../palavras'
import React from 'react'



let palavraFake = ''
let palavra;
let resetar = false;
export default function App() {
  // FUNÇÕES PARA RECARREGAR PAGINA
  window.onload = function() {
    var reloading = sessionStorage.getItem("reloading");
    if (reloading) {
        sessionStorage.removeItem("reloading");
        comecar();
    }
  }
  
  function reloadP() {
    sessionStorage.setItem("reloading", "true");
    document.location.reload();
  }
  //FUNÇÕES PARA RECARREGAR PAGINA

  const [comecou, setComecou] = React.useState(true)
  const [palavraVisual, setPalavraVisual] = React.useState('')
  const [erros, setErros] = React.useState(0)
  const [classe, setClasse] = React.useState('')
  const [chute, setChute] = React.useState('')

  function terminar() {
    if (erros === 5) {
      setClasse('vermelho')
      setComecou(true)
      setPalavraVisual(palavra)
      resetar = true
    }
    if (palavraFake === palavra.join('')) {
      setClasse('verde')
      setComecou(true)
      resetar = true
    }
    
  }
  function mudarInput(e){
    setChute(e.target.value)
  }
  function adivinhar(){
    if(palavra.join('')==chute.toLowerCase()){
      setClasse('verde')
      setPalavraVisual(palavra)
      setComecou(true)
      resetar = true
    } else{
      setClasse('vermelho')
      setComecou(true)
      setPalavraVisual(palavra)
      resetar = true
      setErros(6)
    }
  }

  function comecar() {
    if(resetar){
      resetar = false
      reloadP();
    }
    palavras.sort(comparador);
    function comparador() {
      return Math.random() - 0.5;
    }
    palavra = Array.from(palavras[0])
    setComecou(false)
    palavraFake = '';
    for (let i = 0; i < palavra.length; i++) {
      palavraFake += '_'
    }
    setPalavraVisual(palavraFake)
    setErros(0)
  }
  function clicar(letra) {
    let indexes = [];
    for (let i = 0; i < palavra.length; i++) {
      if (letra == palavra[i]) {
        indexes.push(i)
      }
    }
    if (indexes.length !== 0) {
      let arrTemp = Array.from(palavraFake)
      for (let i = 0; i < indexes.length; i++) {
        arrTemp[indexes[i]] = letra;
      }
      palavraFake = arrTemp.join('')
      setPalavraVisual(palavraFake)
    } else {
      setErros(erros + 1)
    }
    terminar();
    
    
  }
  return (
    <>
      <Jogo data={palavra.join('')} classe={classe} erros={erros} comecou={!comecou} palavra={palavraVisual} funComecar={comecar} />
      <Letras funClicar={clicar} comecou={comecou} />
      <Chute adivinhar={adivinhar} chute={chute} mudarInput={mudarInput} comecou={comecou} />
    </>
  );
}
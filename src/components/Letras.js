import React from "react";
export default function Letras(props){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <div className="letras">
            {alfabeto.map((l) => <Letra fun={() => props.funClicar(l)} comecou={props.comecou} key={l} letra={l}/>)}
        </div>
    );
}

function Letra(props){
    const [disabled, setDisabled] = React.useState (false)
    function desabilitar(){
        setDisabled(true)
    }
    return (
        <button disabled={props.comecou || disabled} onClick={() => {props.fun(); desabilitar();}} className={(props.comecou || disabled) ? 'selecionado' : 'nselecionado'}>{props.letra}</button>
    )
}



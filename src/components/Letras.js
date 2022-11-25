export default function Letras(){
    const alfabeto = ["a", "b", "c", "d", "e", "f", "g", "h", "i", "j", "k", "l", "m", "n", "o", "p", "q", "r", "s", "t", "u", "v", "w", "x", "y", "z"]

    return (
        <div className="letras">
            {alfabeto.map((l) => <Letra letra={l}/>)}
        </div>
    );
}

function Letra(props){
    return (
        <button className="nselecionado">{props.letra}</button>
    )
}
export default function Chute(props){
    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input data-test="guess-input" disabled={props.comecou} value={props.chute} onChange={props.mudarInput}/>
            <button data-test="guess-button" onClick={props.adivinhar} disabled={props.comecou}>Chutar</button>
            </div>
    );
}
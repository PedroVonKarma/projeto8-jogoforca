export default function Chute(props){
    return (
        <div className="chute">
            <p>Já sei a palavra!</p>
            <input disabled={props.comecou}/>
            <button disabled={props.comecou}>Chutar</button>
            </div>
    );
}
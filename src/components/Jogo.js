export default function Jogo(props){
    return (
        <div className="jogo">
            <img src={`assets/forca${props.erros}.png`} alt='Imagem da Forca'></img>
            <div className='right'><button onClick={props.funComecar} disabled={props.comecou}>Escolher Palavra</button><p className={props.classe}>{props.palavra}</p></div>
        </div>
    );
}

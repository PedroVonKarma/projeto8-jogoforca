export default function Jogo(props){
    return (
        <div className="jogo">
            <img data-test="game-image" src={`assets/forca${props.erros}.png`} alt='Imagem da Forca'></img>
            <div className='right'><button data-test="choose-word" onClick={props.funComecar} disabled={props.comecou}>Escolher Palavra</button><p data-test="word" data-answer={props.data} className={props.classe}>{props.palavra}</p></div>
        </div>
    );
}

import Botao from "../Botao";
import Relogio from "./Relogio";
import style from './Cronometro.module.scss';
import { tempoParaSegundos } from "../../common/utils/date";

function Cronometro() {
    console.log('Conversão :',tempoParaSegundos("01:30:25"))
    return (
        <div className={style.cronometro}>
            <p className={style.titulo}>Escolha um card para iniciar o Cronômetro</p>
            <div className={style.relogioWrapper}>
                <Relogio />
            </div>
            <Botao>Começar!</Botao>
        </div>
    );
}

export default Cronometro;
import { ITarefa } from '../../../Types/tarefa';
import style from '../listaTarefas.module.scss';

function Item({ tarefa, tempo, completado, selecionado, id }: ITarefa) {
    return (
        <li className={style.item}>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item;
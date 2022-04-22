import { ITarefa } from '../../../Types/tarefa';
import style from '../listaTarefas.module.scss';

interface Props extends ITarefa {
    selecionaTarefa: (tarefaSelecionada: ITarefa) => void
}

function Item({
    tarefa,
    tempo,
    completado,
    selecionado,
    id,
    selecionaTarefa
}: Props) {
    return (
        <li className={style.item}
            onClick={() => selecionaTarefa({
                tarefa,
                tempo,
                completado,
                selecionado,
                id
            })
            }>
            <h3>{tarefa}</h3>
            <span>{tempo}</span>
        </li>
    )
}

export default Item;
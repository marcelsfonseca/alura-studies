import * as React from 'react';
import { ITarefa } from '../../Types/tarefa';
import Item from './Item';
import style from './listaTarefas.module.scss'

function Lista({ tarefas }: { tarefas: ITarefa[] }) {

    return (
        <aside className={style.listaTarefas}>
            <h2 >Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (<Item key={index} {...item} />))}
            </ul>

        </aside>
    )
}

export default Lista;
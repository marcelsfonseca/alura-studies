import * as React from 'react';
import Item from './Item';
import style from './listaTarefas.module.scss'

function Lista() {
    const [tarefas, setTarefas] = React.useState([{
        tarefa: 'React',
        tempo: '02:00:00'
    }, {
        tarefa: 'JavaScript',
        tempo: '01:00:00'
    }])
    return (
        <aside className={style.listaTarefas}>
            <h2 onClick={() => { setTarefas([...tarefas, { tarefa: "Estudar estado", tempo: "05:00:00" }]) }}>Estudos do Dia</h2>
            <ul>
                {tarefas.map((item, index) => (<Item key={index} {...item} />))}
            </ul>

        </aside>
    )
}

export default Lista;
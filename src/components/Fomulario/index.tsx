import * as React from 'react';
import Botao from '../Botao';

class Formulario extends React.Component {
    state = {}
    render() {
        return (
            <form action="">
                <div>
                    <label htmlFor='tarefa'>
                        Adicione um novo estudo
                    </label>
                    <input type="text" name='tarefa' id='tarefa' placeholder='O que vc quer esdutar' required /></div>
                <div>
                    <label>

                    </label>
                    <input type="time" /></div>
                <Botao />
            </form>
        );
    }
}

export default Formulario;
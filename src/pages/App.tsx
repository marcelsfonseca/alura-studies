import React from 'react';
import Cronometro from '../components/Cronometro';
import Formulario from '../components/Fomulario';
import Lista from '../components/Lista';
import { ITarefa } from '../Types/tarefa';
import style from './App.module.scss';

function App() {
  const [tarefas, setTarefas] = React.useState<ITarefa[]|[]>([])
  return (
    <div className={style.AppStyle}>
      <Formulario setTarefas={setTarefas}/>
      <Lista tarefas={tarefas}/>
      <Cronometro />
    </div>
  );
}

export default App;

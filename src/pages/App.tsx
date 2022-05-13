import { useState } from "react";
import Cronometro from "../Components/Cronometro";
import Formulario from "../Components/Formulario";
import Lista from "../Components/Lista";
import { ITask } from "../Types/task";
import styles from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  const [selecionado, setSelecionado] = useState<ITask>();
 
  function selecionarTask(taskSelecionada: ITask) {
    setSelecionado(taskSelecionada);
    setTasks(tasksAnteriores => tasksAnteriores.map(task => ({
      ...task,
      selecionado: task.id === taskSelecionada.id ? true: false
    })))
  }

  return (
    <div className={styles.AppStyle}>
      <Formulario setTasks={setTasks}/>
      <Lista 
      selecionarTask={selecionarTask}
      tasks={tasks}/>
      <Cronometro/>
    </div>
  );
}

export default App;

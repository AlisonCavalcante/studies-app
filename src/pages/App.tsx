import { useState } from "react";
import Cronometro from "../Components/Cronometro";
import Formulario from "../Components/Formulario";
import Lista from "../Components/Lista";
import { ITask } from "../Types/task";
import styles from './App.module.scss';

function App() {
  const [tasks, setTasks] = useState<ITask[]>([]);
  return (
    <div className={styles.AppStyle}>
      <Formulario setTasks={setTasks}/>
      <Lista tasks={tasks}/>
      <Cronometro/>
    </div>
  );
}

export default App;

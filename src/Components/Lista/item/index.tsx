import { ITask } from "../../../Types/task";
import styles from "./Item.module.scss";

interface Props extends ITask {
  selecionarTask: (taskSelecionada: ITask) => void;
}

export default function Item({
  task,
  time,
  selecionado,
  completado,
  id,
  selecionarTask,
}: Props) {
  
  return (
    <li
      className={
        `${styles.item}
         ${selecionado ? styles.itemSelecionado : ''}
         ${completado ? styles.itemCompletado : ''}
         `}
      onClick={() => ! completado &&
        selecionarTask({
          task,
          time,
          selecionado,
          completado,
          id,
        })
      }
    >
      <h3>{task}</h3>
      <span>{time}</span>
      {completado && <span className={styles.concluido}
      aria-label="tarefa completada"
      ></span>}
    </li>
  );
}

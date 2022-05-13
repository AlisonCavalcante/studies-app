import { ITask } from "../../../Types/task";
import styles from "../Lista.module.scss";

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
  console.log("O item atual é:", { task, time, selecionado, completado, id });

  return (
    <li
      className={`${styles.item} ${selecionado ? styles.itemSelecionado : ''}`}
      onClick={() =>
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
    </li>
  );
}

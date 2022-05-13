import React, { useState } from "react";
import { ITask } from "../../Types/task";
import Item from "./item";
import styles from "./Lista.module.scss";

interface Props {
  tasks: ITask[];
  selecionarTask: (taskSelecionada: ITask) => void;
}

function Lista({ tasks, selecionarTask }: Props) {
  return (
    <aside className={styles.listaTarefas}>
      <h2>Estudos do dia</h2>
      <ul>
        {tasks.map((item) => (
          <Item
            // tasks={item.tasks} Um forma de passar o props
            // time={item.time}
            selecionarTask={selecionarTask}
            key={item.id}
            {...item} // Segunda Forma, desestruturando o objeto item e pegando todas as Keys dele
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;

import React, { useState } from "react";
import { ITask } from "../../Types/task";
import Item from "./item";
import styles from "./Lista.module.scss";


function Lista({tasks}:{ tasks: ITask[]}) {
 
  return (
    <aside className={styles.listaTarefas}>
      <h2>
        Estudos do dia
      </h2>
      <ul>
        {tasks.map((item, index) => (
          <Item
            // tasks={item.tasks} Um forma de passar o props
            // time={item.time}
            key={index}
            {...item} // Segunda Forma, desestruturando o objeto item e pegando todas as Keys dele
          />
        ))}
      </ul>
    </aside>
  );
}

export default Lista;

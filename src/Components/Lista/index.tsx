import React, { useState } from "react";
import Item from "./item";
import styles from "./Lista.module.scss";

function Lista() {
  const [tasks, setTasks] = useState([
    {
      tasks: "React",
      time: "02:00:00",
    },
    {
      tasks: "Angular",
      time: "01:00:00",
    },
  ]);

  return (
    <aside className={styles.listaTarefas}>
      <h2
        onClick={() => {
          setTasks([...tasks, { tasks: "Redux", time: "05:00:00" }]);
        }}
      >
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

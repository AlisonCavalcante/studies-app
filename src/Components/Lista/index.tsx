import React from "react";
import './styles.scss';

function Lista() {
  const tasks = [
    {
      tasks: "React",
      time: "02:00:00",
    },
    {
      tasks: "Angular",
      time: "01:00:00",
    },
  ];

  return (
    <aside className="listaTarefas">
      <h2>Estudos do dia</h2>
      <ul>
          {tasks.map((item, index) => (
              <li key={index} className="item">
                  <h3>{item.tasks}</h3>
                  <span>{item.time}</span>
              </li>
          ))}
      </ul>
    </aside>
  );
}

export default Lista;

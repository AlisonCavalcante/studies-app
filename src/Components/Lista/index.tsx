import React from "react";

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
    <aside>
      <h2>Estudos do dia</h2>
      <ul>
          {tasks.map((item, index) => (
              <li key={index}>
                  <h3>{item.tasks}</h3>
                  <span>{item.time}</span>
              </li>
          ))}
      </ul>
    </aside>
  );
}

export default Lista;

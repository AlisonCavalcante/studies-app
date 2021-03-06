import React from "react";
import { ITask } from "../../Types/task";
import Botao from "../Botao";
import styles from "./Formulario.module.scss";
import {v4 as uuidv4} from 'uuid';

class Formulario extends React.Component<{
  setTasks: React.Dispatch<React.SetStateAction<ITask[]>>
}> {

  state = {
    task: "",
    time: "00:00",
  };

  adicionarTarefa(evento: React.FormEvent) {
    evento.preventDefault();
    this.props.setTasks(tasksAntigas => 
      [...tasksAntigas, 
        {...this.state,
          selecionado: false,
          completado: false,
          id: uuidv4() 
        }
      ])
    this.setState({
      task: "",
      time: "00:00"
    })
  }

  render() {
    return (
      <form
        className={styles.novaTarefa}
        onSubmit={this.adicionarTarefa.bind(this)}
      >
        <div className={styles.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.task}
            onChange={(evento) =>
              this.setState({ ...this.state, task: evento.target.value })
            }
            id="tarefa"
            placeholder="O que você quer estudar?"
            required
          ></input>
        </div>
        <div className={styles.inputContainer}>
          <label htmlFor="tempo">Tempo</label>
          <input
            type="time"
            step="1"
            name="tempo"
            value={this.state.time}
            onChange={(evento) =>
              this.setState({ ...this.state, time: evento.target.value })
            }
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          ></input>
        </div>
        <Botao type="submit" texto="Adicionar" />
      </form>
    );
  }
}

export default Formulario;

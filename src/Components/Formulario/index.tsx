import React from "react";
import Botao from "../Botao";
import styles from "./Formulario.module.scss";

class Formulario extends React.Component {
  state = {
    task: "",
    time: "00:00",
  };

  adicionarTarefa(evento: React.FormEvent){
    evento.preventDefault();
    console.log('states', this.state)
  }

  render() {
    return (
      <form className={styles.novaTarefa} onSubmit={this.adicionarTarefa.bind(this)}>
        <div className={styles.inputContainer}>
          <label htmlFor="tarefa">Adicione um novo estudo</label>
          <input
            type="text"
            name="tarefa"
            value={this.state.task}
            onChange={evento => this.setState({...this.state, task: evento.target.value})}
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
            onChange={evento => this.setState({...this.state, time: evento.target.value})}
            id="tempo"
            min="00:00:00"
            max="01:30:00"
            required
          ></input>
        </div>
        <Botao texto="Adicionar" />
      </form>
    );
  }
}

export default Formulario;

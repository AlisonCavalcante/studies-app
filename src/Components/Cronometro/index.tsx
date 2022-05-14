import Botao from "../Botao";
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss";
import tempoParaSegundos from "../../common/utils/time";
import { ITask } from "../../Types/task";
import { useEffect, useState } from "react";

interface Props {
  selecionado: ITask | undefined;
  finalizarTask: () => void;
}

export default function Cronometro({ selecionado, finalizarTask }: Props) {
  const [tempo, setTempo] = useState<number>(
    tempoParaSegundos(String(selecionado?.time))
  );

  useEffect(() => {
    if (selecionado?.time) {
      setTempo(tempoParaSegundos(selecionado.time));
    }
  }, [selecionado]);

  function regressiva (contador: number = 0) {
    setTimeout(() => {
      if(contador > 0) {
        setTempo(contador -1);
        return regressiva(contador -1);
      }
      finalizarTask();
    }, 1000)
  } 

  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <div className={styles.relogioWrapper}>
        <Relogio tempo={tempo} />
      </div>
      <Botao onClick={()=> regressiva(tempo)} texto="Começar!" />
    </div>
  );
}

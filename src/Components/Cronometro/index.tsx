import Botao from "../Botao";
import Relogio from "./Relogio";
import styles from "./Cronometro.module.scss";
import tempoParaSegundos from "../../common/utils/time";
import { ITask } from "../../Types/task";
import { useEffect, useState } from "react";

interface Props {
  selecionado: ITask | undefined;
}

export default function Cronometro({ selecionado }: Props) {
  const [tempo, setTempo] = useState<number>(
    tempoParaSegundos(String(selecionado?.time))
  );
  useEffect(() => {
    if (selecionado?.time) {
      setTempo(tempoParaSegundos(selecionado.time));
    }
  }, [selecionado]);
  return (
    <div className={styles.cronometro}>
      <p className={styles.titulo}>Escolha um card e inicie o cronômetro</p>
      <p>{tempo}</p>
      <div className={styles.relogioWrapper}>
        <Relogio />
      </div>
      <Botao texto="Começar!" />
    </div>
  );
}

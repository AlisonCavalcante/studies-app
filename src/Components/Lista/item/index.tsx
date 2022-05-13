import { ITask } from '../../../Types/task'
import styles from '../Lista.module.scss'

export default function Item({task, time, selecionado, completado, id}: ITask) {
    console.log('O item selecionado é:',{task, time, selecionado, completado, id})
    return (
        <li  className={styles.item}>
        <h3>{task}</h3>
        <span>{time}</span>
    </li>
    )
}
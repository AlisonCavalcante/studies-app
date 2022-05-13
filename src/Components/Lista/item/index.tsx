import styles from '../Lista.module.scss'

export default function Item({task, time}: {task: string, time: string}) {
    return (
        <li  className={styles.item}>
        <h3>{task}</h3>
        <span>{time}</span>
    </li>
    )
}
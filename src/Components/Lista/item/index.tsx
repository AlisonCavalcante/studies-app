import styles from '../Lista.module.scss'

export default function Item({tasks, time}: {tasks: string, time: string}) {
    return (
        <li  className={styles.item}>
        <h3>{tasks}</h3>
        <span>{time}</span>
    </li>
    )
}
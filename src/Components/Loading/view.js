import styles from './style.module.scss';

export default function Loading() {
    return (
        <div className={styles.wrapper}>
            <div className={styles.loader}></div>
        </div>
    );
}
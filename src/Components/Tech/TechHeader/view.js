import styles from './style.module.scss';

export default function TechHeader() {
    return (
        <div className={styles.table_headers}>
            <div className={styles.header_item}>Logo</div>
            <div className={styles.header_item}>Tech</div>
            <div className={styles.header_item}>Year</div>
            <div className={styles.header_item}>Author</div>
            <div className={styles.header_item}>License</div>
            <div className={styles.header_item}>Language</div>
            <div className={styles.header_item}>Type</div>
            <div className={styles.header_item}>Favourites</div>
        </div>
    );
}
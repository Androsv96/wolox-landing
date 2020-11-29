import styles from './style.module.scss';

export default function TechFilters() {
    return (
        <>
            <input placeholder="Tech name" className={styles.filters} />

            <select className={styles.filters}>
                <option value="">Type</option>
                <option value="Back-End">Back-End</option>
                <option value="Front-End">Front-End</option>
                <option value="Mobile">Mobile</option>
            </select>

            <select className={styles.filters}>
                <option value="">Order by tech</option>
                <option value="Back-End">Ascending </option>
                <option value="Front-End">Descending </option>
            </select>
        </>
    );
}
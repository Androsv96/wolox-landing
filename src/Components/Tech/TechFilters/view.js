import styles from './style.module.scss';
import { SET_TECH_TO_FIND, SET_TECH_TYPE_SELECTED, SET_TECH_ORDER_SELECTED } from '../../../Redux/Actions'

export default function TechFilters({ actionDispatcher }) {
    return (
        <>
            <input placeholder="Tech name" className={styles.filters} onChange={(e) => actionDispatcher(SET_TECH_TO_FIND, e.currentTarget.value)} />

            <select className={styles.filters} onChange={(e) => actionDispatcher(SET_TECH_TYPE_SELECTED, e.currentTarget.value)}>
                <option value="">Type</option>
                <option value="Back-End">Back-End</option>
                <option value="Front-End">Front-End</option>
                <option value="Mobile">Mobile</option>
            </select>

            <select className={styles.filters} onChange={(e) => actionDispatcher(SET_TECH_ORDER_SELECTED, e.currentTarget.value)}>
                <option value="ASC">Ascending </option>
                <option value="DESC">Descending </option>
            </select>
        </>
    );
}
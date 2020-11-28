import styles from './style.module.scss';

export default function BenefitsIconDisplayer({ icon, label }) {
    return (
        <div className={styles.wrapper}>
            <img src={icon} alt={label} className={styles.img}></img>
            <label>{label}</label>
        </div>
    )
}
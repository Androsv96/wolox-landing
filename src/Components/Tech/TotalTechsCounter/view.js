import styles from './style.module.scss';

export default function TotalTechsCounter({ totalTechCounter }) {
    return (
        <div className={styles.wrapper}>{`Total techs: ${totalTechCounter}`}</div>
    );
}
import styles from './style.module.scss';

export default function TechRows({ techs }) {
    console.log(techs)
    return (
        techs?.map((data, idx) =>
            <div className={styles.table_row} key={idx}>
                <div className={styles.tech_item}><img src={data.logo} alt={`${data.tech}Logo`} /></div>
                <div className={styles.tech_item}>{data.tech}</div>
                <div className={styles.tech_item}>{data.year}</div>
                <div className={styles.tech_item}>{data.author}</div>
                <div className={styles.tech_item}>{data.license}</div>
                <div className={styles.tech_item}>{data.language}</div>
                <div className={styles.tech_item}>{data.type}</div>
                <div className={styles.tech_item}>
                    <input type="checkbox" />
                </div>
            </div >
        )
    );
}
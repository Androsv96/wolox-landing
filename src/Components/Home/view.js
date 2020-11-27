import styles from './style.module.scss';

export default function Home() {
    return (
        <section className={styles.home_section}>

            <div className={styles.left_side}>
                <div>
                    <h2 className={styles.normal_weight}>Bienvenido a tu</h2>
                    <h2>
                        <span>Entrevista Técnica </span>
                        <span className={styles.normal_weight}>en</span>
                    </h2>
                    <h2>
                        <span className={styles.accent_color}>Wolox</span>
                    </h2>
                </div>
            </div>

            <div className={styles.right_side}>
            </div>


        </section>
    );

}
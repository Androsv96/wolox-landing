import styles from './style.module.scss';

export default function Welcome() {
    return (
        <section className={styles.home_section} id="greetings">

            <div className={styles.left_side}>
                <div>
                    <h2 className={styles.lighter}>Bienvenido a tu</h2>
                    <h2>
                        <span className={styles.bold}>Entrevista Técnica </span>
                        <span className={styles.lighter}>en</span>
                    </h2>
                    <h2 className={styles.accent}>Wolox</h2>
                </div>
            </div>

            <div className={styles.right_side}>
            </div>


        </section>
    );

}
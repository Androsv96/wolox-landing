import styles from './style.module.scss';
import Button from '../Button/view';

export default function Footer() {
    return (
        <footer id="footer" className={styles.footer}>
            <div>
                <h2>Gracias por <span className={styles.blue}>completar el ejercicio</span></h2>
                <h3 className={styles.normal_weight}>Te invitamos a ver más información</h3>
                <Button border="contained">Conocer más</Button>
            </div>

            <div className={styles.wolox_logo}></div>

        </footer>
    );
}
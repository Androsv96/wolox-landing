import styles from './style.module.scss';

export default function Header() {
    return (
        <header className={`${styles.header}`}>

            <div className={styles.logo}></div>

            <nav className={styles.nav}>
                <ul>
                    <li>Inicio</li>
                    <li>Beneficios</li>
                    <li>Login</li>
                    <li>Sign up</li>
                </ul>
            </nav>

        </header>
    );
}
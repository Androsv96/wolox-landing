import Welcome from '../Welcome/view';
import WoloxInfo from '../WoloxInfo/view';
import Benefits from '../Benefits/view';
import Footer from '../Footer/view';
import styles from './style.module.scss';

export default function Home() {
    return (
        <>
            <Welcome />
            <WoloxInfo />
            <Benefits />
            <hr className={styles.separator} />
            <Footer />
        </>
    );
}
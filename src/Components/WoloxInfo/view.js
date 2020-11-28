import styles from './style.module.scss';
import Button from '../Button/view';
import { WOLOX_TWITTER_URL } from '../../Utils/Constants';

export default function SocialMedia() {
    return (
        <div className={styles.work_on_wrapper}>
            <div className={styles.left_side}>

                <h2>
                    <span className={styles.accent}>350 &nbsp;+&nbsp; </span>
                    <span className={styles.blue}>Xoloxers</span>
                </h2>

                <div className={styles.social_media}>
                    <div className={styles.twitter_logo}></div>
                    <div className={`${styles.white} ${styles.small_font}`}>@Wollox</div>
                </div>

                <div>
                    <Button onClick={() => window.open(WOLOX_TWITTER_URL)}> <span className={styles.white}>Siguenos</span></Button>
                </div>

            </div>
            <div className={styles.right_side}>
                <h2>Trabajamos para</h2>
                <h2>
                    <span className={styles.blue}>convertir </span>
                    <span className={styles.accent}>ideas </span>
                     en
                </h2>
                <h2>productos.</h2>
            </div>
        </div>
    );
}
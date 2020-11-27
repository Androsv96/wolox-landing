import styles from './style.module.scss';
import sharedStyles from '../../Utils/Styles/shared.module.scss';

export default function SocialMedia() {
    return (
        <div className={styles.work_on_wrapper}>
            <div className={styles.left_side}>

                <h2>
                    <span className={sharedStyles.accent_color}>350 &nbsp;+&nbsp; </span>
                    <span className={sharedStyles.primary_blue}>Xoloxers</span>
                </h2>

                <div className={styles.social_media}>
                    <div className={styles.twitter_logo}></div>
                    <div className={`${sharedStyles.primary_white} ${styles.medium_font_size}`}>@Wollox</div>
                </div>

                <div>
                    <button>Siguenos</button>
                </div>

            </div>
            <div className={styles.right_side}></div>
        </div>
    );
}
import styles from './style.module.scss';
import { BENEFITS } from '../../Utils/Constants';
import BenefitsIconDisplayer from '../BenefitsIconDisplayer/view';

export default function Benefits() {
    return (
        <section id="benefits" className={styles.benefits}>
            <h3 >Entre los beneficios que ofrecemos se encuentran <span>;)</span></h3>
            <div className={styles.benefits_wapper}>
                {
                    BENEFITS.map((obj, idx) => <BenefitsIconDisplayer icon={obj.icon} label={obj.label} key={idx} />)
                }
            </div>

            <hr></hr>

        </section>
    );
}
import React, { useEffect } from 'react';
import styles from './style.module.scss';
import TechFilters from './TechFilters/view';
import TechHeader from './TechHeader/view';
import TechRows from './TechRows/view';
import Loading from '../Loading/view';
import { GET_TECHS_BEGIN } from '../../Redux/Actions';

export default function Tech({ techsReducer, actionDispatcher, }) {

    const { techs, isLoading } = techsReducer;

    useEffect(() => {
        if (techs.length === 0) actionDispatcher(GET_TECHS_BEGIN);
    }, [techs, actionDispatcher]);

    return (
        <div className={styles.tech_section}>
            <h2>
                Techs
            </h2>

            {
                isLoading ? <Loading />
                    :
                    <>
                        <div className={styles.filter_section}>
                            <TechFilters />
                        </div>

                        <div className={styles.table_section}>
                            <TechHeader />
                            <TechRows techs={techs} />
                        </div>
                    </>
            }
        </div>
    );
}
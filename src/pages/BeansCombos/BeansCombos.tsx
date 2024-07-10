import React, { useEffect, useState } from 'react';
import styles from './BeansCombos.module.css';
import { fetchBeanCombos } from '../../utils/api';
import { BeanCombo } from '../../types/BeanInterfaces';


const BeansCombos: React.FC = () => {
    const [combos, setCombos] = useState<BeanCombo[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const combosData = await fetchBeanCombos();
                setCombos(combosData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bean combos:', error);
                setError('Error fetching bean combos');
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return <p className={styles.loading}>Loading...</p>;
    }

    if (error) {
        return <p className={styles.error}>{error}</p>;
    }

    return (
        <section className={styles.beansCombosContainer}>
            <h2 className={styles.combosTitle}>Beans' Combinations</h2>
            <ul className={styles.combosList}>
                {combos.map((combo, index) => (
                    <li className={styles.combosItem}
                        key={`${combo.combinationId}-${index}`}>
                        <h3 className={styles.itemTitle}>{combo.name}</h3>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BeansCombos;





import { useEffect, useState } from 'react';
import styles from './BeansFacts.module.css';
import { BeanFact } from '../../types/BeanInterfaces';
import { fetchBeanFacts } from '../../utils/api';

const BeanFacts = () => {
    const [facts, setFacts] = useState<BeanFact[]>([]);
    const [error, setError] = useState<string>('');
    const [loading, setLoading] = useState<boolean>(true);


    useEffect(() => {
        const fetchData = async () => {
            try {
                const factsData = await fetchBeanFacts();
                setFacts(factsData);
                setLoading(false);
            } catch (error) {
                console.error('Error fetching bean facts:', error);
                setError('Error fetching bean facts');
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
        <section className={styles.beanFactsContainer}>
            <h2 className={styles.factTitle}>Beans' Facts</h2>
            <ul className={styles.factList}>
                {facts.map((fact, index) => (
                    <li
                        className={styles.factItem}
                        key={`${fact.factId}-${index}`}>
                        <h3 className={styles.factTitle}>{fact.title}</h3>
                        <p className={styles.factDescription}>{fact.description}</p>
                    </li>
                ))}
            </ul>
        </section>
    );
};

export default BeanFacts;

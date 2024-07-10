import React, { useEffect, useState } from 'react';
import styles from './BeansList.module.css';
import InfiniteScroll from 'react-infinite-scroll-component';
import { fetchBeans } from '../../utils/api';
import { Bean } from '../../types/BeanInterfaces';


const BeansList: React.FC = () => {
    const [beans, setBeans] = useState<Bean[]>([]);
    const [page, setPage] = useState(1);
    const [hasMore, setHasMore] = useState(true);
    const [error, setError] = useState<string>('');

    useEffect(() => {
        const fetchData = async () => {
            try {
                const { beansData, hasMoreData } = await fetchBeans(page);

                setBeans(prevBeans => [...prevBeans, ...beansData]);
                setHasMore(hasMoreData);

                if (!hasMoreData) {
                    console.log('No more beans to fetch.');
                }
            } catch (error) {
                console.error('Error fetching beans:', error);
                setError('Error fetching beans');
            }
        };

        fetchData();
    }, [page]);

    const loadMore = () => {
        setPage(prevPage => prevPage + 1);
    };

    if (error) {
        return <p className={styles.error}>{error}</p>;
    }

    return (
        <section className={styles.listContainer}>
            <h1 className={styles.listTitle}>Beans' List</h1>
            <InfiniteScroll
                dataLength={beans.length}
                next={loadMore}
                hasMore={hasMore}
                loader={<h4 className={styles.loading}>Loading...</h4>}
                endMessage={<p>No more beans to load</p>}
            >
                <ul className={styles.list}>
                    {beans.map((bean, index) => (
                        <li key={`${bean.beanId}-${index}`} className={styles.listItem}>
                            <img src={bean.imageUrl} alt={bean.flavorName} className={styles.image} />
                            <div className={styles.details}>
                                <h2 className={styles.flavorName}>{bean.flavorName}</h2>
                                <p className={styles.description}>{bean.description}</p>
                            </div>
                        </li>
                    ))}
                </ul>
            </InfiniteScroll>
        </section>
    );
};

export default BeansList;
